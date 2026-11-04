import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const { contact, socials } = portfolioData;

  // Mapping ikon sosial media
  const iconMap = {
    github: <FiGithub size={24} />,
    linkedin: <FiLinkedin size={24} />,
    instagram: <FiInstagram size={24} />,
    mail: <FiMail size={24} />
  };

  const contactCards = [
    {
      icon: <FiMail size={28} />,
      title: "Email",
      value: contact.email,
      link: `mailto:${contact.email}`,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: <FiPhone size={28} />,
      title: "WhatsApp / Phone",
      value: contact.phone,
      link: `https://wa.me/${contact.phone.replace(/\D/g, '')}`, // Format nomor WA
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <FiMapPin size={28} />,
      title: "Lokasi",
      value: contact.location,
      link: "https://maps.google.com",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    }
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 md:px-20 py-10">
      
      {/* 1. Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Punya ide project atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya melalui channel di bawah ini.
        </p>
      </motion.div>

      {/* 2. Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        {contactCards.map((card, index) => (
          <motion.a
            key={card.title}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 group"
          >
            <div className={`p-4 rounded-full ${card.bgColor} ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors">
              {card.value}
            </p>
          </motion.a>
        ))}
      </div>

      {/* 3. Social Media Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Atau temukan saya di</p>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-md"
              aria-label={social.name}
            >
              {iconMap[social.icon.toLowerCase()] || <FiMail size={24} />}
            </motion.a>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;