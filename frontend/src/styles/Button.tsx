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
  width: 32px;
  height: 32px;
  margin: 0 10px; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative; 

  ::before {
    content: attr(data-tooltip); 
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8); 
    color: white; =
    padding: 4px 8px; 
    border-radius: 4px;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%);
    opacity: 0; 
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1; 
  }
`;