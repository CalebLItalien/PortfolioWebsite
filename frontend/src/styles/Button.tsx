import styled from 'styled-components';

export const MarginButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center; 
`;

export const SkillsButton = {
  flex: '1',
  border: 'none',
  background: 'transparent',
};

export const TopSkillsButton = {
  ...SkillsButton,
  borderRadius: '50px 0 0 0',
};

export const BottomSkillsButton = {
  ...SkillsButton,
  borderRadius: '0 0 0 50px',
};

export const SkillsButtonWrapper: React.CSSProperties = {
  flexDirection: 'column',
  width: '33%',
  height: '100%',
};


export const SocialButton = styled.a`
  display: inline-block;
  width: 60px;
  height: 60px;
  margin: 0 10px; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative; 
  transition: transform 0.2s ease-in-out; 

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
  background-color: #1E88E5;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 5vh;
  color: white;
  border: none;
  min-height: 4vh;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    &:before {
      opacity: 1;
    }
  }
`;
