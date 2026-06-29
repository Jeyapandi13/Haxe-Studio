import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Eye, Server, HeartHandshake } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      <div className="aurora-blur right-1/4 top-1/4" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-wider text-secondary bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
          >
            Legal Compliance
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-text-main mt-6 neon-text-glow"
          >
            Privacy <span className="gradient-text font-black">Guidelines</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-sm mt-4"
          >
            Last Updated: June 27, 2026. Review our data security principles.
          </motion.p>
        </div>

        {/* Document Body */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl glass border border-white/10 flex flex-col gap-8 text-sm text-text-secondary leading-relaxed neon-border-breathe"
        >
          
          <motion.section variants={itemVariants} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-1 icon-float">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text-main mb-2">1. Surveillance and Simulation Range Logs</h3>
              <p>
                To maintain physical network safety and validate grades, all activities, keystrokes, exploits, and traffic payloads within Haxe Studio simulation range laboratory instances are recorded. These logs are stored securely and reviewed exclusively by authorized instructional mentors to confirm student course completions.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-1 icon-float">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text-main mb-2">2. Identity Credentials Database</h3>
              <p>
                When enlisting, we collect your name, email address, contact numbers, and billing transactions. This metadata is strictly utilized to authenticate accounts, coordinate mentoring schedules, issue blockchain verified certificates, and handle payment clearances. We never distribute user data to advertising registries.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1 icon-float">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text-main mb-2">3. External Systems Disclaimer</h3>
              <p>
                All exploitation scripts, scanning tools, payload vectors, and methods demonstrated are for sandboxed educational evaluation only. Users are explicitly forbidden from using Haxe Studio methodologies on third-party computers without written host authorization. We cooperate fully with regional enforcement investigations.
              </p>
            </div>
          </motion.section>

          <motion.div variants={itemVariants} className="pt-8 border-t border-white/5 text-center flex flex-col items-center gap-3">
            <HeartHandshake className="w-8 h-8 text-yellow-500/80" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
            <h4 className="font-display font-bold text-text-main">Ethical Learning Commitment</h4>
            <p className="text-xs max-w-lg">
              By enlisting, you submit to sandbox-only execution and affirm that you will protect the integrity of open network infrastructures globally.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
