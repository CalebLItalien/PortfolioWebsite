import { useState, useEffect } from 'react';

export function useProjectLinks() {
  const [projectLinks, setProjectLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/projectLinks.txt');
        const text = await response.text();
        const linksArray = text.split('\n').map(line => line.trim());
        setProjectLinks(linksArray);
      } catch (err) {
        console.error('Failed to read links:', err);
      }
    };

    fetchData();
  }, []); 

  return projectLinks;
}
