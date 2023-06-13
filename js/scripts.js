const kmTraveled = parseInt(prompt ('Quanti kilometri deve percorrere?'));
//console.log ('kmTraveled', kmTraveled, typeof kmTraveled );

const age = parseInt(prompt ('Qual è la sua età?'));
//console.log ('age', age, typeof age );

document.getElementById('ticket').innerHTML = kmTraveled + ' km';
document.getElementById('ticket-age').innerHTML = age + ' anni';

// Prezzo normale al km
const price = 0.21 * kmTraveled;
//console.log('price', price, typeof price)
document.getElementById('price-normal').innerHTML = price.toFixed(2) + '€';


//Sconto
if(age < 18) {
    let discounted20 = ((20 / 100) * price).toFixed(2);
    //console.log('discounted20', discounted20, typeof discounted20);

    document.getElementById('discounted').innerHTML = discounted20 + '€';


    let discountedPrice = (price - discounted20).toFixed(2);
    //console.log('discountedPrice', discountedPrice, typeof discountedPrice);
    
    document.getElementById('discounted-total').innerHTML = discountedPrice + '€';
}
else if (age >= 65) {
    let discounted40 = ((40 / 100) * price).toFixed(2);
    //console.log('discounted40', discounted40, typeof discounted40);

    document.getElementById('discounted').innerHTML = discounted40 + '€';


    let discountedPrice = (price - discounted40).toFixed(2);
    //console.log('discountedPrice', discountedPrice, typeof discountedPrice);
    
    document.getElementById('discounted-total').innerHTML = discountedPrice + '€';
}
else{
    document.getElementById('discounted').innerHTML = 0 + '€';
    document.getElementById('discounted-total').innerHTML = 0 + '€';
}

if (isNaN(parseInt(age)) || isNaN(parseInt(kmTraveled))) {
    alert ('Scrivere solo valori numerici')
 }