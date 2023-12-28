import React, { useEffect, useState, useRef } from 'react';
import { useProjectNames } from '../../hooks/useProjectNames';
import { useProjectDescriptions } from '../../hooks/useProjectDescriptions';
import { useProjectLinks } from '../../hooks/useProjectLinks';
import { 
  DropdownWrapper, 
  DropdownButton, 
  DropdownContent, 
  DropdownOption, 
} from '../../styles/Dropdown';
import { BasicTitle } from '../../styles/Headers';
import { Underline } from '../../styles/Underline';
import { DescriptionImageWrapper, ExperienceWrapper } from '../../styles/Wrappers';
import { ProjectDescription } from '../../styles/Text';
import { GithubProject } from '../../styles/Image';
import dropdown from '../../assets/utils/dropdown.png';
import github from '../../assets/utils/github.png';


const Projects: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
  const [dropdownWidth, setDropdownWidth] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const projectNames = useProjectNames();
  const projectDescriptions = useProjectDescriptions();
  const projectLinks = useProjectLinks();

  const [selectedOption, setSelectedOption] = useState(projectNames[0] || ''); 
  const [currentLink, setCurrentLink] = useState(projectLinks[0] || '');

  useEffect(() => {
    if (projectNames.length > 0 && projectDescriptions.length > 0) {
      const firstProjectName = projectNames[0];
      const firstProjectDescription = projectDescriptions[0] || 'No description available';
      const firstProjectLink = projectLinks[0] || '';
  
      setSelectedOption(firstProjectName);
      setInfo(firstProjectDescription);
      setCurrentLink(firstProjectLink);
    }
  }, [projectNames, projectDescriptions, projectLinks]);
  

  const selectOption = async (optionIndex: number, optionLabel: string) => {
    const description = projectDescriptions[optionIndex] || 'No description available';
    setInfo(`${description}`);
    setSelectedOption(optionLabel);
    setShowDropdown(false);
    const link = projectLinks[optionIndex] || '';
    setCurrentLink(link);
  };

  const calculateDropdownWidth = () => {
    if (dropdownRef.current && dropdownWidth === 0) {
      const options = Array.from(dropdownRef.current.querySelectorAll('button'));
      const maxWidth = options.reduce((max, option) => Math.max(max, option.offsetWidth), 0);
      setDropdownWidth(maxWidth);
    }
  }

  const toggleDropdown = () => {
    calculateDropdownWidth();
    setShowDropdown(!showDropdown)
  }

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ExperienceWrapper>
      <BasicTitle>Projects</BasicTitle>
      <Underline />
      <DropdownWrapper ref={dropdownRef}>
        <DropdownButton 
          style={{width: dropdownWidth ? `${dropdownWidth}px` : 'auto'}}
          show={showDropdown}
          onClick={toggleDropdown}>
          {selectedOption}
          <img src={dropdown} alt="Dropdown icon" />
        </DropdownButton>
        {showDropdown && (
          <DropdownContent show={showDropdown}
            style={{width: dropdownWidth ? `${dropdownWidth}px` : 'auto'}}>
            {projectNames.map((projectName, index) => (
              <DropdownOption key={index} onClick={() => selectOption(index, projectName)}>
                {projectName}
              </DropdownOption>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
      <DescriptionImageWrapper>
        <a href={currentLink} target="_blank" 
                              rel="noopener noreferrer">
          <GithubProject src={github} alt="Github link"
                         data-tooltip="Link to project" /> {/* not working*/}
        </a>
        <ProjectDescription>{info}</ProjectDescription>
      </DescriptionImageWrapper>
    </ExperienceWrapper>
  );
  
};

export default Projects;