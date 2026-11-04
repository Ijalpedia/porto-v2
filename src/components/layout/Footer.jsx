import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub size={24} />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <FiLinkedin size={24} />, url: 'https://linkedin.com' },
    { name: 'Email', icon: <FiMail size={24} />, url: 'mailto:email@example.com' },
  ];

  // Fungsi untuk scroll balik ke atas
  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    homeSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-4 relative">
      
      {/* Tombol Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute top-10 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg"
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </button>

      {/* Konten Utama Footer */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Tertarik untuk berkolaborasi atau sekadar menyapa? 
          Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center gap-1">
            © {currentYear} Ijalpedia. Made with <FiHeart className="text-red-500 fill-red-500" /> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;