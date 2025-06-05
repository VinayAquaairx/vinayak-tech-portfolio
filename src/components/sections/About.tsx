
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
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
  );
};
