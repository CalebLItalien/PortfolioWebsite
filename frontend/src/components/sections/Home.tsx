import React, { useRef, useEffect, useState } from 'react';
import { useHeadshot } from '../../hooks/useHeadshot';
import { useSocialButtons } from '../../hooks/useSocialButtons';
import { useBio } from '../../hooks/useBio';
import { MarginButtonWrapper, SocialButton } from '../../styles/Button';
import { Bio, BioTabbed } from '../../styles/Bio';
import { HeadShotImage } from '../../styles/Image';
import { HeadshotWrapper, HomeContentWrapper, HomeWrapper } from '../../styles/Wrappers';
import { Welcome } from '../../styles/Headers';
import { useName } from '../../hooks/useName';
import { WelcomeUnderline } from '../../styles/Underline';
import TypingAnimation from '../TypingAnimation';
import { HOME_THRESHOLD, MOBILE_THRESHOLD } from '../../constants';

interface HomeProps {
  windowWidth: number;
}

const Home: React.FC<HomeProps> = ({ windowWidth }: HomeProps): JSX.Element => {
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

  const renderBio = () => {
    if (windowWidth <= HOME_THRESHOLD && windowWidth > MOBILE_THRESHOLD) {
      return (
        <Bio ref={textRef}>
          {bio}
        </Bio>
      );
    } else {
      return (
        <Bio ref={textRef}>
          <BioTabbed>
            {bio}
          </BioTabbed>
        </Bio>
      );
    }
  }

  return (
    <HomeWrapper>
      <HeadshotWrapper
          windowWidth={windowWidth}>
        <HeadShotImage src={headshot} alt="headshot"/>
      </HeadshotWrapper>
      <HomeContentWrapper
          windowWidth={windowWidth}>
        <Welcome>
          <TypingAnimation text={welcomeText} speed={100}/>
        </Welcome>
        <WelcomeUnderline width={textWidth}></WelcomeUnderline>
        {renderBio()}
        <MarginButtonWrapper>
          <SocialButton
            github={true}
            href={githubLink}
            target="_blank"
            data-tooltip="GitHub" 
            style={{ backgroundImage: `url(${githubImage})` }}
            ></SocialButton>
          <SocialButton
            github={false}
            href={linkedinLink}
            target="_blank"
            data-tooltip="LinkedIn" 
            style={{ backgroundImage: `url(${linkedinImage})` }}
          ></SocialButton>
        </MarginButtonWrapper>
      </HomeContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
