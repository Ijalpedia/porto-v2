import { motion } from 'framer-motion';
import { useContext } from 'react'; // ⭐ Import useContext
import ThemeContext from '../context/ThemeContext'; // ⭐ Import ThemeContext
import portfolioData from '../data/portfolio.json';

// Import semua ikon
import {
  SiPhp, SiReact, SiNextdotjs, SiLaravel, SiCodeigniter,
  SiMysql, SiUbuntu, SiTailwindcss, SiNginx, SiJavascript,
  SiTypescript, SiGit, SiGithub, SiDocker, SiNodedotjs,
  SiPostman, SiVite, SiPostgresql, SiHtml5
} from 'react-icons/si';

const iconMap = {
  SiPhp: SiPhp, SiReact: SiReact, SiNextdotjs: SiNextdotjs,
  SiLaravel: SiLaravel, SiCodeigniter: SiCodeigniter, SiMysql: SiMysql,
  SiUbuntu: SiUbuntu, SiTailwindcss: SiTailwindcss, SiNginx: SiNginx,
  SiJavascript: SiJavascript, SiTypescript: SiTypescript, SiGit: SiGit,
  SiGithub: SiGithub, SiDocker: SiDocker, SiNodedotjs: SiNodedotjs,
  SiPostman: SiPostman, SiVite: SiVite, SiPostgresql: SiPostgresql,
  SiHtml5: SiHtml5
};

// ⭐ Mapping Warna Resmi Brand
const brandColors = {
  SiPhp: '#777BB4',
  SiReact: '#61DAFB',
  SiNextdotjs: '#000000', // Hitam (akan dihandle untuk dark mode)
  SiLaravel: '#FF2D20',
  SiCodeigniter: '#EF4223',
  SiMysql: '#4479A1',
  SiUbuntu: '#E95420',
  SiTailwindcss: '#06B6D4',
  SiNginx: '#009639',
  SiJavascript: '#F7DF1E',
  SiTypescript: '#3178C6',
  SiGit: '#F05032',
  SiGithub: '#181717', // Hitam (akan dihandle untuk dark mode)
  SiDocker: '#2496ED',
  SiNodedotjs: '#339933',
  SiPostman: '#FF6C37',
  SiVite: '#646CFF',
  SiPostgresql: '#4169E1',
  SiHtml5: '#E34F26'
};

const About = () => {
  const { profile } = portfolioData;
  const { techStack } = portfolioData.about;
  const { theme } = useContext(ThemeContext); // ⭐ Ambil tema saat ini

  // Fungsi untuk mendapatkan warna ikon
  const getIconColor = (tech) => {
    let color = brandColors[tech];
    // Jika dark mode dan ikon berwarna hitam (Github/Nextjs), ubah jadi putih
    if (theme === 'dark' && (tech === 'SiGithub' || tech === 'SiNextdotjs')) {
      return '#ffffff';
    }
    return color;
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 md:px-20 py-10">
      
      {/* 1. Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight mb-6"
      >
        {profile.headline}
      </motion.h2>

      {/* 2. Bio */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-2xl text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed"
      >
        {profile.bio}
      </motion.p>

      {/* 3. Tech Stack Row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-5xl"
      >
        <p className="text-center text-sm font-semibold text-primary-500 uppercase tracking-widest mb-8">
          Tech Stack
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {techStack.map((tech, index) => {
            const IconComponent = iconMap[tech];
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.2, y: -5 }} // ⭐ Hover: membesar & naik sedikit
                className="text-4xl md:text-5xl cursor-pointer transition-transform duration-300"
                title={tech.replace('Si', '')}
                style={{ 
                  color: getIconColor(tech), // ⭐ Pakai warna asli brand
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' // Sedikit bayangan biar pop
                }}
              >
                {IconComponent && <IconComponent />}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </div>
  );
};

export default About;