import React from 'react';
import { SvgIcon } from './svgIcon';

interface GroupedSkillsProps {
  groupName: string;
  skills: { 
      name: string; 
      icon: string; 
      alt: string; 
    }[]; 
}

const GroupedSkills: React.FC<GroupedSkillsProps> = ({ groupName, skills }) => {
  
  const capitalize = (s: string) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-8">{capitalize(groupName)}</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="relative p-4 md:w-40 rounded-lg group m-auto"
          >
            <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 sm:rounded-lg sm:shadow-md group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none"></div>
            <div className="relative flex flex-col items-center">
              <SvgIcon name={skill.icon} alt={skill.alt} className="w-10 h-10 mb-2"/>
              <span className="font-semibold">{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GroupedSkills;