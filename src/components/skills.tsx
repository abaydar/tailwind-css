import React from 'react';
import { frontend, backend, languages, tools } from '../lib/data/skills';

const Skills: React.FC = () => {
  const createSkillObject = (skill: string) => {
    return {
      name: skill,
      icon: `${skill.toLowerCase()}Icon`,
      alt: `${skill} Icon`
    };
  };

  const skills = {
    languages: languages.map(createSkillObject),
    frontend: frontend.map(createSkillObject),
    backend: backend.map(createSkillObject),
    tools: tools.map(createSkillObject),
  };

  return (
    <div id='skills' className="p-4 text-left target:pt-20 pt-20">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <h3 className="text-lg font-bold mb-4">Languages</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.languages.map((language, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {language.name}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Frontend</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.frontend.map((frontend, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {frontend.name}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Backend</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.backend.map((backend, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {backend.name}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Tools/Misc</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.tools.map((tool, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;