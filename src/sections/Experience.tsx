import React from 'react';
import styled from 'styled-components';

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

// interface ExperienceProps {
//   // Properties for the Experience component
// }

const Experience: React.FC = () => {
  return (
    <ExperienceWrapper>
      <ExperienceTitle>Experience</ExperienceTitle>
      <Underline />
    </ExperienceWrapper>
  );
};

export default Experience;
