"use client";

import { useEffect, useState } from "react";

export default function DateTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const parts = formatted.split(", ");
      const finalString = `${parts[0]}, ${parts[1]} ${parts[2]} • ${parts[3]}`;

      setTime(finalString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[12px] text-white/50 font-light tracking-widest">
      {time}
    </div>
  );
}