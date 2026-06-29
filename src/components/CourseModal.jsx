import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, CheckCircle, Terminal, HelpCircle, Shield, Briefcase, Award } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#070b14]/85 backdrop-blur-xl"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl glass-premium border border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.15)] p-6 sm:p-8 z-10 scrollbar-thin neon-border-breathe"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/5 text-text-secondary hover:text-text-main hover:bg-white/10 hover:border-secondary/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-3 mb-8 border-b border-white/5 pb-6 pr-8"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            {course.level} • {course.duration}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-main neon-text-glow">
            {course.title}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            {course.subtitle}
          </p>
        </motion.div>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Info (Left) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 flex flex-col gap-6"
          >
            
            {/* Curriculum */}
            <motion.div variants={itemVariants}>
              <h3 className="font-display font-semibold text-base text-text-main mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-secondary" />
                Curriculum Syllabus
              </h3>
              <ul className="flex flex-col gap-2">
                {course.curriculum.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Prerequisites */}
            <motion.div variants={itemVariants}>
              <h3 className="font-display font-semibold text-base text-text-main mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Prerequisites
              </h3>
              <ul className="flex flex-col gap-2">
                {course.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Simulated Projects */}
            <motion.div variants={itemVariants}>
              <h3 className="font-display font-semibold text-base text-text-main mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Simulation Range Projects
              </h3>
              <ul className="flex flex-col gap-2">
                {course.projects.map((proj, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

          {/* Side Info (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-5 flex flex-col gap-6 bg-white/[0.02] p-5 rounded-2xl border border-white/5"
          >
            
            {/* Price Details */}
            <div>
              <span className="text-xs text-text-secondary block">Registration Tuition</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-text-main neon-text-glow">₹{course.price}</span>
                <span className="text-xs text-text-secondary line-through">₹{course.originalPrice}</span>
              </div>
            </div>

            {/* Tools Used */}
            <div>
              <span className="text-xs font-semibold text-text-main uppercase tracking-wider block mb-2">Simulated Tools</span>
              <div className="flex flex-wrap gap-1.5">
                {course.tools.map((tool, idx) => (
                  <span key={idx} className="text-[10px] text-text-main bg-white/5 border border-white/5 px-2 py-0.5 rounded hover:border-secondary/30 hover:bg-secondary/10 transition-all duration-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div>
              <span className="text-xs font-semibold text-text-main uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-secondary" />
                Career Outcome
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {course.careerOutcome}
              </p>
            </div>

            {/* Mentor */}
            <div>
              <span className="text-xs font-semibold text-text-main uppercase tracking-wider block">Assigned Advisor</span>
              <span className="text-xs text-accent mt-1 block font-medium">{course.mentor}</span>
            </div>

            {/* Direct Enroll Action */}
            <Link
              to={`/enroll?id=${course.id}`}
              className="w-full text-center py-3 bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-text-main rounded-xl btn-cinematic mt-4 block"
            >
              Enroll Now
            </Link>

          </motion.div>
        </div>

        {/* Modal Accordion FAQs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 border-t border-white/5 pt-8"
        >
          <h3 className="font-display font-semibold text-base text-text-main mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-secondary" />
            Course FAQs
          </h3>
          <div className="flex flex-col gap-4">
            {course.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-secondary/20 hover:bg-white/[0.03] transition-all duration-300">
                <span className="text-xs font-bold text-text-main block">{faq.q}</span>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
