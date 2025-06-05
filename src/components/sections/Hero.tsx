
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HeroScene } from './HeroScene';

interface HeroProps {
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, scrollToSection }) => {
  const [typingText, setTypingText] = useState('');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const codeSnippets = [
    "const developer = 'Vinayak';",
    "def create_solutions():",
    "public class Innovation { }",
    "npm install success",
    "git commit -m 'life'"
  ];

  useEffect(() => {
    const currentCode = codeSnippets[currentCodeIndex];
    let currentIndex = 0;
    setTypingText('');

    const typingInterval = setInterval(() => {
      if (currentIndex < currentCode.length) {
        setTypingText(currentCode.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentCodeIndex]);

  return (
    <section id="home" className={`pt-16 min-h-screen flex items-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-blue-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="absolute inset-0 z-10">
        <HeroScene />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-base text-blue-600 dark:text-blue-400 font-medium mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hi, I'm Vinayak 👋
            </motion.div>
            <h1 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Software Developer &<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovator
              </span>
            </h1>
            
            <div className={`text-lg mb-8 font-mono p-4 rounded-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700 text-green-400' : 'bg-gray-100 border-gray-200 text-green-600'
            }`}>
              <span className="text-gray-500"># </span>
              <span>{typingText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </div>

            <p className={`text-lg mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Specializing in Autonomous Navigation & Real-time Telemetry Systems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full text-base"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className={`border-2 px-8 py-3 rounded-full text-base transition-colors duration-300 ${
                    darkMode 
                      ? 'border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white' 
                      : 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </div>

            <div className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                <Mail className="w-4 h-4" />
                vinayakkommisetti@gmail.com
              </motion.p>
              <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                <Phone className="w-4 h-4" />
                9133075535
              </motion.p>
              <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                <MapPin className="w-4 h-4" />
                Bangalore, India
              </motion.p>
            </div>

            <div className="flex gap-4 mt-6">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => window.open('https://github.com/vinay9133', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900"
                  onClick={() => window.open('https://www.linkedin.com/in/vinay-kommisetti/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div 
              className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-3xl flex items-center justify-center text-6xl"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              👨‍💻
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};
