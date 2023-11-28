import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHeadshot } from '../hooks/useHeadshot';
import { useSocialButtons } from '../hooks/useSocialButtons';

const HomeWrapper = styled.div`
  margin-top: -20vh;
  position: relative;
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
  margin: 0 10px; // Adjust the spacing as needed
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Home: React.FC = () => {
  const headshot = useHeadshot();
  const socialButtons = useSocialButtons();

  const textRef = useRef<HTMLParagraphElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  return (
    <HomeWrapper>
      <HeadShotImage src={headshot} alt="headshot"/>
      <ImageUnderline width={textWidth} />
      <Bio ref={textRef}>
        Hi There! My name is Caleb L'Italien; I'm a senior at
        Union College, studying Computer Science and Mathematics.
      </Bio>
      <ButtonWrapper>
        {socialButtons.map((button, index) => (
          <SocialButton
            key={index}
            href={button.link}
            target="_blank"
            style={{ backgroundImage: `url(${button.imageUrl})` }}
          ></SocialButton>
        ))}
      </ButtonWrapper>
    </HomeWrapper>
  );
};

export default Home;
