import React, { useRef, useEffect, useState } from 'react';
import { useHeadshot } from '../../hooks/useHeadshot';
import { useSocialButtons } from '../../hooks/useSocialButtons';
import { useBio } from '../../hooks/useBio';
import { useName } from '../../hooks/useName';
import { MarginButtonWrapper, MobileSocialButton } from '../../styles/Button';
import { MarginBio } from '../../styles/Bio';
import { MobileHeadShotImage } from '../../styles/Image';
import { MobileWelcome } from '../../styles/Headers';
import { MobileWelcomeUnderline } from '../../styles/Underline';
import TypingAnimation from '../TypingAnimation';
import { MobileHomeWrapper } from '../../styles/Wrappers';

const MobileHome: React.FC = () => {
  const headshot = useHeadshot();
  const socialButtons = useSocialButtons();
  const bio = useBio();
  const [githubLink, githubImage] = [socialButtons[0].link, socialButtons[0].imageUrl];
  const [linkedinLink, linkedinImage] = [socialButtons[1].link, socialButtons[1].imageUrl];
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const name = useName();
  const welcomeText = `Hi there! My name is ${name}.`;

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [bio]);

  useEffect(() => {
    const updateWidth = () => {
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, [bio])

  return (
    <MobileHomeWrapper>
      <MobileWelcome>
        <TypingAnimation text={welcomeText} speed={100} />
      </MobileWelcome>
      <MobileWelcomeUnderline/>
      <MobileHeadShotImage src={headshot} alt="headshot" />
      <MarginBio ref={textRef}>
        {bio}
      </MarginBio>
      <MarginButtonWrapper>
        <MobileSocialButton 
          github={true}
          className="glow"
          href={githubLink}
          target="_blank"
          data-tooltip="GitHub" 
          style={{ backgroundImage: `url(${githubImage})` }}
        ></MobileSocialButton>
        <MobileSocialButton
          github={false}
          href={linkedinLink}
          target="_blank"
          data-tooltip="LinkedIn" 
          style={{ backgroundImage: `url(${linkedinImage})` }}
        ></MobileSocialButton>
      </MarginButtonWrapper> 
    </MobileHomeWrapper>
  );
};

export default MobileHome;
