const sequenceSum = (begin, end) => {
    // BEGIN

      if (begin > end) {
          return NaN;
      } else if (begin === end) {
          return begin;
      } else {
          return begin + sequenceSum(begin + 1, end);
      }
  
  sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
  sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
  sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
    // END
  };
  
export default sequenceSum;
  