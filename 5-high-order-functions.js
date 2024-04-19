import _ from 'lodash';

// BEGIN
function takeOldest(users, n = 1) {
    const sortedUsers = users.sort((a, b) => {
      const dateA = new Date(a.birthday);
      const dateB = new Date(b.birthday);
      return dateA - dateB;
    });
  
    return sortedUsers.slice(0, n);
  }
  
  export default takeOldest;
// END