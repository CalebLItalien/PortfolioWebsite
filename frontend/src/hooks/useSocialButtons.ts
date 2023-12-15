import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import { useGithubLink } from './useGithubLink';
import {useLinkedinLink} from './useLinkedinLink';

export function useSocialButtons() {
    const githubLink = useGithubLink();
    const linkedinLink = useLinkedinLink();

    const socialButtons = [
        { imageUrl: githubImage, link: githubLink},
        { imageUrl: linkedinImage, link: linkedinLink}
    ]
    return socialButtons;
}