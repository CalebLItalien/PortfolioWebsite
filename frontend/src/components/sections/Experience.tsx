import React, { useEffect, useState } from 'react';
import { useCompanyNames } from '../../hooks/useCompanyNames';
import { useCompanyDescriptions } from '../../hooks/useCompanyDescriptions';
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

const Experience: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
  const companyNames = useCompanyNames();
  const companyDescriptions = useCompanyDescriptions();
  const [selectedOption, setSelectedOption] = useState(companyNames[0] || ''); 

  useEffect(() => {
    if (companyNames.length > 0) {
      setSelectedOption(companyNames[0]);
    }
  }, [companyNames]);
  
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectOption = async (optionIndex: number, optionLabel: string) => {
    const description = companyDescriptions[optionIndex] || 'No description available';
    setInfo(`${description}`);
    setSelectedOption(optionLabel);
    setShowDropdown(false);
  };

  return (
    <ExperienceWrapper>
      <Title>Experience</Title>
      <Underline />
      <DropdownWrapper>
        <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
        {showDropdown && (
          <DropdownContent show={showDropdown}>
            {companyNames.map((companyName, index) => {
              const imageCompany = companyName.toLowerCase().trim().replace(/\s/g, '');
              return (
                <DropdownOption key={index} onClick={() => selectOption(index, companyName)}>
                <CompanyImage
                  src={require(`../../assets/companies/${imageCompany}.png`).default}
                  alt={companyName}
                />
                {companyName}
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

export default Experience;