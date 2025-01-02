import React from 'react';
import { frontend, backend, languages, tools } from '../lib/data/skills';
import SkillsCarousel from './skillsCarousel';

const Skills: React.FC = () => {
  const createSkillObject = (skill: string) => {
    const formattedSkill = skill.replace(/[ .]/g, '').toLowerCase();
    return {
      name: skill,
      icon: `${formattedSkill}Icon`,
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
    <div id='skills' className="p-4 text-left target:pt-20 md:pt-20">
      <SkillsCarousel skills={skills}/>
    </div>
  );
};

export default Skills;