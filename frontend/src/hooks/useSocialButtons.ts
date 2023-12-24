import githubImage from '../assets/utils/github.png';
import linkedinImage from '../assets/utils/linkedin.png';
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