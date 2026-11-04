import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState(1);
  const [typedText, setTypedText] = useState('');

  // ⚙️ KONFIGURASI
  const displayName = 'IjalPedia';
  const typingTexts = ['Welcome to my portofolio']; // ⭐ Cuma 1 teks sekarang
  const transitionDelay = 2000; // Partikel berkumpul 2 detik

  // Generate partikel
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 400 - 200,
    y: Math.random() * 400 - 200,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 0.8,
  }));

  // Phase 1 → 2 transition
  useEffect(() => {
    const timer = setTimeout(() => setPhase(2), transitionDelay);
    return () => clearTimeout(timer);
  }, []);

  // Typing Animation
  useEffect(() => {
    if (phase === 2) {
      let charIndex = 0;
      let currentText = '';
      const fullText = typingTexts[0]; // Ambil teks pertama

      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          currentText += fullText.charAt(charIndex);
          setTypedText(currentText);
          charIndex++;
        } else {
          // Teks selesai diketik
          clearInterval(typeInterval);
          // Tunggu sebentar sebelum pindah ke Home
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 1000);
        }
      }, 80); // Kecepatan ketik

      return () => clearInterval(typeInterval);
    }
  }, [phase]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, // ⭐ Zoom in sedikit saat hilang
        filter: 'blur(10px)' // ⭐ Efek blur saat hilang
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // ⭐ Easing yang sangat smooth
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 overflow-hidden" // ⭐ Ganti bg jadi gray-900 (gelap) biar nyambung sama video
    >
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Partikel & Nama */}
        <div className="relative w-[400px] h-[200px] flex items-center justify-center">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                x: particle.x * 2.5,
                y: particle.y * 2.5,
                opacity: 0,
                scale: 0,
              }}
              animate={
                phase === 1 
                  ? { x: particle.x * 0.2, y: particle.y * 0.2, opacity: 1, scale: 1 }
                  : { x: particle.x * 1.8, y: particle.y * 1.8, opacity: 0, scale: 0 }
              }
              transition={{
                duration: phase === 1 ? 1.5 : 1.2,
                delay: particle.delay,
                ease: 'easeOut',
              }}
              className="absolute rounded-full bg-primary-500"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)',
              }}
            />
          ))}

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-6xl md:text-7xl font-extrabold text-primary-500 tracking-tight"
            style={{ 
              textShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
            }}
          >
            {displayName}
          </motion.h1>
        </div>

        {/* Typing Text */}
        <div className="h-10 flex items-center justify-center mt-4">
          <AnimatePresence mode="wait">
            {phase === 2 && (
              <motion.div
                key="typing-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center"
              >
                <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-mono tracking-wide">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="ml-1 w-[2px] h-6 bg-primary-500"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading Dots (Hanya di Phase 1) */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-400"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Loader;