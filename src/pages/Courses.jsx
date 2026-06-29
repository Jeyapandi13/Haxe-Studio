import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Terminal, BookOpen, Clock, Layers } from 'lucide-react';
import { courses } from '../data/coursesData';
import CourseModal from '../components/CourseModal';
import TiltCard from '../components/TiltCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // If a course ID is provided in query params, automatically open its modal
  useEffect(() => {
    const courseId = searchParams.get('id');
    if (courseId) {
      const course = courses.find((c) => c.id === courseId);
      if (course) {
        setSelectedCourse(course);
      }
    }
  }, [searchParams]);

  // Handle closing modal and cleaning search params
  const handleCloseModal = () => {
    setSelectedCourse(null);
    setSearchParams({});
  };

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setSearchParams({ id: course.id });
  };

  // Filtering logic
  const filteredCourses = courses.filter((course) => {
    if (activeFilter === 'All') return true;
    return course.level.toLowerCase() === activeFilter.toLowerCase();
  });

  const filterOptions = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Decorative Aurora Blur */}
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
            War Range Curriculums
          </motion.span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-text-main mt-6 neon-text-glow">
            Cyber Training <span className="gradient-text font-black glitch-text">Packs</span>
          </h1>
          <p className="text-text-secondary text-sm sm:text-base mt-6">
            Deploy interactive target networks, solve capture the flag checkpoints, and secure 1-on-1 mentorship.
          </p>
        </div>

        {/* Filter Buttons — Neon Active Glow */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-400 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary border-transparent text-text-main shadow-[0_0_25px_rgba(124,58,237,0.3)]'
                  : 'bg-white/5 border-white/5 text-text-secondary hover:bg-white/10 hover:text-text-main hover:border-secondary/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              >
                <TiltCard
                  className="rounded-3xl glass border border-white/5 overflow-hidden flex flex-col relative group holo-shimmer neon-card h-full"
                  glowColor="rgba(124, 58, 237, 0.12)"
                  intensity={12}
                >
                  {/* Popular Badge */}
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-text-main z-10 shadow-lg shadow-primary/20 flex items-center gap-1" style={{ animation: 'neon-breathe 3s ease-in-out infinite' }}>
                      <Sparkles className="w-3 h-3 text-text-main" />
                      Popular
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{course.level}</span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-text-main mt-4 group-hover:text-secondary transition-colors leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mt-3 flex-grow">
                      {course.subtitle}
                    </p>

                    {/* Skills Tagline */}
                    <div className="flex flex-wrap gap-1.5 mt-6">
                      {course.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-semibold text-text-secondary bg-white/5 px-2.5 py-1 rounded border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Pricing / CTA Row */}
                    <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-text-secondary line-through">₹{course.originalPrice}</span>
                        <p className="text-2xl font-black text-text-main">₹{course.price}</p>
                      </div>

                      <button
                        onClick={() => handleOpenModal(course)}
                        className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] text-xs font-semibold text-text-main rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        View Syllabus
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
