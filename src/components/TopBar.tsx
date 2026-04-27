"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-8 py-6 w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-3 text-gray-400 bg-transparent">
        <Search size={18} />
        <input 
          type="text" 
          placeholder="Procurar documentos..." 
          className="bg-transparent border-none outline-none text-sm placeholder:text-gray-500 w-64 text-white"
        />
      </div>

      <Link 
        href="/" 
        className="flex items-center gap-3 hover:opacity-80 transition-all group"
      >
        <div className="text-right hidden sm:block">
          <span className="block text-xs font-black tracking-[0.2em] text-gray-500 uppercase leading-none mb-1">Portal Interativo</span>
          <div className="flex items-center justify-end font-black text-lg leading-none">
            <span className="text-primary">HUB</span>
            <span className="text-white mx-1">da</span>
            <span className="text-secondary">Greve</span>
          </div>
        </div>
        <div className="relative w-10 h-10 p-0.5 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-primary/50 transition-colors flex items-center justify-center shadow-lg">
          <Image 
            src="/logo.svg" 
            alt="Logo HUB da Greve" 
            width={32} 
            height={32}
            className="w-full h-full"
          />
        </div>
      </Link>
    </header>
  );
}
