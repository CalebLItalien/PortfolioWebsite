import { useState, useEffect } from 'react';

export function useCompanyPeriods() {
  const [companyPeriods, setCompanyPeriods] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/companyPeriods.txt');
        const text = await response.text();
        const periodsArray = text.split('\n').map(line => line.trim());
        setCompanyPeriods(periodsArray);
      } catch (err) {
        console.error('Failed to read periods:', err);
      }
    };

    fetchData();
  }, []); 

  return companyPeriods;
}
