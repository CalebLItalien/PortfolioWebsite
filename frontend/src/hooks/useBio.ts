import {useState, useEffect} from 'react';

export function useBio() {
    const [bio, setBio] = useState('');
    useEffect(() => {
        fetch('/bio.txt')
            .then(response => response.text())
            .then(text => setBio(text))
            .catch(err => console.error("Failed to read bio:", err))
    }, []);
    return bio
}