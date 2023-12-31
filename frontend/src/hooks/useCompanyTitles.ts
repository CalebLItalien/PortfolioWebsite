import { useState, useEffect } from 'react';

export function useCompanyTitles() {
  const [companyTitles, setCompanyTitles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/companyTitles.txt');
        const text = await response.text();
        const titlesArray = text.split('\n').map(line => line.trim());
        setCompanyTitles(titlesArray);
      } catch (err) {
        console.error('Failed to read titles:', err);
      }
    };

    fetchData();
  }, []); 

  return companyTitles;
}
