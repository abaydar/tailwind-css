import React from 'react';
import { experienceData } from '../lib/data/experienceData';

interface ExperienceProps {
  setIsExperienceHovered: (isExperienceHovered: boolean) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setIsExperienceHovered }) => {
  return (
    <div id="experience" className="p-4 text-center target:pt-20">
      <h2 className="text-3xl text-left ml-4 font-bold mb-4 dark:text-purple-300">Experience</h2>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className="experience-item"
          onMouseEnter={() => setIsExperienceHovered(true)}
          onMouseLeave={() => setIsExperienceHovered(false)}
        >
        <div className="grid grid-cols-2 items-start mb-8">
        <div className="text-left">
          <h3 className="text-2xl">{experience.company}</h3>
          <h2 className="text-xl">{experience.role}</h2>
        </div>
        <div className="text-right text-lg">
          <p>{experience.duration}</p>
          <p>{experience.location}</p>
        </div>
        </div>
          <ul className="list-disc pl-6 text-left">{
            experience.description.map((desc, index) => (
              <li className="pl-2 mb-2" key={index}>{desc}</li>)
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;