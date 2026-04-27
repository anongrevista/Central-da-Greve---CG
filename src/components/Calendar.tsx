"use client";

import { Calendar as CalendarIcon, Clock, MapPin, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const EVENTS = [
  {
    date: "2026-04-27",
    title: "Assembleia Geral IFUSP",
    time: "14:00",
    location: "Auditório Abrahão de Moraes",
    category: "Assembleia",
    description: "Discussão sobre o andamento da greve e novas pautas de reivindicação.",
    priority: "high"
  },
  {
    date: "2026-04-28",
    title: "Prazo Final Edital PUB",
    time: "23:59",
    location: "Online (Jupiterweb)",
    category: "Acadêmico",
    description: "Último dia para submissão de projetos e inscrições no edital PUB.",
    priority: "medium"
  },
  {
    date: "2026-04-29",
    title: "Reunião de Comandos (Geral USP)",
    time: "10:00",
    location: "Sede do DCE",
    category: "Reunião",
    description: "Articulação entre comandos de diferentes institutos para pauta unificada.",
    priority: "high"
  },
  {
    date: "2026-05-01",
    title: "Ato Unitário - Dia do Trabalhador",
    time: "09:00",
    location: "Vão Livre do MASP",
    category: "Manifestação",
    description: "Mobilização conjunta com outras categorias em defesa dos serviços públicos.",
    priority: "medium"
  }
];

export function Calendar({ limit }: { limit?: number }) {
  const displayedEvents = limit ? EVENTS.slice(0, limit) : EVENTS;

  return (
    <div className="grid grid-cols-1 gap-6">
      {displayedEvents.map((event, idx) => (
        <div 
          key={idx}
          className="group relative bg-[#1a1f2e] border border-gray-800 hover:border-primary/50 rounded-2xl p-6 transition-all hover:shadow-[0_0_30px_rgba(15,102,136,0.1)] overflow-hidden"
        >
          {/* Priority Indicator */}
          <div className={cn(
            "absolute top-0 left-0 w-1.5 h-full",
            event.priority === 'high' ? "bg-red-500" : "bg-primary"
          )} />

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Date Box */}
            <div className="flex flex-col items-center justify-center min-w-[80px] p-3 rounded-xl bg-gray-900 border border-gray-800 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}
              </span>
              <span className="text-3xl font-black text-white">
                {new Date(event.date).getDate() + 1}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded",
                  event.category === 'Assembleia' ? "bg-red-500/20 text-red-400" : 
                  event.category === 'Acadêmico' ? "bg-secondary/20 text-secondary" : 
                  "bg-primary/20 text-primary"
                )}>
                  {event.category}
                </span>
                <h2 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                  {event.title}
                </h2>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={14} className="text-primary" />
                  <span>Horário: <strong>{event.time}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin size={14} className="text-primary" />
                  <span>Local: <strong>{event.location}</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-auto md:mt-0">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-primary transition-all text-xs font-bold text-gray-300 hover:text-white">
                <Info size={14} />
                Detalhes
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
