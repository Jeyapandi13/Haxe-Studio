import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { 
  Shield, Cpu, BookOpen, Award, ChevronDown, CheckCircle, 
  Terminal, Zap, Flame, Compass, HelpCircle, ArrowRight 
} from 'lucide-react';
import HeroThree from '../components/HeroThree';
import TiltCard from '../components/TiltCard';
import { courses } from '../data/coursesData';

gsap.registerPlugin(ScrollTrigger);

// Features Section data
const features = [
  {
    icon: <Terminal className="w-6 h-6 text-secondary" />,
    title: 'Adversary Simulations',
    desc: 'Practice in sandboxed networks simulating actual enterprise architectures under fire.',
    glow: 'rgba(0, 212, 255, 0.12)'
  },
  {
    icon: <Cpu className="w-6 h-6 text-accent" />,
    title: 'AI-Powered Assistance',
    desc: 'Get immediate feedback on exploitation paths and exploit payload debugging 24/7.',
    glow: 'rgba(20, 241, 149, 0.12)'
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Live Target Ranges',
    desc: 'Deploy instances dynamically to practice OSINT, buffer overflows, and AD compromise.',
    glow: 'rgba(124, 58, 237, 0.12)'
  },
  {
    icon: <Award className="w-6 h-6 text-secondary" />,
    title: 'Cryptographic Degrees',
    desc: 'Secure verified blockchain-backed certificates with instant QR scanner credentials.',
    glow: 'rgba(0, 212, 255, 0.12)'
  }
];

// Roadmap milestones
const milestones = [
  { step: '01', title: 'Linux & Fundamentals', pack: 'Beginner Pack', desc: 'Secure the basics of networking, systems architecture, and OSINT.' },
  { step: '02', title: 'Network Exploits & Scanning', pack: 'Penetration Testing Pack', desc: 'Audit protocols, sniff packets, write Metasploit payloads, and breach targets.' },
  { step: '03', title: 'Adversary Tactics', pack: 'Red Team Pack', desc: 'Reverse engineer APIs, bypass active antivirus sensors, and hack mobile apps.' },
  { step: '04', title: '1-on-1 Master Class', pack: 'Elite Master Program', desc: 'Engage in dedicated private warfare sessions, mentorship, and enterprise-grade breaches.' }
];


// FAQ list
const faqs = [
  { q: 'How long do I get access to the laboratory ranges?', a: 'Depending on the tier, access ranges from 30 days up to lifetime access. You can also top up your lab time directly through the dashboard.' },
  { q: 'Can I pay in monthly installments?', a: 'Yes, during checkout on the Enroll page, you can choose flexible EMI options or UPI split payments.' },
  { q: 'Do I get support if I get stuck in a laboratory challenge?', a: 'Absolutely. We provide dedicated support channels including WhatsApp for Elite students, and custom Discord channels for all packs.' },
  { q: 'Is there a refund policy?', a: 'Yes, we offer a no-questions-asked 7-day refund guarantee if you are not satisfied with the course material.' }
];

// Staggered container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const timelineRef = useRef(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // GSAP ScrollTrigger for timeline animated line
  useEffect(() => {
    if (timelineRef.current) {
      const line = timelineRef.current;
      gsap.fromTo(line, 
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: 1,
          }
        }
      );
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-x-hidden">
      {/* ====== 3D HERO SECTION ====== */}
      <section className="relative min-h-fit md:min-h-screen flex items-center justify-center pt-32 md:pt-24 pb-16 overflow-hidden">
        {/* Render Canvas + Video behind content */}
        <HeroThree />

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 cursor-default hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
          >
            <Shield className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Midnight Aurora Simulation Active
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight text-text-main max-w-4xl tracking-tight neon-text-glow"
          >
            Learn Cybersecurity <br />
            <span className="gradient-text font-black glitch-text">Like Never Before</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
          >
            Professional Ethical Hacking, Penetration Testing, Red Team Operations, AI Security, and Real-world Simulation Labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center"
          >
            <Link
              to="/enroll"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-text-main font-semibold btn-cinematic"
            >
              Start Learning
            </Link>
            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-text-main font-semibold hover:bg-white/10 hover:border-secondary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]"
            >
              Explore Courses
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section className="relative py-24 bg-bg-secondary digital-grid cinematic-scanlines gradient-border-top">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-main neon-text-glow">
              Simulated Cyber Warfare
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-4">
              Get hands-on skills in a digital battleground designed to challenge and sharpen your ethical hacking intelligence.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <TiltCard
                  className="p-6 rounded-2xl glass holo-shimmer neon-card flex flex-col gap-4 relative group overflow-hidden border border-white/5 h-full"
                  glowColor={feat.glow}
                  intensity={15}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 relative z-10 icon-float">
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-main relative z-10">
                    {feat.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                    {feat.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== LEARNING ROADMAP ====== */}
      <section id="roadmap" className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="aurora-blur right-0 top-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-main neon-text-glow">
              Your Professional Path
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-4">
              A structured road map mapping your evolution from command terminal setup to full AD infrastructure compromise.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Timeline Line — GSAP animated */}
            <div 
              ref={timelineRef}
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] timeline-line-animated opacity-50 md:-translate-x-1/2"
            />

            <div className="flex flex-col gap-12 md:gap-16">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} relative`}>
                  
                  {/* Timeline Hub — Pulsing Node */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-[#080d1a] border-2 border-secondary flex items-center justify-center -translate-x-[15px] md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                    <div className="w-3.5 h-3.5 rounded-full bg-accent" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                    >
                      <TiltCard 
                        className="p-6 rounded-2xl glass border border-white/5 relative holo-shimmer neon-card overflow-hidden"
                        intensity={10}
                      >
                        <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                          {milestone.pack}
                        </span>
                        <h3 className="font-display font-bold text-xl text-text-main mt-4">
                          {milestone.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mt-2.5">
                          {milestone.desc}
                        </p>
                      </TiltCard>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== POPULAR COURSES ====== */}
      <section className="py-24 bg-bg-secondary digital-grid cinematic-scanlines gradient-border-top">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-main neon-text-glow">
                Elite Cyber Programs
              </h2>
              <p className="text-text-secondary text-sm sm:text-base mt-3 max-w-xl">
                Choose a specialized cyber training curriculum, vetted and delivered directly by seasoned offensive specialists.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors group"
            >
              See All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.slice(0, 3).map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <TiltCard
                  className="rounded-2xl glass border border-white/5 overflow-hidden flex flex-col relative holo-shimmer neon-card h-full"
                  glowColor="rgba(124, 58, 237, 0.12)"
                  intensity={12}
                >
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-text-main z-10 shadow-lg shadow-primary/20" style={{ animation: 'neon-breathe 3s ease-in-out infinite' }}>
                      Popular
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-semibold text-accent">{course.level} • {course.duration}</span>
                    <h3 className="font-display font-bold text-xl text-text-main mt-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mt-2.5 flex-grow">
                      {course.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {course.skills.slice(0, 3).map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium text-text-secondary bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-text-secondary line-through">₹{course.originalPrice}</span>
                        <p className="text-xl font-bold text-text-main">₹{course.price}</p>
                      </div>
                      
                      <Link
                        to={`/courses?id=${course.id}`}
                        className="px-4 py-2 bg-white/5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent text-xs font-semibold text-text-main rounded-lg border border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== ACCORDION FAQ ====== */}
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="aurora-blur right-0 top-1/3" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-main neon-text-glow">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-4">
              Answers to the most common queries regarding our lab environments, payments, and verified certificates.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl glass border overflow-hidden transition-all duration-500 ${
                  activeFaq === idx 
                    ? 'border-secondary/30 shadow-[0_0_25px_rgba(0,212,255,0.1)]' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-text-main group-hover:text-secondary transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-secondary transition-all duration-500 ${
                      activeFaq === idx ? 'rotate-180 text-secondary drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white/[0.02] border-t border-white/5"
                    >
                      <p className="p-6 text-text-secondary text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden gradient-border-top">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-12 rounded-3xl glass border border-white/10 shadow-2xl flex flex-col items-center gap-6 relative neon-border-breathe"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
            
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-main neon-text-glow">
              Ready to Breach the Matrix?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl">
              Join Haxe Studio today. Secure cryptographically verifiable credentials, access dedicated virtual war zones, and learn from industry leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center">
              <Link
                to="/enroll"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-text-main font-semibold btn-cinematic"
              >
                Enroll Now
              </Link>
              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-text-main font-semibold hover:bg-white/10 hover:border-secondary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]"
              >
                Compare Packs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
