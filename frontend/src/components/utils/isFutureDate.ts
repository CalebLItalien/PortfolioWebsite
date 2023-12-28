const isFutureDate = (dateString: string): boolean => {
    if (!dateString) return false;
    const today = new Date();
    const [month, year] = dateString.split(', ');
    const date = new Date(`${month} 1, ${year}`);
  
    return date > today;
};

export default isFutureDate;
  