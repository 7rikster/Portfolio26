"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { FrozenRoute } from "./FrozenRoute"
import { useEffect } from "react"

// Create a global registry outside the React lifecycle so it isn't reset by HMR or unmount closures
export const globalScrollRegistry: Record<string, number> = {}

// Keep track of the current path continuously based on window.location
// This strictly avoids React closure stale state during Framer Motion unmount delays
let currentNativePath = ""

if (typeof window !== "undefined") {
  currentNativePath = window.location.pathname
  
  // Continuously record scroll position into the global registry
  window.addEventListener("scroll", () => {
    // Only record if we haven't started an exit transition (which locks the native path)
    if (currentNativePath === window.location.pathname) {
      globalScrollRegistry[window.location.pathname] = window.scrollY
    }
  }, { passive: true })
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Update the native path tracker whenever Next.js completely finishes entering a new route
  useEffect(() => {
    currentNativePath = window.location.pathname
  }, [pathname])

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => {
        // We guarantee we are getting the NEW page's path because onExitComplete fires
        // only AFTER Next.js has mounted the new DOM elements and updated window.location.
        const newPath = window.location.pathname
        const savedPos = globalScrollRegistry[newPath] || 0
        
        window.scrollTo(0, 0)
        currentNativePath = newPath // Lock tracker to new path
        
        if (savedPos > 0) {
          // Framer Motion `whileInView` animations shift the page layout heavily as we scroll down.
          setTimeout(() => {
            // Force layout recalculation
            document.body.offsetHeight;
            window.scrollTo({ top: savedPos, behavior: "smooth" })
            
            // Fallback correction: after the smooth scroll animation completes (approx 800ms)
            setTimeout(() => {
              const currentPos = window.scrollY;
              if (Math.abs(currentPos - savedPos) > 50) {
                 window.scrollTo({ top: savedPos, behavior: "smooth" });
              }
            }, 800);
          }, 100)
        }
      }}
    >
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}
