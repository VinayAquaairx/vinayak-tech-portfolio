
import { motion } from 'framer-motion';

export const HeroScene = () => {
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
