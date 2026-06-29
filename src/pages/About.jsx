import React from 'react';
import { motion } from 'framer-motion';

import { Shield, Target, Cpu, Users, Award, BookOpen, Terminal, CheckCircle } from 'lucide-react';
import TiltCard from '../components/TiltCard';



const timeline = [
  { year: 'Phase 1', title: 'Target Reconnaissance & OSINT', desc: 'Students learn to sniff traffic, map server subdomains, and identify system service banners.' },
  { year: 'Phase 2', title: 'Weaponization & Delivery', desc: 'Crafting custom script scripts, bypassing endpoint protection and executing initial access payloads.' },
  { year: 'Phase 3', title: 'Active Exploitation & Pivot', desc: 'Compromising host processes, dumping memory tables, and pivoting to internal networks.' },
  { year: 'Phase 4', title: 'Exfiltration & Red Team Rep.', desc: 'Packaging targeted sensitive datasets, evading SIEM monitoring, and reporting vulnerability chains.' }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function About() {
  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="aurora-blur left-1/4 top-1/4" />
      <div className="aurora-blur right-10 bottom-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-wider text-secondary bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
          >
            Our Mission & Origin
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl text-text-main mt-6 neon-text-glow"
          >
            Redefining Hacking <span className="gradient-text font-black glitch-text">Education</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-base sm:text-lg mt-6 leading-relaxed"
          >
            We believe cybersecurity cannot be mastered by listening to slides. It requires active combat inside live virtual ranges. Haxe Studio was established to deliver luxury-tier simulation experiences for modern defenders.
          </motion.p>
        </div>

        {/* Mission & Vision Grid — 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard className="p-8 rounded-2xl glass border border-white/5 relative holo-shimmer neon-card overflow-hidden h-full" glowColor="rgba(124, 58, 237, 0.12)">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 icon-float">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-text-main">Our Mission</h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                To supply developers, administrators, and security professionals with practical offensive capabilities. We aim to close the gap between traditional software security theory and real-world combat readiness.
              </p>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard className="p-8 rounded-2xl glass border border-white/5 relative holo-shimmer neon-card overflow-hidden h-full" glowColor="rgba(0, 212, 255, 0.12)">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 icon-float">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-text-main">Our Vision</h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                A secure digital perimeter constructed by professionals who understand exactly how adversaries plan, execute, and scale compromise patterns. Defensive strength through offensive intelligence.
              </p>
            </TiltCard>
          </motion.div>
        </div>

        {/* Why Choose Us & Methodology — Scanline Overlay */}
        <div className="py-16 bg-bg-secondary/40 border-y border-white/5 rounded-3xl p-8 mb-24 backdrop-blur-sm cinematic-scanlines relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="font-display font-bold text-3xl text-text-main neon-text-glow">Offensive Learning Methodology</h2>
            <p className="text-text-secondary text-sm mt-3">Our curriculum structured phases simulate the lifecycle of real cyber warfare engagements.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {timeline.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative flex flex-col gap-3">
                <span className="text-4xl font-extrabold text-secondary/20 font-display">{item.year}</span>
                <h4 className="font-display font-bold text-base text-text-main">{item.title}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>



      </div>
    </div>
  );
}
