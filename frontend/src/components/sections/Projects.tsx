import React, { useEffect, useState } from 'react';
import { useProjectNames } from '../../hooks/useProjectNames';
import { useProjectDescriptions } from '../../hooks/useProjectDescriptions';
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

const Projects: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
  // const [imageUrl, setImageUrl] = useState('');

  const projectNames = useProjectNames();
  const projectDescriptions = useProjectDescriptions();
  const [selectedOption, setSelectedOption] = useState(projectNames[0] || ''); 

  useEffect(() => {
    if (projectNames.length > 0) {
      setSelectedOption(projectNames[0]);
    }
  }, [projectNames]);
  
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectOption = async (optionIndex: number, optionLabel: string) => {
    const description = projectDescriptions[optionIndex] || 'No description available';
    setInfo(`${description}`);
    setSelectedOption(optionLabel);
    setShowDropdown(false);
  };

  return (
    <ExperienceWrapper>
      <BasicTitle>Projects</BasicTitle>
      <Underline />
      <DropdownWrapper>
        <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
        {showDropdown && (
          <DropdownContent show={showDropdown}>
            {projectNames.map((projectName, index) => (
                <DropdownOption key={index} onClick={() => selectOption(index, projectName)}>
                {projectName}
              </DropdownOption>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
      <DescriptionImageWrapper>
        {info && <ProjectDescription>{info}</ProjectDescription>}
      </DescriptionImageWrapper>
    </ExperienceWrapper>
  );
};

export default Projects;