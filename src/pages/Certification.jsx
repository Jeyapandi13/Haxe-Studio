import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Certification() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/certificate.html';
    link.download = 'haxestudio-certificate.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Decorative background blur */}
      <div className="aurora-blur left-1/4 top-1/4" />
      <div className="aurora-blur right-1/4 bottom-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-wider text-secondary bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
          >
            Credential Console
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl text-text-main mt-6 neon-text-glow"
          >
            Your <span className="gradient-text font-black glitch-text">Certificate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-sm sm:text-base mt-6"
          >
            Review and download your official Haxe Studio certified credentials.
          </motion.p>
        </div>

        {/* Certificate Display */}
        <div className="flex flex-col items-center gap-8 w-full">
          
          {/* Certificate Iframe Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.15)] bg-black/40 backdrop-blur-sm neon-border-breathe"
          >
            <iframe 
              src="/certificate.html" 
              title="Haxe Studio Certificate"
              className="w-full border-0"
              style={{ height: '680px' }}
              scrolling="no"
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-text-main rounded-full btn-cinematic"
            >
              <Download className="w-4 h-4" /> Download Certificate
            </button>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
