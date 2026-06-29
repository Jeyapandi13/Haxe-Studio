import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Terminal, Cpu } from 'lucide-react';
import haxeLogo from '../assets/haxe_logo.jpg';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Certification', path: '/certification' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-bg-primary/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center w-full">
        {/* Logo with breathing glow */}
        <Link to="/" className="flex items-center gap-2.5 group justify-self-start">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]" style={{ animation: 'neon-breathe 4s ease-in-out infinite' }}>
            <img src={haxeLogo} alt="Haxe Studio Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-text-main leading-tight group-hover:text-secondary transition-colors duration-300">
              HAXE STUDIO
            </span>
            <span className="text-[8px] text-text-secondary font-medium tracking-wider uppercase leading-none mt-0.5">
              Cybersecurity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation links centered */}
        <nav className="hidden md:flex justify-self-center">
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive ? 'text-text-main' : 'text-text-secondary hover:text-text-main'
                    }`
                  }
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10 opacity-80 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Right Action buttons / Mobile Toggle */}
        <div className="justify-self-end flex items-center gap-4">
          <Link
            to="/enroll"
            className="hidden md:inline-flex relative items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-text-main rounded-full group bg-gradient-to-br from-primary to-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:scale-105"
          >
            <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-bg-primary rounded-full group-hover:bg-opacity-0">
              Start Learning
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-main transition-colors border border-white/5 bg-white/5 backdrop-blur-sm hover:border-secondary/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer — Holographic slide-in */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-[73px] left-0 w-full bg-bg-primary/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden z-40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-secondary/30 text-text-main shadow-[0_0_15px_rgba(0,212,255,0.1)]'
                          : 'border-transparent text-text-secondary hover:bg-white/5 hover:text-text-main hover:border-white/10'
                      }`
                    }
                  >
                    <span className="font-medium text-base">{item.name}</span>
                    <Terminal className="w-4 h-4 opacity-50" />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link
                to="/enroll"
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-text-main font-semibold shadow-lg shadow-primary/20 btn-cinematic block"
              >
                Start Learning
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
