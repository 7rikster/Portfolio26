"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { HeaderContents } from "@/lib/config";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AlignLeft, LogOut, Sparkles, UserRound } from "lucide-react";
import DateTime from "./dateTime";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

interface HeaderItem {
  title?: string;
  type?: string;
  link: string;
  icon?: any;
}

type HeaderContents = HeaderItem[];

function Header() {
  const lastScrollYRef = useRef(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  const router = useRouter();
  const pathName = usePathname();

  let headerContents = HeaderContents;

  function handleDashboardClick() {
    setDropdownOpen(false);
    
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add("floating-nav");
      } else {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add("floating-nav");
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed  w-[94%] flex justify-center top-2 sm:top-4 z-500 h-12 sm:h-18 border-none transition-all duration-700  `}
    >
      <header
        className={`absolute top-1/2 w-full max-w-7xl -translate-y-1/2 px-4 border border-white/12 rounded-lg bg-black/90 backdrop-blur-lg`}
      >
        <nav className="flex size-full items-center justify-between p-1 sm:p-2 ">
          
          <div className="flex items-center gap-7 text-2xl sm:text-3xl font-semibold text-white ">
            <Link href="/">
              <div className="ml-2 py-1 flex items-center gap-2">
                <div className="bg-[#f5f0e8] p-2 rounded-lg">
                    <h1 className="text-black text-[1rem] sm:text-[1.2rem] font-bold">PK</h1>
                </div>
                <div className="flex flex-col gap-[1px] hidden sm:flex ">
                    <h1 className="text-[1.3rem] text-[#f5f0e8]">Priyanshu Kashyap</h1>
                    <DateTime />
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden h-full items-center lg:flex">
            <div className="hidden lg:block">
              {headerContents &&
                headerContents.length > 0 &&
                headerContents
                  .filter((item) => item.type === "text")
                  .map((item, index) => (
                    <Link href={item.link} key={index}>
                      <span key={index} className="nav-hover-btn ">
                        {item.title}
                      </span>
                    </Link>
                  ))}
            </div>
          </div>
          <div
            className={`${
              pathName.startsWith("/admin") ? "hidden" : ""
            } lg:hidden`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 md:mr-10">
                  <AlignLeft className="text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 z-1000">
                <SheetHeader className="flex justify-center items-center flex-row">
                  <SheetTitle className="text-3xl font-semibold flex flex-col items-center">
                    <h1 className="text-[#f5f0e8]">MENU</h1>
                    <DateTime />
                  </SheetTitle>     
                </SheetHeader>
                <div className="w-full h-[1px] bg-white/20"></div>
                <div className="flex flex-col space-y-1">
                  {HeaderContents &&
                    HeaderContents.length > 0 &&
                    HeaderContents.filter(
                      (item) => item.type === "text"
                    ).map((item, index) => (
                      <Link href={item.link} key={index}>
                        <SheetClose>
                          <Button
                            variant="ghost"
                            className="w-full flex justify-start"
                          >
                            {item.title}
                          </Button>
                        </SheetClose>
                      </Link>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
