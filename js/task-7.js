'use strict';

// Получить общую сумму баланса (поле balance) всех пользователей.

import users from "./users.js";

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, users) => totalBalance + users.balance, 0);
};

console.table(calculateTotalBalance(users)); // 20916