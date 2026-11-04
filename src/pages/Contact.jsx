import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-full w-full flex items-center justify-center px-4"
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Mari berkolaborasi! Hubungi saya melalui email atau sosial media.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;