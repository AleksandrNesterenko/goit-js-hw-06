'use strict';

// Получить массив имен пользователей по полу (поле gender).

import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  return users.filter(users => gender === users.gender);
};

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]