
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
        <div className="space-y-12">
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
  );
};
