'use strict';

// Получить массив имен пользователей по полу (поле gender).

import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const userGender = users.filter(users => users.gender === gender);
  return userGender.map(users => users.name);
};

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]