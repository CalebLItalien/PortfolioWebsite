import { useState, useEffect } from 'react';

export function useCompanyNames() {
  const [companyNames, setCompanyNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/companyNames.txt');
        const text = await response.text();
        const namesArray = text.split('\n').map(line => line.trim());
        setCompanyNames(namesArray);
      } catch (err) {
        console.error('Failed to read names:', err);
      }
    };

    fetchData();
  }, []); 

  return companyNames;
}
