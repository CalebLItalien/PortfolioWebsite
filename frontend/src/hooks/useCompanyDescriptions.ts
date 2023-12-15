import { useState, useEffect } from 'react';

export function useCompanyDescriptions() {
  const [companyDescriptions, setCompanyDescriptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/companyDescriptions.txt');
        const text = await response.text();
        const descriptionsArray = text.split('\n').map(line => line.trim());
        setCompanyDescriptions(descriptionsArray);
      } catch (err) {
        console.error('Failed to read descriptions:', err);
      }
    };

    fetchData();
  }, []); 

  return companyDescriptions;
}
