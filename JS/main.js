/*let firstNumber = parseInt(prompt('Inserisci un numero'));
let secondNumber = parseInt(prompt('Inserisci un altro numero'));


if (firstNumber > secondNumber) {

    const random = Math.floor(Math.random() * (firstNumber - secondNumber) + secondNumber);

    console.log(random);

} else {

    const random2 = Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber);

    console.log(random2);
}*/
/*
const firstWorld = prompt('Inserisci una parola');
const secondWorld = prompt('Inserisci la seconda parola');

if (firstWorld.length == secondWorld.length) {

    console.log(firstWorld + ' ' + secondWorld);

} else if (firstWorld.length > secondWorld.length) {

    console.log(firstWorld);

} else if (secondWorld.length > firstWorld.length) {

    console.log(secondWorld);
}*/
/*
let arrayVoid = [];
let somma = 0;

while (somma < 50) {

    let numberUser = parseInt(prompt('Inserisci un numero'));

    somma += numberUser;


    console.log(somma)

    if (somma < 50) {
        arrayVoid.push(numberUser);
    }

}
console.log(arrayVoid);

*/

/*
let arrayVoid = [];
let somma = 0;
let media = 0;

while (somma < 50) {

    let numberUser = parseInt(prompt('Inserisci un numero'));

    somma += numberUser;



    if (somma < 50) {
        arrayVoid.push(numberUser);

    }

    media = (somma % arrayVoid.length);

}
console.log(arrayVoid);
console.log(media);
*/

//Trovare gli errori nel seguente codice:

//--------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];  //cambio in un array

for (let i = 0; i < numbers.length - 1; i++) { //elimino ; da i++
    if (i % 2 !== 0) { //cambio numbers con la i e nego la condizione o metto il risultato == 1

        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]	