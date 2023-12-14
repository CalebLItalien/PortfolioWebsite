import React, { useEffect, useState } from 'react';
import { useProjectNames } from '../../hooks/useProjectNames';
import { useProjectDescriptions } from '../../hooks/useProjectDescriptions';
import { 
  DropdownWrapper, 
  DropdownButton, 
  DropdownContent, 
  DropdownOption, 
} from '../../styles/Dropdown';
import { Title } from '../../styles/Title';
import { Underline } from '../../styles/Underline';
import { CompanyImage } from '../../styles/Image';
import { ExperienceWrapper } from '../../styles/Wrappers';

const Projects: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
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
      <Title>Projects</Title>
      <Underline />
      <DropdownWrapper>
        <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
        {showDropdown && (
          <DropdownContent show={showDropdown}>
            {projectNames.map((projectName, index) => {
              const imageProject = projectName.toLowerCase().trim().replace(/\s/g, '');
              return (
                <DropdownOption key={index} onClick={() => selectOption(index, projectName)}>
                <CompanyImage
                  src={require(`../../assets/companies/${imageProject}.png`).default}
                  alt={projectName}
                />
                {projectName}
              </DropdownOption>
              );
            })}
          </DropdownContent>
        )}
      </DropdownWrapper>
      {info && <p>{info}</p>}
    </ExperienceWrapper>
  );
};

export default Projects;