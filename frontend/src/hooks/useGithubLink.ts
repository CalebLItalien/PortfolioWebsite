import {useState, useEffect} from 'react';

export function useGithubLink() {
    const [githubLink, setGithubLink] = useState('');
    useEffect(() => {
        fetch('/github.txt')
            .then(response => response.text())
            .then(text => setGithubLink(text))
            .catch(err => console.error("Failed to read name:", err))
    }, []);
    return githubLink
}