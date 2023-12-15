import { useState, useEffect } from 'react';

export function useLanguages() {
  const [languages, setLanguages] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/languages.txt');
        const text = await response.text();
        const languagesLines = text.split('\n').map(line => line.trim());
        const map = new Map<string, string>();

        languagesLines.forEach(line => {
            const [language, proficiency] = line.split(' ');
            map.set(language, proficiency);
        });
        setLanguages(map);
      } catch (err) {
        console.error('Failed to read languages:', err);
      }
    };

    fetchData();
  }, []); 

  return languages;
}
