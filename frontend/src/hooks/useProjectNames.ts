import { useState, useEffect } from 'react';

export function useProjectNames() {
  const [projectNames, setProjectNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/projectNames.txt');
        const text = await response.text();
        const namesArray = text.split('\n').map(line => line.trim());
        setProjectNames(namesArray);
      } catch (err) {
        console.error('Failed to read names:', err);
      }
    };

    fetchData();
  }, []); 

  return projectNames;
}
