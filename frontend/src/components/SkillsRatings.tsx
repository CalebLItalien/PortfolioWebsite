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
    font-size: 0.8rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 2.5vw;
  height: auto;
  margin: 5px;
  @media (max-width: 1160px) {
    width: 2vw;
  }
  @media (max-width: 768px) {
    width: 4vw;
  }
  @media screen and (max-height: 1000px) and (max-width: 600px) {
    width: 4vw;
  }
  @media screen and (max-height: 800px) {
    width: 2.8vw;
  }
  @media screen and (max-height: 700px) and (max-width: 600px) {
    width: 2vw;
  }
  @media screen and (max-height: 500px) {
    width: 1vw;
  }
  @media screen and (min-width: 500px) 
  and (min-height: 501px) and (max-height: 700px) {
    width: 1.8vw; 
  }
  @media screen and (min-width: 600px) 
  and (min-height: 501px) and (max-height: 700px) {
    width: 1.4vw; 
  }
  @media screen and (min-width: 700px) 
  and (min-height: 501px) and (max-height: 700px) {
    width: 1.2vw; 
  }
  @media screen and (min-width: 800px) 
  and (min-height: 501px) and (max-height: 700px) {
    width: 1vw
  }
  @media screen and (min-width: 800px) 
  and (min-height: 501px) and (max-height: 800px) {
    width: 1vw
  }
  @media screen and (min-width: 800px) 
  and (min-height: 501px) and (max-height: 900px) {
    width: 1.5vw
  }
  @media screen and (min-width: 800px) 
  and (min-height: 501px) and (max-height: 1000px) {
    width: 2vw
  }
  @media screen and (min-width: 800px) 
  and (min-height: 501px) and (max-height: 1100px) {
    width: 2.3vw
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
