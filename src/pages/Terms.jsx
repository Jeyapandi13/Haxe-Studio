import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Award, Scale } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      <div className="aurora-blur left-1/4 top-1/4" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-wider text-secondary bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
          >
            Legal Agreement
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-text-main mt-6 neon-text-glow"
          >
            Terms of <span className="gradient-text font-black">Engagement</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-sm mt-4"
          >
            Last Updated: June 27, 2026. Review rules for interactive cyber operations.
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
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text-main mb-2">1. Scope of Enlistment</h3>
              <p>
                Access keys issued to Haxe Studio ranges are individual and non-transferable. Attempting to share account keys, clone range environments, or dump raw virtual hard disks (VMDKs) will lead to immediate account termination, verification status revocation, and permanent bans without eligibility for refunds.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-1 icon-float">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text-main mb-2">2. Acceptable Hacking Actions</h3>
              <p>
                Hacking techniques taught under our curriculums MUST only be run against ranges explicitly flagged as virtual targets (e.g. *.range.haxestudio.internal). Scanning or targeting external web hosts, company portals, or networks is a serious breach of ethical code and triggers immediate ban and database reporting.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1 icon-float">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text-main mb-2">3. Intellectual Property Rights</h3>
              <p>
                All scripts, exploit walk-through videos, specialized payloads, grid infrastructure code, and verification metrics are proprietary property of Haxe Studio. Re-selling, recording, or publishing course videos on video-sharing platforms constitutes severe breach of copyright laws and triggers legal injunctions.
              </p>
            </div>
          </motion.section>

          <motion.div variants={itemVariants} className="pt-8 border-t border-white/5 text-center flex flex-col items-center gap-3">
            <Award className="w-8 h-8 text-yellow-500/80" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
            <h4 className="font-display font-bold text-text-main">Adversary Code Vow</h4>
            <p className="text-xs max-w-lg">
              By entering our virtual spaces, you swear to behave ethically, validate threat patterns safely, and defend digital civil liberties using the powers conferred.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
