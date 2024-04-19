// BEGIN
const getGirlFriends = (users) => {
    const friends = users.flatMap(user => user.friends);
    return friends.filter(friend => friend.gender === 'female');
  };
  
  export default getGirlFriends;
// END