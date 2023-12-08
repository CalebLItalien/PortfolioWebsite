import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCompanyNames } from '../hooks/useCompanyNames';
const ExperienceWrapper = styled.div`
  position: relative;
`;

const ExperienceTitle = styled.h1`
  position: absolute;
  top: 10vh;
  left: 10vw;
  margin: 0;
`;

const Underline = styled.div`
  height: 2px; 
  width: 80vw; 
  background-color: black;
  position: absolute;
  top: 15vh; 
  left: 10vw;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 20vh; // Adjust as needed
  left: 25vw; // Center of the left half
  width: 200px; // Adjust width as needed
`;

const DropdownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
`;

type DropdownProps = {
  show: boolean;
};

const DropdownContent = styled.div<DropdownProps>`
  display: ${(props) => (props.show ? 'block' : 'none')}; 
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownOption = styled.button`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// interface ExperienceProps {
//   // Properties for the Experience component
// }


const Experience: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [info, setInfo] = useState('');
  const companyNames = useCompanyNames();
  const [selectedOption, setSelectedOption] = useState(companyNames[0] || ''); 

  useEffect(() => {
    if (companyNames.length > 0) {
      setSelectedOption(companyNames[0]);
    }
  }, [companyNames]);
  
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectOption = (optionInfo: string, optionLabel: string) => {
    setInfo(optionInfo);
    setSelectedOption(optionLabel);
    setShowDropdown(false);
  };


  return (
    <ExperienceWrapper>
      <ExperienceTitle>Experience</ExperienceTitle>
      <Underline />
      <DropdownWrapper>
        <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
        {showDropdown && (
          <DropdownContent show={showDropdown}>
            {companyNames.map((companyName, index) => (
              <DropdownOption
                key={index}
                onClick={() => selectOption(`Info for ${companyName}`, companyName)}>
                  {companyName}
                </DropdownOption>
            ))}
          </DropdownContent>
        )}
      </DropdownWrapper>
      {info && <p>{info}</p>}
    </ExperienceWrapper>
  );
};

export default Experience;