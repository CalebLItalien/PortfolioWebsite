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
import Resume from './Resume';
import { Underline } from '../../styles/Underline';
import { ProjectsWrapper, ProjectDescriptionWrapper } from '../../styles/Wrappers';
import { ProjectDescription } from '../../styles/Text';
import { GithubProject } from '../../styles/Image';
import dropdown from '../../assets/utils/dropdown.png';
import github from '../../assets/utils/github.png';

interface ProjectProps {
  windowWidth: number;
}

const Projects: React.FC<ProjectProps> = ({ windowWidth }: ProjectProps) => {
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
    <ProjectsWrapper>
      <div>
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
      <ProjectDescriptionWrapper>
        <ProjectDescription
          windowWidth={windowWidth}>
            {info}</ProjectDescription>
        <GithubProject 
          windowWidth={windowWidth}
          src={github} 
          alt="Github link" 
          onClick={() => window.open(currentLink, '_blank')}
          data-tooltip="Link to project" 
        />
      </ProjectDescriptionWrapper>
      </div>
      <Resume/>
    </ProjectsWrapper>
  );
  
};

export default Projects;