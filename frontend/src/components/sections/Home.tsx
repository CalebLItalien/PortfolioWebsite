import React, { useRef, useEffect, useState } from 'react';
import { useHeadshot } from '../../hooks/useHeadshot';
import { useSocialButtons } from '../../hooks/useSocialButtons';
import { useBio } from '../../hooks/useBio';
import { MarginButtonWrapper, SocialButton } from '../../styles/Button';
import { HeadshotUnderline } from '../../styles/Underline';
import { Bio } from '../../styles/Bio';
import { HeadShotImage } from '../../styles/Image';
import { HomeWrapper } from '../../styles/Wrappers';

const Home: React.FC = () => {
  const headshot = useHeadshot();
  const socialButtons = useSocialButtons();
  const bio = useBio();
  const [githubLink, githubImage] = [socialButtons[0].link, socialButtons[0].imageUrl];
  const [linkedinLink, linkedinImage] = [socialButtons[1].link, socialButtons[1].imageUrl];
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [bio]);

  return (
    <HomeWrapper>
      <HeadShotImage src={headshot} alt="headshot"/>
      <HeadshotUnderline width={textWidth} />
      <Bio ref={textRef}> {bio} </Bio>
      <MarginButtonWrapper>
      <SocialButton
        href={githubLink}
        target="_blank"
        data-tooltip="GitHub" 
        style={{ backgroundImage: `url(${githubImage})` }}
        ></SocialButton>
      <SocialButton
        href={linkedinLink}
        target="_blank"
        data-tooltip="LinkedIn" 
        style={{ backgroundImage: `url(${linkedinImage})` }}
      ></SocialButton>
      </MarginButtonWrapper>
    </HomeWrapper>
  );
};

export default Home;
