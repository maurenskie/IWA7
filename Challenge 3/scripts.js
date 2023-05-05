const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = -9394;

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = -4582.21;

const divider = '----------------------------------';

// Only change below this line

const owed = (leoBalance + sarahBalance).toFixed(2);
const leo = `${leoName} ${leoSurname} (Owed: R ${-leoBalance.toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${-sarahBalance.toFixed(2)})\n`;
const total = `  Total amount owed: R ${owed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
const result = `\n${leo}${sarah}\n${divider}\n${total}\n${divider}`;

console.log(result);
