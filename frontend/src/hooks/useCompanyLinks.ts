import { useState, useEffect } from 'react';

export function useCompanyLinks() {
  const [companyLinks, setCompanyLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/companyLinks.txt');
        const text = await response.text();
        const linksArray = text.split('\n').map(line => line.trim());
        setCompanyLinks(linksArray);
      } catch (err) {
        console.error('Failed to read links:', err);
      }
    };

    fetchData();
  }, []); 

  return companyLinks;
}
