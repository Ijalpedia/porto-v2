import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;

  // Kita duplikasi array projects agar looping terlihat seamless (tanpa putus)
  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-10 overflow-hidden">
      
      {/* 1. Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Beberapa sistem informasi dan aplikasi web yang telah saya bangun menggunakan PHP, JavaScript, dan MySQL.
        </p>
      </motion.div>

      {/* 2. Marquee Container */}
      <div className="relative w-full group">
        
        {/* Fade Edges (Efek bayangan di kiri & kanan) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

        {/* Track Marquee */}
        <div className="flex w-[200%] animate-marquee">
          {marqueeProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="w-[350px] md:w-[400px] flex-shrink-0 px-4"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;