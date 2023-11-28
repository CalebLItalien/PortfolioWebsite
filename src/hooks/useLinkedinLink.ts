import {useState, useEffect} from 'react';

export function useLinkedinLink() {
    const [linkedinLink, setLinkedinLink] = useState('');
    useEffect(() => {
        fetch('/linkedin.txt')
            .then(response => response.text())
            .then(text => setLinkedinLink(text))
            .catch(err => console.error("Failed to read name:", err))
    }, []);
    return linkedinLink
}