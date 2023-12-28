import React, { useEffect, useState, useRef } from 'react';
import { useCompanyNames } from '../../hooks/useCompanyNames';
import { useCompanyDescriptions } from '../../hooks/useCompanyDescriptions';
import { useCompanyPeriods } from '../../hooks/useCompanyPeriods';
import { useCompanyLinks } from '../../hooks/useCompanyLinks';
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
import dropdown from '../../assets/utils/dropdown.png';

const Experience: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [dropdownWidth, setDropdownWidth] = useState(0);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const companyNames = useCompanyNames();
  const companyDescriptions = useCompanyDescriptions();
  const companyPeriods = useCompanyPeriods();
  const companyLinks = useCompanyLinks();

  const [selectedOption, setSelectedOption] = useState(companyNames[0] || '');
  const [currentLink, setCurrentLink] = useState(companyLinks[0] || '');

  useEffect(() => {
    if (companyNames.length > 0) {
      const firstCompanyName = companyNames[0];
      setSelectedOption(firstCompanyName);

      const firstCompanyLink = companyLinks[0] || '';
      setCurrentLink(firstCompanyLink);
      
      const imageCompany = firstCompanyName.toLowerCase().trim().replace(/\s/g, '');
      try {
        import(`../../assets/companies/${imageCompany}.png`)
          .then(image => setImageUrl(image.default))
          .catch(error => {
            console.error(`Error loading image for ${firstCompanyName}:`, error);
            setImageUrl(''); 
          });
      } catch (error) {
        console.error(`Error outside import for ${firstCompanyName}:`, error);
      }

      const firstCompanyIndex = 0;
      const description = companyDescriptions[firstCompanyIndex] || 'No description available';
      const period = companyPeriods[firstCompanyIndex] || '';
      const formattedPeriod = isFutureDate(period.split(' - ')[0])
        ? `Incoming: ${period}` : period;

      setInfo(`${formattedPeriod}<br/><br/>${description}`);
    }
  }, [companyNames, companyDescriptions, companyPeriods]);

  const calculateDropdownWidth = () => {
    if (dropdownRef.current && dropdownWidth === 0) {
      const options = Array.from(dropdownRef.current.querySelectorAll('button'));
      const maxWidth = options.reduce((max, option) => Math.max(max, option.offsetWidth), 0);
      // setDropdownWidth(maxWidth * 1.1);
      setDropdownWidth(maxWidth);
    }
  };

  const toggleDropdown = () => {
    calculateDropdownWidth();
    setShowDropdown(!showDropdown);
  };

  const selectOption = async (optionIndex: number, optionLabel: string) => {
    const description = companyDescriptions[optionIndex] || 'No description available';
    const period = companyPeriods[optionIndex] || '';
    const formattedPeriod = isFutureDate(period.split(' - ')[0])
      ? `Incoming: ${period}` : period;

    setInfo(`${formattedPeriod}<br/><br/>${description}`);
    setSelectedOption(optionLabel);
    setShowDropdown(false);

    const link = companyLinks[optionIndex] || '';
    setCurrentLink(link);

    const imageCompany = optionLabel.toLowerCase().trim().replace(/\s/g, '');
    try {
      const image = require(`../../assets/companies/${imageCompany}.png`);
      setImageUrl(image);
    } catch (error) {
      console.error(`Error loading image for ${optionLabel}:`, error);
      setImageUrl('');
    }
  };

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
      <BasicTitle>Experience</BasicTitle>
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
            {companyNames.map((companyName, index) => (
              <DropdownOption 
                key={index} 
                onClick={() => selectOption(index, companyName)}>
                {companyName}
              </DropdownOption>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
      <DescriptionImageWrapper>
        {imageUrl && (
          <CompanyImage
            src={imageUrl}
            alt={selectedOption}
            onClick={() => currentLink && window.open(currentLink, '_blank')}
            style={{ cursor: 'pointer' }}
          />
        )}
        {info && <ExperienceDescription dangerouslySetInnerHTML={{ __html: info }} />}        
      </DescriptionImageWrapper>
    </ExperienceWrapper>
  );
};

export default Experience;
