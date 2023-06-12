const kmTraveled = prompt ('Quanti kilometri deve percorrere?');
console.log ('kmTraveled', kmTraveled, typeof kmTraveled );

const age = prompt ('Qual è la sua età?');
console.log ('age', age, typeof age );

document.getElementById('ticket').innerHTML = kmTraveled;
document.getElementById('ticket-age').innerHTML = age;