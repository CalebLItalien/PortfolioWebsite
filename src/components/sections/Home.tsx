import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHeadshot } from '../../hooks/useHeadshot';
import { useSocialButtons } from '../../hooks/useSocialButtons';
import { useBio } from '../../hooks/useBio';

const HomeWrapper = styled.div`
  margin-top: -20vh;
  position: relative;
  justify-content: center; 
`;

// interface HomeProps {
//   // Properties for the Home component
// }

const HeadShotImage = styled.img`
  height: 50vh;
  width: auto;
  max-widh: 100%;
`;

const Bio = styled.p`
  padding-top: 20px;
`;

type ImageUnderlineProps = {
  width: number;
};

const ImageUnderline = styled.div<ImageUnderlineProps>`
  height: 2px; 
  background-color: black; 
  width: ${props => `${props.width}px`};  
  margin-left: auto;
  margin-right: auto;
  margin-top: -5px;
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
`;

const SocialButton = styled.a`
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
const Home: React.FC = () => {
  const headshot = useHeadshot();
  const socialButtons = useSocialButtons();
  const bioText = useBio();
  const [githubLink, githubImage] = [socialButtons[0].link, socialButtons[0].imageUrl];
  const [linkedinLink, linkedinImage] = [socialButtons[1].link, socialButtons[1].imageUrl];
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [bioText]);

  return (
    <HomeWrapper>
      <HeadShotImage src={headshot} alt="headshot"/>
      <ImageUnderline width={textWidth} />
      <Bio ref={textRef}> {bioText} </Bio>
      <ButtonWrapper>
      <SocialButton
        href={githubLink}
        target="_blank"
        data-tooltip="Github" 
        style={{ backgroundImage: `url(${githubImage})` }}
        ></SocialButton>
      <SocialButton
        href={linkedinLink}
        target="_blank"
        data-tooltip="LinkedIn" 
        style={{ backgroundImage: `url(${linkedinImage})` }}
      ></SocialButton>
      </ButtonWrapper>
    </HomeWrapper>
  );
};

export default Home;
