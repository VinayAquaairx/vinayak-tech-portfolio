
import React from 'react';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';

interface TimelineProps {
  darkMode: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  return (
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
          {/* Timeline Line - Perfectly Centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg transform -translate-x-0.5"></div>
          
          <div className="space-y-16">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  {/* Timeline Icon - Perfectly Centered on the line */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-xl flex items-center justify-center z-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    
                    whileTap={{ scale: 0.95 }}
      
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`p-6 rounded-2xl shadow-xl ${
                        darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                      } border-2 backdrop-blur-sm`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                      <h3 className={`text-sm font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
