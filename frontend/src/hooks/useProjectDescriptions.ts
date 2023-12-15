import { useState, useEffect } from 'react';

export function useProjectDescriptions() {
  const [projectDescriptions, setProjectDescriptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/projectDescriptions.txt');
        const text = await response.text();
        const descriptionsArray = text.split('\n').map(line => line.trim());
        setProjectDescriptions(descriptionsArray);
      } catch (err) {
        console.error('Failed to read descriptions:', err);
      }
    };

    fetchData();
  }, []); 

  return projectDescriptions;
}
