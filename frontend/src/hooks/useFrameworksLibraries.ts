import { useState, useEffect } from 'react';

export function useFrameworksLibraries() {
  const [frameworksLibraries, setFrameworksLibraries] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/frameworksLibraries.txt');
        const text = await response.text();
        const frameworksLibrariesLines = text.split('\n').map(line => line.trim());
        const map = new Map<string, string>();

        frameworksLibrariesLines.forEach(line => {
            const [language, proficiency] = line.split(' ');
            map.set(language, proficiency);
        });
        setFrameworksLibraries(map);
      } catch (err) {
        console.error('Failed to read FrameworksLibraries:', err);
      }
    };

    fetchData();
  }, []); 

  return frameworksLibraries;
}
