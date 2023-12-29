import styled from 'styled-components';
import { theme } from "../theme";
import { MOBILE_THRESHOLD, SKILLS_THRESHOLD, SOCIAL_BUTTON_THRESHOLD } from '../constants';
import getRGBFromHex from './utils/getRGBFromHex';

export const MarginButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
  @media (max-height: ${SOCIAL_BUTTON_THRESHOLD}px) {
    margin-top: 2px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  background-color: ${theme.colors.DARK_BLUE};
  flex: 1;

  @media (max-width: ${MOBILE_THRESHOLD}) {
    flex: 2;
  }
`;

interface SkillsButtonProps {
  isSelected: boolean;
  windowWidth: number;
}

export const SkillsButton = styled.button<SkillsButtonProps>`
  flex: 1;
  border: none;
  font-size: 1.3vw;  
  background: transparent;
  color: ${theme.colors.LIGHTEST_ORANGE};
  background-color: ${props => props.isSelected ? 
                      theme.colors.LIGHT_BLUE : 
                      theme.colors.DARK_BLUE};
  transition: font-size 0.3s ease-in-out;

  &:hover {
    font-size: 1.6vw;  
  }

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    font-size: 2.8vw; 

    &:hover {
      font-size: 3vw;  
    }
  }

  @media (min-width: ${MOBILE_THRESHOLD + 1}px) and (max-width: ${SKILLS_THRESHOLD}px) {
    font-size: 1.8vw;
    &:hover {
      font-size: 2.1vw;
    }
  }
`;


export const TopSkillsButton = styled(SkillsButton)`
  border-radius: ${theme.borderRadius} 0 0 0;
`;

export const BottomSkillsButton = styled(SkillsButton)`
  border-radius: 0 0 0 ${theme.borderRadius};
`;

export const SkillsButtonWrapper: React.CSSProperties = {
  flexDirection: 'column',
  width: '20%',
  height: '100%',
};

interface SocialButtonProps {
  github: boolean,
}

export const SocialButton = styled.a<SocialButtonProps>`
  display: inline-block;
  width: ${({ github }) => github ? '63px' : '60px'};
  height: ${({ github }) => github ? '63px' : '60px'};
  margin: 0 10px; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative; 
  transition: transform 0.3s ease-in-out;

  ::before {
    content: attr(data-tooltip); 
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8); 
    color: white; 
    padding: 4px 8px; 
    border-radius: 4px;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%);
    opacity: 0; 
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
    &:before {
      opacity: 1;
    }
  }
`;

export const MobileSocialButton = styled.a<SocialButtonProps>`
  display: inline-block;
  width: ${({ github }) => github ? '63px' : '60px'};
  height: ${({ github }) => github ? '63px' : '60px'};
  margin: 0 10px; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative; 
  transition: transform 0.3s ease-in-out;

  @media (max-height: ${SOCIAL_BUTTON_THRESHOLD}px) {
    width: ${({ github }) => github ? '53px' : '50px'};
    height: ${({ github }) => github ? '53px' : '50px'};
  }

  @media (max-height: 600px) {
    width: ${({ github }) => github ? '50px' : '47px'};
    height: ${({ github }) => github ? '50px' : '47px'};
  }

  ::before {
    content: attr(data-tooltip); 
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8); 
    color: white; 
    padding: 4px 8px; 
    border-radius: 4px;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%);
    opacity: 0; 
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
    &:before {
      opacity: 1;
    }
  }
`;


export const SubmitButton = styled.button`
  border-radius: 5px;
  background-color: ${theme.colors.LIGHT_BLUE};
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 5vh;
  color: white;
  border: none;
  min-height: 4vh;
  cursor: pointer;
  transition: font-size 0.3s ease-in-out;
  &:hover {
    font-size: 1.2em;
  }
`;
