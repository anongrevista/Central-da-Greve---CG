"use client";

import { Info, ExternalLink, FileCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ReferenceProps {
  id: string;
  index: number;
  title: string;
  date: string;
  url?: string;
  children: React.ReactNode;
}

export function Reference({ id, index, title, date, url, children }: ReferenceProps) {
  const [isVisible, setIsVisible] = useState(false);

  const sups = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
  const indexStr = index.toString().split('').map(d => sups[parseInt(d)]).join('');

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="cursor-help border-b border-dotted border-primary/60 text-primary-light hover:text-primary transition-colors font-medium">
        {children}
        <a 
          href={`#ref-${id}`}
          onClick={(e) => {
            e.stopPropagation();
            const el = document.getElementById(`ref-${id}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-[10px] ml-0.5 font-bold text-secondary hover:text-white transition-colors no-underline"
        >
          {indexStr}
        </a>
      </span>

      {/* Hover Card */}
      <div className={cn(
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 z-50 transition-all duration-200 pointer-events-none",
        isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
      )}>
        <div className="bg-[#1a1f2e] border border-gray-700/50 rounded-xl p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-start justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileCheck size={16} className="text-primary" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{date}</span>
          </div>
          
          <h4 className="text-sm font-bold text-white mb-1 leading-tight">
            Ofício {id}
          </h4>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            {title}
          </p>

          {url && (
            <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 font-semibold italic">Documento Oficial</span>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-bold text-secondary hover:text-white transition-colors"
              >
                ACESSAR <ExternalLink size={10} />
              </a>
            </div>
          )}
          
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1f2e] border-r border-b border-gray-700/50 rotate-45 -mt-1.5" />
        </div>
      </div>
    </span>
  );
}
