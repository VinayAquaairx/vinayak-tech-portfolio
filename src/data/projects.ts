
import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'PlantSage - AI Powered Plant Health Monitoring Platform',
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
    // metrics: { lines: '25,000+', time: '6 months', team: '3 developers' },
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
    // metrics: { lines: '30,000+', time: '8 months', team: '4 developers' },
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
