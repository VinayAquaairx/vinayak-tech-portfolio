import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Scroll spy functionality
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    {
      category: 'Programming',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'SQL', level: 80 },
        { name: 'Linux Commands', level: 85 }
      ]
    },
    {
      category: 'GCS & Communication',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'MAVLink', level: 95 },
        { name: 'Ardupilot', level: 90 },
        { name: 'PX4', level: 85 },
        { name: 'QGroundControl', level: 88 }
      ]
    },
    {
      category: 'Web Development',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      category: 'Simulation & Testing',
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'Gazebo', level: 88 },
        { name: 'Ardupilot SITL', level: 90 },
        { name: 'Path Planning', level: 85 }
      ]
    },
    {
      category: 'Tools & Frameworks',
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Qt Creator', level: 85 },
        { name: 'Pymavlink', level: 92 },
        { name: 'ROS2', level: 80 },
        { name: 'Power BI', level: 88 },
        { name: 'Unity', level: 85 },
        { name: 'Git', level: 90 }
      ]
    }
  ];

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
      liveUrl: 'https://plantsage.netlify.app/',
      featured: true,
      gradient: 'from-green-500 to-emerald-600',
      images: [
        '/src/assets/images/projects/plantsage/image1.png',
        '/src/assets/images/projects/plantsage/image2.png',
        '/src/assets/images/projects/plantsage/image3.png'
      ],
      folder: 'plantsage'
    },
    {
      title: 'Web-Based Ground Control Station',
      description: 'Full-fledged Ground Control Station to manage drone operations with real-time telemetry and mission planning',
      features: [
        'Pymavlink integration for seamless communication',
        'TCP/UDP protocols for robust data transmission',
        'Multi-user access with RBAC security',
        'Real-time telemetry dashboard',
        'Mission planning tools'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'Pymavlink', 'MAVLink'],
      liveUrl: 'https://aquaairx.netlify.app/',
      gradient: 'from-blue-500 to-cyan-600',
      images: [
        '/src/assets/images/projects/web-gcs/image1.png',
        '/src/assets/images/projects/web-gcs/image2.png',
        '/src/assets/images/projects/web-gcs/image3.png'
      ],
      folder: 'web-gcs'
    },
    {
      title: 'Windows-Based Ground Control Station',
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
      images: [
        '/src/assets/images/projects/windows-gcs/image1.png',
        '/src/assets/images/projects/windows-gcs/image2.png',
        '/src/assets/images/projects/windows-gcs/image3.png'
      ],
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
        '/src/assets/images/projects/virtual-keyboard/image1.png',
        '/src/assets/images/projects/virtual-keyboard/image2.png',
        '/src/assets/images/projects/virtual-keyboard/image3.png'
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
        '/src/assets/images/projects/flappy-bird/image1.png',
        '/src/assets/images/projects/flappy-bird/image2.png',
        '/src/assets/images/projects/flappy-bird/image3.png'
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
        '/src/assets/images/projects/havi-ai/image1.png',
        '/src/assets/images/projects/havi-ai/image2.png',
        '/src/assets/images/projects/havi-ai/image3.png'
      ],
      folder: 'havi-ai'
    }
  ];

  // Project Image Carousel Component
  const ProjectCarousel = ({ images, title, folder }: { images: string[], title: string, folder: string }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(images.length).fill(false));

    useEffect(() => {
      if (!isHovered) {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }
    }, [images.length, isHovered]);

    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleImageError = (index: number) => {
      setImageErrors(prev => {
        const newErrors = [...prev];
        newErrors[index] = true;
        return newErrors;
      });
    };

    return (
      <div 
        className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageErrors[currentImage] ? (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <span className="text-sm font-medium block">{title}</span>
              <span className="text-xs text-gray-400 mt-1">Add images to: src/assets/images/projects/{folder}/</span>
            </div>
          </div>
        ) : (
          <img 
            src={images[currentImage]} 
            alt={`${title} - Image ${currentImage + 1}`}
            className="w-full h-full object-cover"
            onError={() => handleImageError(currentImage)}
          />
        )}
        
        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentImage ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              K.S.S.Vinayak
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="text-lg text-blue-600 font-medium mb-4">Hi, I'm Vinayak 👋</div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                GCS Developer &<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UAV Systems Engineer
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specializing in Autonomous Navigation & Real-time Telemetry Systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full text-lg"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  vinayakkommisetti@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  9133075535
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Bangalore, India
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 hover:bg-gray-100"
                  onClick={() => window.open('https://github.com/vinay9133', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 hover:bg-blue-50"
                  onClick={() => window.open('https://www.linkedin.com/in/vinay-kommisetti/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </Button>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl flex items-center justify-center text-gray-500 text-6xl">
                  👨‍💻
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                GCS Developer with <span className="font-semibold text-blue-600">11 months of hands-on experience</span> in building both web-based and software-based Ground Control Station for UAVs and underwater vehicles. Proficient in MAVLink, ROS2, and Ardupilot simulations, with a strong background in real-time telemetry, mission planning, and autonomous navigation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about improving drone autonomy through advanced control systems and simulation testing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">11+</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                  <div className="text-sm text-gray-600">UAV Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">Team Leadership</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Performance Boost</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - REORDERED */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Work Experience</h2>
          <div className="space-y-12">
            {/* AEROGO FIRST */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AEROGO - Business Development Analyst</h3>
                    <p className="text-orange-600 font-medium">12/2023 – 06/2024 | Bangalore, India</p>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Internship
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Analysis & Visualization</h4>
                    <p className="text-gray-600 text-sm">During my internship at Aerogo, I demonstrated proficiency in utilizing Power BI for data visualization and analysis, effectively transforming complex datasets into insightful visual representations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Market Research</h4>
                    <p className="text-gray-600 text-sm">Conducted comprehensive research and analysis on:</p>
                    <ul className="text-gray-600 text-sm mt-2 list-disc list-inside">
                      <li>Amphibious drones market analysis and use cases</li>
                      <li>Onshore windfarms operational requirements and market opportunities</li>
                      <li>Offshore windfarms technology trends and applications</li>
                      <li>Pipeline inspection companies and their technological needs</li>
                      <li>Oil and Gas companies data analysis and visualization</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Data Visualization</h4>
                    <p className="text-gray-600 text-sm">Created comprehensive Power BI dashboards and reports for strategic decision-making and market analysis.</p>
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
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AquaAirX - Software Development Engineer</h3>
                    <p className="text-blue-600 font-medium">06/2024 – Present | Bangalore, India</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current Role
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Web-Based Ground Control Station Development</h4>
                    <p className="text-gray-600 text-sm">Designed and developed a fully functional web-based Ground Control Station using React.js, Node.js, and Express.js, ensuring seamless communication between drones and the ground station via MAVLink, TCP, UDP and serial connections.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real-time Features</h4>
                    <p className="text-gray-600 text-sm">Implemented real-time telemetry dashboards, mission planning tools, and drone control interfaces, supporting multi-user collaboration with role-based access control (RBAC).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pymavlink Integration</h4>
                    <p className="text-gray-600 text-sm">Integrated Pymavlink for telemetry display, drone control (arm, disarm, takeoff, land, RTL), and mission planning with radio, compass, and accelerometer calibration features.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Desktop Ground Control Station</h4>
                    <p className="text-gray-600 text-sm">Built a Windows-based Ground Control Station application using C++, QML, and Qt, providing standalone solution with real-time telemetry visualization, command and control functionalities, and mission execution.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Features</h4>
                    <p className="text-gray-600 text-sm">Developed camera live feed integration for real-time video streaming and sonar 3D point cloud visualization for underwater drone operations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Team Leadership</h4>
                    <p className="text-gray-600 text-sm">Led a team of 3 developers to optimize backend communication for Web Ground Control Station, ensuring 40% faster telemetry updates and reducing command execution delays.</p>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills & Expertise</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <Card key={category.category} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-lg mb-6`}>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Image Carousels */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${project.featured ? 'lg:col-span-2' : ''}`}>
                <CardContent className="p-8">
                  <ProjectCarousel images={project.images} title={project.title} />
                  <div className={`bg-gradient-to-r ${project.gradient} text-white p-4 rounded-lg mb-6`}>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        Featured Project
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.status && (
                    <p className="text-blue-600 font-medium mb-4">Status: {project.status}</p>
                  )}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button 
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    LPU
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology (CSE Honors)</h3>
                  <p className="text-lg text-gray-600 mb-2">Lovely Professional University</p>
                  <p className="text-blue-600 font-medium mb-2">2020 – 2024 | Phagwara, India</p>
                  <p className="text-gray-600">GPA: 7.79</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's build something amazing together</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">vinayakkommisetti@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">9133075535</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="p-3">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-3">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 K.S.S.Vinayak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
