import React, { useEffect, useState } from 'react';
import { useCompanyNames } from '../../hooks/useCompanyNames';
import { useCompanyDescriptions } from '../../hooks/useCompanyDescriptions';
import { useCompanyPeriods } from '../../hooks/useCompanyPeriods';
import { 
  DropdownWrapper, 
  DropdownButton, 
  DropdownContent, 
  DropdownOption, 
} from '../../styles/Dropdown';
import { BasicTitle } from '../../styles/Headers';
import { Underline } from '../../styles/Underline';
import { CompanyImage } from '../../styles/Image';
import { DescriptionImageWrapper, ExperienceWrapper } from '../../styles/Wrappers';
import { ExperienceDescription } from '../../styles/Text';
import isFutureDate from '../utils/isFutureDate';

const Experience: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const companyNames = useCompanyNames();
  const companyDescriptions = useCompanyDescriptions();
  const companyPeriods = useCompanyPeriods();

  const [selectedOption, setSelectedOption] = useState(companyNames[0] || ''); 

  useEffect(() => {
    if (companyNames.length > 0) {
      setSelectedOption(companyNames[0]);
      const initialImageCompany = companyNames[0].toLowerCase().trim().replace(/\s/g, '');
      setImageUrl(require(`../../assets/companies/${initialImageCompany}.png`).default);
    }
  }, [companyNames]);
  
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectOption = async (optionIndex: number, optionLabel: string) => {
    const description = companyDescriptions[optionIndex] || 'No description available';
    const period = companyPeriods[optionIndex] || '';
    const formattedPeriod = isFutureDate(period.split(' - ')[0])
      ? `Incoming: ${period}` : period;

  setInfo(`${formattedPeriod}<br/><br/>${description}`);
    setSelectedOption(optionLabel);
    setShowDropdown(false);

    const imageCompany = optionLabel.toLowerCase().trim().replace(/\s/g, '');
    try {
      const image = require(`../../assets/companies/${imageCompany}.png`);
      setImageUrl(image);
    } catch (error) {
      console.error(`Error loading image for ${optionLabel}:`, error);
      setImageUrl(''); 
    }
  };

 return (
    <ExperienceWrapper>
      <BasicTitle>Experience</BasicTitle>
      <Underline />
      <DropdownWrapper>
        <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
        {showDropdown && (
          <DropdownContent show={showDropdown}>
            {companyNames.map((companyName, index) => (
              <DropdownOption key={index} onClick={() => selectOption(index, companyName)}>
                {companyName}
              </DropdownOption>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
      <DescriptionImageWrapper>
      {info && <ExperienceDescription dangerouslySetInnerHTML={{ __html: info }} />}        {imageUrl && <CompanyImage src={imageUrl} alt={selectedOption} />}
      </DescriptionImageWrapper>
    </ExperienceWrapper>
  );
};

export default Experience;

