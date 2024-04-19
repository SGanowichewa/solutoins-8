const smallestDivisor = (num) => {
    // BEGIN
      let divisor = 2;
  
      while (divisor <= Math.floor(num / 2)) {
          if (num % divisor === 0) {
              return divisor;
          }
          divisor++;
      }
  
      return num;
  }
    // END
  
export default smallestDivisor;
  