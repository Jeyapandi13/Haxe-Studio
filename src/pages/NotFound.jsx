import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Terminal, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden flex items-center justify-center">
      {/* Decorative Aurora Blur */}
      <div className="aurora-blur left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-md w-full px-6 relative z-10 text-center"
      >
        
        <div className="p-8 rounded-3xl glass border border-red-500/20 shadow-[0_0_60px_rgba(239,68,68,0.1)] flex flex-col items-center gap-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-red-500/40" />
          
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }}>
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h1 className="font-display font-extrabold text-3xl text-text-main leading-tight">
            SYSTEM CRASH <br />
            <span className="text-red-500 font-mono text-xl glitch-text">404: ACCESS DENIED</span>
          </h1>

          <div className="w-full text-left bg-black/60 border border-white/5 p-4 rounded-xl font-mono text-[10px] text-red-400/90 leading-relaxed cinematic-scanlines overflow-hidden">
            <p className="text-text-secondary relative z-10">SYSTEM DIAGNOSTIC REPORT:</p>
            <p className="mt-1.5 relative z-10">[!] ERROR: Requested node address was not found.</p>
            <p className="relative z-10">[!] ADDR: {window.location.pathname}</p>
            <p className="relative z-10">[!] STATUS: Disconnected from active grid segment.</p>
            <p className="relative z-10">[!] RECOMMEND: Recalibrate route keys.</p>
          </div>

          <Link
            to="/"
            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-text-main rounded-xl btn-cinematic flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Command Base
          </Link>
        </div>

      </motion.div>
    </div>
  );
}
