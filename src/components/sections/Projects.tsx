
import React from 'react';
import { Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { HoveredImageState } from '@/types';

interface ProjectsProps {
  darkMode: boolean;
  hoveredImage: HoveredImageState | null;
  setHoveredImage: (image: HoveredImageState | null) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, hoveredImage, setHoveredImage }) => {
  return (
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

                  {project.images && (
                    <ProjectCarousel 
                      images={project.images} 
                      projectTitle={project.title}
                      hoveredImage={hoveredImage}
                      setHoveredImage={setHoveredImage}
                    />
                  )}
                  
                  <p className={`text-base mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {project.status && (
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm">
                      Status: {project.status}
                    </p>
                  )}
                  
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
  );
};
