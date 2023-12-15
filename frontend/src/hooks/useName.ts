import {useState, useEffect} from 'react';

export function useName() {
    const [name, setName] = useState('');
    useEffect(() => {
        fetch('/name.txt')
            .then(response => response.text())
            .then(text => setName(text))
            .catch(err => console.error("Failed to read name:", err))
    }, []);
    return name
}