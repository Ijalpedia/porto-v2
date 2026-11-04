import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="h-full w-full relative overflow-hidden bg-gray-900">
      {/* 🎬 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60" // ⭐ Opacity video dikurangi biar tidak terlalu terang
      >
        <source src="/videos/cinematic.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay Gelap */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 📝 Konten Text */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <div className="text-center">
          {/* ⭐ HAPUS ANIMASI Y (NAIK/TURUN), PAKAI OPACITY SAJA */}
          <motion.h1 
            initial={{ opacity: 0.8 }} // Mulai dari sedikit transparan
            animate={{ opacity: 1 }}   // Jadi solid pelan-pelan
            transition={{ duration: 1.5, delay: 0.2 }} // Delay biar nyusul loader
            className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4"
            style={{ 
              textShadow: '0 0 60px rgba(59, 130, 246, 0.6)',
            }}
          >
            IjalPedia
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 font-light tracking-wide"
          >
            Welcome to my portofolio
          </motion.p>
        </div>
      </div>

      {/* 📍 Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;