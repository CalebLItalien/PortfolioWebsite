import React from 'react';
import styled from 'styled-components';
import { theme } from "../theme";

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
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 2vw;
  height: auto;
  margin: 5px;
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
                <StyledIcon src={iconPath} alt={icon} />
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
