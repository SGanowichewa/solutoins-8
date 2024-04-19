// BEGIN
const groupBy = (arr, prop) => {
    return arr.reduce((acc, obj) => {
      const key = obj[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  };
  
  export default groupBy;
// END