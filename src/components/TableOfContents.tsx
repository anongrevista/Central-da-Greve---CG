"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items?: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!items || items.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry and set it as active
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -40% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const displayItems = items || [];

  if (displayItems.length === 0) return null;

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 pl-6 border-l border-gray-800/50 py-8">
      <h3 className="text-xs font-semibold text-gray-400 mb-6 tracking-wider uppercase">Conteúdo do Documento</h3>
      <nav className="flex flex-col gap-1">
        {displayItems.map((item) => {
          const isActive = activeId === item.id || (activeId === null && displayItems[0].id === item.id);
          return (
            <div key={item.id} className="relative">
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary rounded-r" />
              )}
              <a
                href={`#${item.id}`}
                className={cn(
                  "block py-2 px-4 text-sm rounded-r-md transition-colors",
                  isActive 
                    ? "bg-primary/20 text-blue-400 font-medium" 
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
                )}
              >
                {item.label}
              </a>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
