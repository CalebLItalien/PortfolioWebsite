import React from 'react';
import styled from 'styled-components';
//import { Icon } from 'devicon-react';

interface SectionProps {
  title: string;
  icons: string[]; 
  ratings: Map<string, string>;
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Proficiency = styled.span`
  font-size: 12px;
  margin-top: 5px;
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
            {sortedIcons.map((icon, index) => (
              <div key={index}>
                {/* <Icon icon={icon} /> */}
                <Proficiency>{ratings.get(icon)}</Proficiency>
              </div>
            ))}
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
