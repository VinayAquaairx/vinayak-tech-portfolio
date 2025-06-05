
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
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
  );
};
