import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; // ⭐ Import Footer
import Loader from './components/ui/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence>
          {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
        </AnimatePresence>

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="h-screen w-screen overflow-hidden"
          >
            <Navbar />
            
            {/* Container Scroll Snapping */}
            <main className="snap-container">
              <section id="home" className="snap-section">
                <Home />
              </section>
              
              <section id="about" className="snap-section">
                <About />
              </section>
              
              <section id="projects" className="snap-section">
                <Projects />
              </section>
              
              <section id="contact" className="snap-section">
                <Contact />
              </section>

              {/* ⭐ Footer sebagai Section Terakhir */}
              <section id="footer" className="snap-section">
                <Footer />
              </section>
            </main>
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;