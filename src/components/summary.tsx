import React from 'react';
import { summaryData } from '../lib/data/summaryData';
import githubIcon from '../assets/icons/githubIcon.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';
import ContactSvg from './contactSvg';

const Summary: React.FC = () => {
  return (
    <div id="home" className="h-[90vh] flex flex-wrap target:pt-20">
     <div className="flex w-full justify-end space-x-4">
        <ContactSvg href="https://github.com/abaydar" src={githubIcon} alt="GitHub" />
        <ContactSvg href="https://www.linkedin.com/in/amanda-baydar/" src={linkedinIcon} alt="LinkedIn" />
      </div>

      <div className="text-center w-full md:w-1/2 md:text-left px-4">
        <h1
          className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-8"
          dangerouslySetInnerHTML={{ __html: summaryData.greeting }}
        />
        <p className="mb-4 lg:text-xl lg:mb-8">{summaryData.description}</p>
        <button 
          className="bg-customYellow text-darkBlue text-xl font-bold rounded-full px-16 clickable-button"
          onClick={() => window.open(`mailto:${summaryData.email}`)}
        >
          Email Me
        </button>
      </div>
    </div>
  );
};


export default Summary;