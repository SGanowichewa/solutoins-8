const run = (text) => {
  const takelast = (str, n) => {
      if (!str || str.length < n) {
          return null;
      }
      
      return str.slice(-n).split('').reverse().join('');
  };

  return takelast(text, 4); 
};

export default run;