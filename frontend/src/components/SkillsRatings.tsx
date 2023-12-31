import React from 'react';
import styled from 'styled-components';
import { theme } from "../theme";
import { MOBILE_THRESHOLD, SKILLS_THRESHOLD } from '../constants';

interface SectionProps {
  title: string;
  icons: string[]; 
  ratings: Map<string, string>;
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: ${theme.colors.DARK_BLUE};
  font-size: 1rem;
  font-weight: 400;
  @media screen and (max-height: 600px) {
    font-size: 0.5rem;
  }
  @media screen and (max-height: 700px) {
    font-size: 0.7rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: clamp(1.5vw, 2vw + 1vh, 4vw); 
  height: auto;
  margin: 5px;

  transition: transform 0.3s ease-in-out;

  @media screen and (max-height: 900px) {
    width: clamp(1vh, 3vh, 4vh);
  }
  @media screen and (max-height: 800px) {
    width: clamp(1vh, 2vh, 4vh);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const Section: React.FC<SectionProps> = ({ title, icons, ratings }) => {
    const sortedIcons = icons.slice().sort((a, b) => {
        const proficiencyOrder = ['Beginner', 'Intermediate', 'Advanced'];
        return proficiencyOrder.indexOf(ratings.get(a)!) - proficiencyOrder.indexOf(ratings.get(b)!);
    })
    return (
        <SectionWrapper>
          <SectionTitle>{title}</SectionTitle>
          <IconContainer>
            {sortedIcons.map((icon, index) => {
              const iconPath = require(`../assets/skills/${icon.toLowerCase()}.png`);
              return (
                <div key={index}>
                <StyledIcon 
                  title={icon}
                  src={iconPath} 
                  alt={icon} />
              </div>
              );
              })}
          </IconContainer>
        </SectionWrapper>
      );
    };

interface SkillsRatingsProps {
    getSkillsHook: () => Map<string, string>;
}
const SkillsRatings: React.FC<SkillsRatingsProps> = ({ getSkillsHook }) => {
  const skillsRatings = getSkillsHook();
  const icons = Array.from(skillsRatings.keys());
  
  const advancedIcons = icons.filter(icon => skillsRatings.get(icon) === 'Advanced');
  const intermediateIcons = icons.filter(icon => skillsRatings.get(icon) === 'Intermediate');
  const beginnerIcons = icons.filter(icon => skillsRatings.get(icon) === 'Beginner');

  return (
    <div>
      <Section title="Advanced" 
               icons={advancedIcons} 
               ratings={skillsRatings}/>
      <Section title="Intermediate" 
               icons={intermediateIcons} 
               ratings={skillsRatings}/>
      <Section title="Beginner" 
               icons={beginnerIcons} 
               ratings={skillsRatings}/>
    </div>
  );
};

export default SkillsRatings;
