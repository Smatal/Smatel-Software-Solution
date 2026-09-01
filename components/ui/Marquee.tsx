"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  items: string[];
}

export function Marquee({ className, items }: MarqueeProps) {
  // Duplicate items to ensure smooth infinite scrolling
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <section className={cn("py-8 bg-zinc-50 border-t border-b border-gray-200 overflow-hidden flex items-center relative", className)}>
      
      {/* CSS infinite animation */}
      <div className="flex w-max animate-[marquee_20s_linear_infinite]">
        {displayItems.map((item, i) => (
          <div key={i} className="flex items-center gap-8 pr-8">
            <span className={cn(
              "text-4xl md:text-5xl font-extrabold uppercase tracking-tight whitespace-nowrap",
              i % 2 === 0 
                ? "text-gray-900" 
                : "text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(0,0,0,0.2)]"
            )}>
              {item}
            </span>
            <span className="text-2xl text-[#21BDBC]">✦</span>
          </div>
        ))}
      </div>

    </section>
  );
}
