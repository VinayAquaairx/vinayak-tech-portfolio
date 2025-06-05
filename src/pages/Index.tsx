import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronLeft, ChevronRight, Moon, Sun, Code, Star, GitBranch, Calendar, ExternalLink, Trophy, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, symbol: string}>>([]);
  const [breakoutImage, setBreakoutImage] = useState<{url: string, x: number, y: number} | null>(null);

  const codeSnippets = [
    "const developer = 'Vinayak';",
    "def create_solutions():",
    "public class Innovation { }",
    "npm install success",
    "git commit -m 'life'"
  ];

  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  // 3D Scene Component - Pure CSS/Framer Motion implementation
  const HeroScene = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 animate-pulse"></div>
        
        {/* Floating geometric shapes using CSS */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-blue-500/30 rounded-lg backdrop-blur-sm"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-12 h-12 bg-purple-500/30 rounded-full backdrop-blur-sm"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 bg-green-500/30 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    );
  };

  // Enhanced Carousel Component with Auto-rotation and Click to Enlarge
  const ProjectCarousel = ({ images, projectTitle }: { images: string[], projectTitle: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (!isHovered && images.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }
    }, [images.length, isHovered]);

    const handleImageClick = (imageUrl: string, event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setBreakoutImage({
        url: imageUrl,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    };

    return (
      <div 
        className="relative mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, imgIndex) => (
              <CarouselItem key={imgIndex}>
                <div className="relative group">
                  <motion.img
                    src={image}
                    alt={`${projectTitle} Screenshot ${imgIndex + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    onClick={(e) => handleImageClick(image, e)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-full text-sm">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  // Typing animation effect
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

  // Particle system
  useEffect(() => {
    const symbols = ['<', '>', '{', '}', ';', '(', ')', '[', ']', '=', '+', '-'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      symbol: symbols[Math.floor(Math.random() * symbols.length)]
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x > window.innerWidth ? -20 : particle.x + 0.5,
        y: particle.y + Math.sin(particle.x * 0.01) * 0.5
      })));
    };

    const particleInterval = setInterval(animateParticles, 50);
    return () => clearInterval(particleInterval);
  }, []);

  // Mouse tracking for cursor trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fixed scroll spy functionality
  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - 80; // Account for fixed header
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
      setActiveSection(sectionId);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Redesigned Skills Data - Clean and Professional
  const skills = [
    {
      category: 'Programming',
      color: 'from-blue-500 to-blue-600',
      skills: ['Python', 'C++', 'JavaScript', 'SQL', 'Linux Commands']
    },
    {
      category: 'GCS & Communication',
      color: 'from-orange-500 to-orange-600',
      skills: ['MAVLink', 'Ardupilot', 'PX4', 'QGroundControl']
    },
    {
      category: 'Simulation & Testing',
      color: 'from-green-500 to-green-600',
      skills: ['Gazebo', 'Ardupilot SITL', 'Path Planning']
    },
    {
      category: 'Web Development',
      color: 'from-purple-500 to-purple-600',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML/CSS']
    },
    {
      category: 'Tools & Frameworks',
      color: 'from-teal-500 to-teal-600',
      skills: ['Qt Creator', 'Pymavlink', 'ROS2', 'Power BI', 'Unity', 'Git']
    }
  ];

  // Enhanced Projects Data with image carousels
  const projects = [
    {
      title: 'PlantSage - AI Plant Identification System',
      description: 'Advanced plant identification web application using AI/ML technology for accurate plant species recognition',
      features: [
        'AI-powered plant identification from images',
        'Comprehensive plant database with detailed information',
        'User authentication system (Demo User & Admin roles)',
        'Plant care recommendations and guidance',
        'Interactive plant library and search functionality',
        'Responsive design for mobile and desktop',
        'Real-time plant health analysis'
      ],
      tech: ['React.js', 'Node.js', 'AI/ML APIs', 'MongoDB', 'Express.js'],
      status: 'Currently under development',
      featured: true,
      gradient: 'from-green-500 to-emerald-600',
      metrics: { lines: '15,000+', time: '3 months', team: 'Solo' },
      images: [
        '/src/assets/images/projects/plantsage/image1.png',
        '/src/assets/images/projects/plantsage/image2.png',
        '/src/assets/images/projects/plantsage/image3.png'
      ],
      folder: 'plantsage'
    },
    {
      title: 'Web-Based Ground Control Station',
      subtitle: 'AquaAirX Professional Project',
      description: 'Full-fledged Ground Control Station to manage drone operations with real-time telemetry and mission planning',
      features: [
        'Pymavlink integration for seamless communication',
        'TCP/UDP protocols for robust data transmission',
        'Multi-user access with RBAC security',
        'Real-time telemetry dashboard',
        'Mission planning tools'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'Pymavlink', 'MAVLink'],
      gradient: 'from-blue-500 to-cyan-600',
      companyProject: true,
      metrics: { lines: '25,000+', time: '6 months', team: '3 developers' },
      folder: 'web-gcs'
    },
    {
      title: 'Windows-Based Ground Control Station',
      subtitle: 'AquaAirX Professional Project',
      description: 'Desktop Ground Control Station application with real-time telemetry visualization and drone control',
      features: [
        'MAVLink integration for drone communication',
        'Camera streaming capabilities',
        'Sonar 3D visualization for underwater drones',
        'Real-time telemetry visualization',
        'Command and control functionalities'
      ],
      tech: ['C++', 'QML', 'Qt', 'MAVLink'],
      gradient: 'from-purple-500 to-violet-600',
      companyProject: true,
      metrics: { lines: '30,000+', time: '8 months', team: '4 developers' },
      folder: 'windows-gcs'
    },
    {
      title: 'Virtual Keyboard using OpenCV',
      description: 'AI-powered virtual keyboard system using computer vision and hand gesture recognition for touchless typing interface',
      features: [
        'Hand tracking and gesture recognition using OpenCV and MediaPipe',
        'Real-time finger movement detection and key selection',
        'Distance-based click detection between fingertips',
        'Virtual keyboard layout with visual feedback',
        'System keyboard input simulation using PyAutoGUI',
        'Calibration system for different lighting conditions'
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'CVZone', 'PyAutoGUI'],
      gradient: 'from-indigo-500 to-purple-600',
      images: [
        '/src/assets/images/projects/plantsage/image1.png',
        '/src/assets/images/projects/plantsage/image2.png'
      ],
      folder: 'virtual-keyboard'
    },
    {
      title: 'Flappy Bird - Unity Game',
      description: 'Classic 2D side-scrolling game recreation using Unity game engine with modern game development practices',
      features: [
        '2D physics-based bird movement with gravity simulation',
        'Infinite procedural pipe generation and obstacle management',
        'Object pooling system for optimized performance',
        'Animated bird sprites with smooth wing flapping animation',
        'Score tracking and game state management',
        'Collision detection and game over mechanics',
        'Mobile-responsive touch controls'
      ],
      tech: ['Unity', 'C#', '2D Physics', 'Animation System'],
      gradient: 'from-yellow-500 to-orange-600',
      images: [
        '/src/assets/images/projects/plantsage/image1.png',
        '/src/assets/images/projects/plantsage/image3.png'
      ],
      folder: 'flappy-bird'
    },
    {
      title: 'Havi-Ai Desktop Voice Assistant',
      description: 'AI assistant with speech recognition and natural language processing capabilities',
      features: [
        'Speech recognition functionality',
        'Natural language processing',
        'Voice-enabled interactions',
        'Task automation capabilities',
        'Web search integration',
        'Image generation features'
      ],
      tech: ['Python', 'NLP', 'Speech Recognition'],
      gradient: 'from-pink-500 to-rose-600',
      images: [
        '/src/assets/images/projects/plantsage/image2.png',
        '/src/assets/images/projects/plantsage/image1.png'
      ],
      folder: 'havi-ai'
    }
  ];

  // Timeline data - Updated with 3 items and education
  const timeline = [
    {
      year: '2020',
      title: 'Started CSE Journey',
      description: 'Began Bachelor of Technology (CSE Honors) at Lovely Professional University',
      type: 'education',
      icon: '🎓'
    },
    {
      year: '2023',
      title: 'AEROGO Internship',
      description: 'Business Development Analyst - Specialized in data visualization and market research for UAV technologies',
      type: 'work',
      icon: '💼'
    },
    {
      year: '2024',
      title: 'AquaAirX Software Engineer',
      description: 'Software Development Engineer - Leading Ground Control Station development for UAV and underwater vehicles',
      type: 'work',
      icon: '🚀'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Particle Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className={`absolute text-sm opacity-20 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
            style={{ left: particle.x, top: particle.y }}
            animate={{ x: particle.x, y: particle.y }}
            transition={{ duration: 0.1 }}
          >
            {particle.symbol}
          </motion.div>
        ))}
      </div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        animate={{ x: cursorPosition.x - 8, y: cursorPosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full"></div>
      </motion.div>

      {/* Image Breakout Overlay */}
      <AnimatePresence>
        {breakoutImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setBreakoutImage(null)}
          >
            <motion.img
              src={breakoutImage.url}
              alt="Project Screenshot"
              className="max-w-[85vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Navigation - Fixed */}
      <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md border-b z-50 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              K.S.S.Vinayak
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Timeline', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                      : `${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
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
                GCS Developer &<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UAV Systems Engineer
                </span>
              </h1>
              
              {/* Animated Code Typing */}
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

              {/* Contact Info with Icons */}
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

        {/* Floating Shapes */}
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

      {/* About Section - Enhanced */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-3xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                GCS Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">11 months of hands-on experience</span> in building both web-based and software-based Ground Control Station for UAVs and underwater vehicles. Proficient in MAVLink, ROS2, and Ardupilot simulations, with a strong background in real-time telemetry, mission planning, and autonomous navigation.
              </p>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about improving drone autonomy through advanced control systems and simulation testing.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '11+', label: 'Months Experience', color: 'blue' },
                { value: '6+', label: 'UAV Projects', color: 'purple' },
                { value: '3', label: 'Team Leadership', color: 'orange' },
                { value: '40%', label: 'Performance Boost', color: 'green' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Card className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border-${stat.color}-200 dark:from-${stat.color}-900 dark:to-${stat.color}-800 dark:border-${stat.color}-700`}>
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section - Fixed */}
      <section id="timeline" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-2xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="inline-block w-6 h-6 mr-4" />
            My Journey
          </motion.h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Modern Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  {/* Timeline Dot with Icon - Fixed hover animation */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-xl flex items-center justify-center text-2xl z-10 cursor-pointer"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      duration: 0.3
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      className={`p-6 rounded-2xl shadow-2xl ${
                        darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                      } border-2 backdrop-blur-sm`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                        <Badge 
                          variant={item.type === 'education' ? 'secondary' : 'default'}
                          className={`text-xs font-medium ${
                            item.type === 'education' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          }`}
                        >
                          {item.type}
                        </Badge>
                      </div>
                      <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-3xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Target className="inline-block w-8 h-8 mr-4" />
            Skills & Expertise
          </motion.h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-0`}>
                  <CardContent className="p-0">
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                      <h3 className="text-lg font-bold text-center">{category.category}</h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge 
                              variant="secondary"
                              className={`px-3 py-1 text-sm font-medium rounded-full ${
                                darkMode 
                                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                              } transition-colors duration-200`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
          <div className="space-y-12">
            {/* AEROGO FIRST */}
            <Card className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>AEROGO - Business Development Analyst</h3>
                    <p className="text-orange-600 font-medium">12/2023 – 06/2024 | Bangalore, India</p>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Internship
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Data Analysis & Visualization</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>During my internship at Aerogo, I demonstrated proficiency in utilizing Power BI for data visualization and analysis, effectively transforming complex datasets into insightful visual representations.</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Market Research</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conducted comprehensive research and analysis on:</p>
                    <ul className={`text-sm mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <li>Amphibious drones market analysis and use cases</li>
                      <li>Onshore windfarms operational requirements and market opportunities</li>
                      <li>Offshore windfarms technology trends and applications</li>
                      <li>Pipeline inspection companies and their technological needs</li>
                      <li>Oil and Gas companies data analysis and visualization</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Data Visualization</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Created comprehensive Power BI dashboards and reports for strategic decision-making and market analysis.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'Data Analysis', 'Market Research'].map((tech) => (
                    <span key={tech} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AquaAirX SECOND */}
            <Card className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>AquaAirX - Software Development Engineer</h3>
                    <p className="text-blue-600 font-medium">06/2024 – Present | Bangalore, India</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current Role
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Web-Based Ground Control Station Development</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Designed and developed a fully functional web-based Ground Control Station using React.js, Node.js, and Express.js, ensuring seamless communication between drones and the ground station via MAVLink, TCP, UDP and serial connections.</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Real-time Features</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Implemented real-time telemetry dashboards, mission planning tools, and drone control interfaces, supporting multi-user collaboration with role-based access control (RBAC).</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pymavlink Integration</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Integrated Pymavlink for telemetry display, drone control (arm, disarm, takeoff, land, RTL), and mission planning with radio, compass, and accelerometer calibration features.</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Desktop Ground Control Station</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Built a Windows-based Ground Control Station application using C++, QML, and Qt, providing standalone solution with real-time telemetry visualization, command and control functionalities, and mission execution.</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Advanced Features</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Developed camera live feed integration for real-time video streaming and sonar 3D point cloud visualization for underwater drone operations.</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Team Leadership</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Led a team of 3 developers to optimize backend communication for Web Ground Control Station, ensuring 40% faster telemetry updates and reducing command execution delays.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React.js', 'Node.js', 'Express.js', 'MAVLink', 'Pymavlink', 'C++', 'Qt', 'QML', 'ROS2'].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section with Image Carousels and Breakout Effect */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-3xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Code className="inline-block w-8 h-8 mr-4" />
            Featured Projects
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <Card className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                  <CardContent className="p-6">
                    {/* Project Header */}
                    <div className={`bg-gradient-to-r ${project.gradient} text-white p-6 rounded-lg mb-6`}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          {project.subtitle && (
                            <p className="text-white/90 text-base font-medium mb-2">{project.subtitle}</p>
                          )}
                        </div>
                        {project.featured && (
                          <Badge className="bg-white/20 text-white border-white/30">
                            ⭐ Featured
                          </Badge>
                        )}
                      </div>
                      
                      {/* Project Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-base font-bold">{project.metrics.lines}</div>
                            <div className="text-xs opacity-80">Lines of Code</div>
                          </div>
                          <div>
                            <div className="text-base font-bold">{project.metrics.time}</div>
                            <div className="text-xs opacity-80">Development Time</div>
                          </div>
                          <div>
                            <div className="text-base font-bold">{project.metrics.team}</div>
                            <div className="text-xs opacity-80">Team Size</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image Carousel with Auto-rotation and Click to Enlarge */}
                    {project.images && (
                      <ProjectCarousel images={project.images} projectTitle={project.title} />
                    )}
                    
                    <p className={`text-base mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    {project.status && (
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm">
                        Status: {project.status}
                      </p>
                    )}
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.05 }}>
                            <Badge 
                              variant="secondary"
                              className={`text-xs ${
                                darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center text-gray-900 mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
          <div className="max-w-2xl mx-auto">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                    LPU
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bachelor of Technology (CSE Honors)</h3>
                  <p className={`text-base mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Lovely Professional University</p>
                  <p className="text-blue-600 font-medium mb-2">2020 – 2024 | Phagwara, India</p>
                  <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>GPA: 7.79</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Let's build something amazing together</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>vinayakkommisetti@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>9133075535</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Bangalore, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Follow Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="p-3" onClick={() => window.open('https://github.com/vinay9133', '_blank')}>
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-3" onClick={() => window.open('https://www.linkedin.com/in/vinay-kommisetti/', '_blank')}>
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <Card className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'} shadow-lg`}>
              <CardContent className="p-8">
                <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${darkMode ? 'bg-gray-800 border-gray-600' : 'border-gray-300'}`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input 
                      type="email" 
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${darkMode ? 'bg-gray-800 border-gray-600' : 'border-gray-300'}`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                    <textarea 
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${darkMode ? 'bg-gray-800 border-gray-600' : 'border-gray-300'}`}
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 K.S.S.Vinayak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
