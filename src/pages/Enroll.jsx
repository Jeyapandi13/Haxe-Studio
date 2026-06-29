import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Terminal, CreditCard, QrCode, Check, ChevronRight, BookOpen } from 'lucide-react';
import { courses } from '../data/coursesData';
import TiltCard from '../components/TiltCard';
import paymentQr from '../assets/payment_qr.jpg';

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const discountPercent = 0;
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [step, setStep] = useState('details'); // 'details' -> 'processing' -> 'success'

  // Pre-select course from URL params if present
  useEffect(() => {
    const courseId = searchParams.get('id');
    if (courseId) {
      const course = courses.find((c) => c.id === courseId);
      if (course) {
        setSelectedCourse(course);
      }
    }
  }, [searchParams]);

  // Pricing calculations
  const basePrice = selectedCourse.price;
  const discountAmount = Math.round((basePrice * discountPercent) / 100);
  const finalPrice = basePrice - discountAmount;



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit enrollment details
  const handleProceedToPay = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all billing credentials.');
      return;
    }
    
    // Switch to processing stage
    setStep('processing');
  };

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Background blurs */}
      <div className="aurora-blur left-1/4 top-1/4" />
      <div className="aurora-blur right-1/4 bottom-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Display State */}
        <AnimatePresence mode="wait">
          
          {/* STEP 1: BILLING DETAILS */}
          {step === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Form Side */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl glass border border-white/10 shadow-2xl neon-border-breathe"
                >
                  <h2 className="font-display font-bold text-xl text-text-main mb-6 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-secondary" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }} />
                    Enlist Officer Credentials
                  </h2>

                  <form onSubmit={handleProceedToPay} className="flex flex-col gap-5">
                    
                    {/* Course Selection */}
                    <div>
                      <label htmlFor="course" className="text-xs font-semibold text-text-secondary block mb-2">Select Warfare Curriculum</label>
                      <select
                        id="course"
                        value={selectedCourse.id}
                        onChange={(e) => {
                          const course = courses.find((c) => c.id === e.target.value);
                          if (course) setSelectedCourse(course);
                        }}
                        className="w-full px-4 py-2.5 bg-[#080d19] border border-white/10 rounded-xl text-text-main text-sm focus:outline-none input-glow"
                      >
                        {courses.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title} (₹{c.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold text-text-secondary block mb-2">Operator Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-main text-sm focus:outline-none input-glow"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-xs font-semibold text-text-secondary block mb-2">Secure Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-main text-sm focus:outline-none input-glow"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="text-xs font-semibold text-text-secondary block mb-2">Contact Mobile (WhatsApp Support)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-text-main text-sm focus:outline-none input-glow"
                      />
                    </div>

                    {/* Payment Mode Selector — Holographic Tilt */}
                    <div>
                      <label className="text-xs font-semibold text-text-secondary block mb-3">Gateway Interface</label>
                      <div className="grid grid-cols-2 gap-4">
                        <TiltCard
                          className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer ${
                            paymentMethod === 'UPI'
                              ? 'bg-secondary/10 border-secondary text-text-main shadow-[0_0_20px_rgba(0,212,255,0.15)]'
                              : 'bg-white/5 border-white/5 text-text-secondary hover:bg-white/10'
                          }`}
                          intensity={8}
                          onClick={() => setPaymentMethod('UPI')}
                        >
                          <QrCode className="w-6 h-6" />
                          <span className="text-xs font-bold">UPI QR Code</span>
                        </TiltCard>
                        <TiltCard
                          className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer ${
                            paymentMethod === 'Card'
                              ? 'bg-primary/10 border-primary text-text-main shadow-[0_0_20px_rgba(124,58,237,0.15)]'
                              : 'bg-white/5 border-white/5 text-text-secondary hover:bg-white/10'
                          }`}
                          intensity={8}
                          onClick={() => setPaymentMethod('Card')}
                        >
                          <CreditCard className="w-6 h-6" />
                          <span className="text-xs font-bold">Credit/Debit Card</span>
                        </TiltCard>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-text-main rounded-xl btn-cinematic mt-4"
                    >
                      Authorize Payment
                    </button>

                  </form>
                </motion.div>

              </div>

              {/* Summary Side */}
              <div className="lg:col-span-5 flex flex-col gap-6">

                {/* Price Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TiltCard className="p-6 rounded-2xl glass border border-white/5 holo-shimmer neon-card overflow-hidden" intensity={8}>
                    <h3 className="font-display font-semibold text-sm text-text-main mb-4">Pricing Breakdown</h3>
                    
                    <div className="flex flex-col gap-3 text-xs border-b border-white/5 pb-4 mb-4">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Base Tuition</span>
                        <span className="text-text-main">₹{basePrice}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-accent">
                          <span>Coupon Discount ({discountPercent}%)</span>
                          <span>- ₹{discountAmount}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs font-bold text-text-main">Total Amount Due</span>
                      <span className="text-2xl font-black text-secondary neon-text-glow">₹{finalPrice}</span>
                    </div>
                  </TiltCard>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* STEP 2: PROCESSING TRANSACTION */}
          {step === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto p-6 sm:p-10 rounded-3xl glass border border-white/10 shadow-2xl text-center flex flex-col items-center gap-6 neon-border-breathe"
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-main leading-tight neon-text-glow">
                Scan UPI QR to <br />
                <span className="text-secondary font-black">Authorize Enrollment</span>
              </h2>
              
              <p className="text-text-secondary text-xs sm:text-sm max-w-md leading-relaxed">
                Please scan the official merchant QR code below using PhonePe, Google Pay, Paytm, or any UPI app to complete your secure payment transaction.
              </p>

              <div className="p-2 bg-white rounded-2xl overflow-hidden w-60 h-60 flex items-center justify-center shadow-lg shadow-black/25">
                <img src={paymentQr} alt="Payment UPI QR" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col gap-2.5 mt-2 w-full max-w-sm bg-white/[0.02] border border-white/5 p-4 rounded-xl text-left">
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Curriculum:</span>
                  <span className="text-text-main font-semibold">{selectedCourse.title}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Beneficiary:</span>
                  <span className="text-text-main font-semibold">Mohammad Ubaidur Rehaman</span>
                </div>
                <div className="flex justify-between text-xs border-t border-white/5 pt-2 mt-1">
                  <span className="text-text-secondary font-bold">Total Amount Due:</span>
                  <span className="text-secondary font-black text-base neon-text-glow">₹{finalPrice}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-accent font-medium mt-1" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }}>
                <Terminal className="w-3.5 h-3.5" />
                <span>Once paid, credentials will be initialized by our security administrators.</span>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION SCREEN */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto p-6 sm:p-10 rounded-3xl glass border-2 border-accent/20 shadow-2xl text-center flex flex-col items-center gap-6 neon-border-breathe"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent" style={{ animation: 'cyber-pulse 2s ease-in-out infinite' }}>
                <Check className="w-8 h-8" />
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-main leading-tight neon-text-glow">
                War Range Enlisted <br />
                <span className="text-accent font-black">Authentication Approved!</span>
              </h2>

              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Welcome to Haxe Studio, operator <span className="text-text-main font-semibold">{formData.name}</span>. Your billing receipt and laboratory credentials have been generated and dispatched to: <span className="text-text-main font-semibold">{formData.email}</span>.
              </p>

              {/* Enrollment Timeline */}
              <div className="w-full text-left bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex flex-col gap-4 mt-4">
                <h4 className="text-xs font-bold text-text-main uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-accent" />
                  Account Provision State
                </h4>
                
                {[
                  { label: 'Gateway Clearance Settled', status: 'done' },
                  { label: 'Sandbox Target Range Key Assigned', status: 'done' },
                  { label: 'Welcome Guide Dispatch Assigned', status: 'pending' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      item.status === 'done' ? 'bg-accent/20 text-accent border border-accent/40' : 'bg-white/5 border border-white/10 text-text-secondary'
                    }`}>
                      {item.status === 'done' ? <Check className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    </div>
                    <span className={`text-xs font-medium ${item.status === 'done' ? 'text-text-main' : 'text-text-secondary'}`}>{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="/"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-text-main rounded-xl btn-cinematic mt-4 block text-center"
              >
                Launch Platform Dashboard
              </a>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </div>
  );
}
