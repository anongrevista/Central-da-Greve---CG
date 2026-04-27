"use client";

import { useState } from "react";
import { Instagram, Play, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIAL_POSTS = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    caption: "@cefisma: Mobilização no IFUSP: Assembleia Geral define novos rumos para a pauta acadêmica.",
    likes: "1.2k",
    comments: "45",
    link: "https://www.instagram.com/cefisma/"
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    caption: "@dceusp: Entenda a importância das cotas e do Enem-USP na história das nossas conquistas.",
    likes: "850",
    comments: "22",
    link: "https://www.instagram.com/dceusp/"
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    caption: "@cefisma: Comando de Greve se reúne com a Reitoria para discutir contratação de professores.",
    likes: "2.1k",
    comments: "89",
    link: "https://www.instagram.com/cefisma/"
  }
];


export function SocialFeed() {
  const [activePost, setActivePost] = useState<string | null>(null);

  return (
    <div id="social-feed" className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
            <Instagram size={22} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white leading-tight">Posts da Greve</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Acompanhe CEFISM, DCE e mais</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-white transition-colors">
          <ExternalLink size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SOCIAL_POSTS.map((post) => (
          <div 
            key={post.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 transition-all hover:border-primary/50 cursor-pointer"
            onClick={() => setActivePost(post.id)}
          >
            {/* Thumbnail */}
            <img 
              src={post.thumbnail} 
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100" />

            {/* Play/Action Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                <Play size={24} className="text-white fill-white ml-1" />
              </div>
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <p className="text-xs text-white/90 line-clamp-2 mb-3 font-medium">
                {post.caption}
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-white/60">
                <span className="flex items-center gap-1">
                  <Heart size={14} /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={14} /> {post.comments}
                </span>
              </div>
            </div>

            {/* Lazy Load Mock Iframe (Placeholder for Real Integration) */}
            {activePost === post.id && (
              <div className="absolute inset-0 bg-black z-10 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-gray-400 text-sm mb-4">Redirecionando para a publicação original...</p>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary/80 transition-colors"
                >
                  Abrir no Instagram
                </a>
                <button 
                  onClick={(e) => { e.stopPropagation(); setActivePost(null); }}
                  className="mt-4 text-xs text-gray-500 underline underline-offset-4"
                >
                  Voltar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
