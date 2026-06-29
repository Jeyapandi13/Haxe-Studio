import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Send, MessageCircle } from 'lucide-react';
import haxeLogo from '../assets/haxe_logo.jpg';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-4 h-4"}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-4 h-4"}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-4 h-4"}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our security dispatch.');
  };

  return (
    <footer className="relative bg-bg-primary border-t border-white/5 overflow-hidden gradient-border-top">
      {/* Decorative Aurora Glow */}
      <div className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-primary/30 to-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col items-center text-center gap-6 mb-16 max-w-2xl mx-auto">
          
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]" style={{ animation: 'neon-breathe 4s ease-in-out infinite' }}>
              <img src={haxeLogo} alt="Haxe Studio Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-text-main leading-tight group-hover:text-secondary transition-colors duration-300">
                HAXE STUDIO
              </span>
              <span className="text-[8px] text-text-secondary font-medium tracking-wider uppercase leading-none mt-0.5">
                Cybersecurity
              </span>
            </div>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-md">
            Empowering next-generation cyber defenders with cinematic ethical hacking experiences, advanced virtual warfare simulation, and elite industry mentorship.
          </p>
          {/* Social Icons — Neon Pop */}
          <div className="flex items-center gap-3">
            {[
              { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/910000000000", label: "WhatsApp" },
              { icon: <Send className="w-4 h-4" />, href: "https://t.me/haxestudio", label: "Telegram" },
              { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com", label: "Twitter" },
              { icon: <Github className="w-4 h-4" />, href: "https://github.com", label: "GitHub" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-text-main hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-transparent social-neon"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} Haxe Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Server Status: <span className="text-accent font-semibold" style={{ animation: 'cyber-pulse 2s ease-in-out infinite', display: 'inline-block' }}>Online</span></span>
            <span>Designed for Cyber Elite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
