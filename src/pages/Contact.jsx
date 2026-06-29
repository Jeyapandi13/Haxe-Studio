import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Clock, Terminal, ChevronRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-5 h-5 text-pink-500"}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const contactInfo = [
  {
    icon: <MessageCircle className="w-5 h-5 text-secondary" />,
    title: 'WhatsApp Dispatch',
    value: '+91 00000 00000',
    link: 'https://wa.me/910000000000',
    label: 'Chat Now'
  },
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    title: 'Secure Email Address',
    value: 'support@haxestudio.in',
    link: 'mailto:support@haxestudio.in',
    label: 'Compose Mail'
  },
  {
    icon: <Send className="w-5 h-5 text-accent" />,
    title: 'Telegram Operations',
    value: '@haxestudio_support',
    link: 'https://t.me/haxestudio',
    label: 'Open Channel'
  },
  {
    icon: <Instagram className="w-5 h-5 text-pink-500" />,
    title: 'Instagram Feed',
    value: '@haxestudio.in',
    link: 'https://instagram.com',
    label: 'Follow Us'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form submitted:', data);
    alert(`Message recorded successfully!\nAgent ${data.name}, our security desk will reach you at: ${data.email}.`);
    reset();
  };

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Aurora Blurs */}
      <div className="aurora-blur right-1/4 top-1/4" />
      <div className="aurora-blur left-1/4 bottom-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-wider text-secondary bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
          >
            Establish Connection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl text-text-main mt-6 neon-text-glow"
          >
            Contact <span className="gradient-text font-black glitch-text">Desk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-sm sm:text-base mt-6"
          >
            Have questions about the simulated laboratory platforms, team bundles, or enrollment keys? Reach out directly.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Channels & Operations (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactInfo.map((info, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full"
                  >
                    <TiltCard className="p-5 rounded-2xl glass border border-white/5 flex flex-col gap-3 group relative overflow-hidden holo-shimmer neon-card h-full" intensity={10} glowColor="rgba(0, 212, 255, 0.1)">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-transform group-hover:scale-110">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-xs text-text-secondary font-medium">{info.title}</h4>
                        <p className="text-sm font-semibold text-text-main mt-1 break-words">{info.value}</p>
                      </div>
                      <span className="text-[10px] text-secondary font-bold inline-flex items-center gap-1 mt-2">
                        {info.label} <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </TiltCard>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Support Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard className="p-6 rounded-2xl glass border border-white/5 holo-shimmer neon-card overflow-hidden" intensity={8}>
                <h3 className="font-display font-semibold text-base text-text-main mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
                  Operations Schedule
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs text-text-secondary">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-text-main font-semibold">10:00 AM - 08:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-text-main font-semibold">11:00 AM - 05:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday Emergency</span>
                    <span className="text-accent font-bold">Priority WhatsApp Desk Active</span>
                  </li>
                </ul>
              </TiltCard>
            </motion.div>

            {/* Interactive Vector Map Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl glass border border-white/5 overflow-hidden relative neon-border-breathe"
            >
              <h3 className="font-display font-semibold text-base text-text-main mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                Operations Base
              </h3>
              <div className="h-44 rounded-xl bg-[#080d19] border border-white/5 flex items-center justify-center relative overflow-hidden">
                {/* Cyber Grid Mock */}
                <div className="absolute inset-0 digital-grid opacity-20" />
                
                {/* Ping Target */}
                <div className="relative flex items-center justify-center z-10">
                  <div className="absolute w-8 h-8 rounded-full bg-secondary/20 border border-secondary" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
                  <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,212,255,1)]" />
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-bg-primary/90 border border-white/5 text-center">
                  <span className="text-[10px] text-text-secondary">Digital Node Range: India Node (HQ)</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Secure Contact Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass border border-white/10 shadow-2xl relative neon-border-breathe">
              
              <h3 className="font-display font-bold text-xl text-text-main mb-2 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-secondary" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
                Transmit Encrypted Packet
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-6">
                All communications sent through this form are logged in secure system console outputs.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-text-secondary block mb-2">Subject Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name input is required' })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-main text-sm focus:outline-none input-glow"
                  />
                  {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-text-secondary block mb-2">Reply Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email input is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address syntax' }
                    })}
                    placeholder="Enter email address"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-main text-sm focus:outline-none input-glow"
                  />
                  {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email.message}</span>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-text-secondary block mb-2">Payload Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Message payload cannot be empty' })}
                    placeholder="Enter your message query..."
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-main text-sm focus:outline-none resize-none input-glow"
                  />
                  {errors.message && <span className="text-[10px] text-red-400 mt-1 block">{errors.message.message}</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-text-main rounded-xl btn-cinematic mt-2"
                >
                  Transmit Packet
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
