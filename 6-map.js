// BEGIN
const getChildren = (users) => {
    const childrenList = [];
    users.forEach(user => {
      user.children.forEach(child => {
        childrenList.push(child);
      });
    });
    return childrenList;
  }
  
  export default getChildren;
// END