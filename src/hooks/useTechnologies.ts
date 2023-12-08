import { useState, useEffect } from 'react';

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/technologies.txt');
        const text = await response.text();
        const technologiesLines = text.split('\n').map(line => line.trim());
        const map = new Map<string, string>();

        technologiesLines.forEach(line => {
            const [language, proficiency] = line.split(' ');
            map.set(language, proficiency);
        });
        setTechnologies(map);
      } catch (err) {
        console.error('Failed to read technologies:', err);
      }
    };

    fetchData();
  }, []); 

  return technologies;
}
