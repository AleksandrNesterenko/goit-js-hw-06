'use strict';

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter(users => color === users.eyeColor);
};

console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]