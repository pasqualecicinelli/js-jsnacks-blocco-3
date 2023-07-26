/*let firstNumber = parseInt(prompt('Inserisci un numero'));
let secondNumber = parseInt(prompt('Inserisci un altro numero'));


if (firstNumber > secondNumber) {

    const random = Math.floor(Math.random() * (firstNumber - secondNumber) + secondNumber);

    console.log(random);

} else {

    const random2 = Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber);

    console.log(random2);
}*/

const firstWorld = prompt('Inserisci una parola');
const secondWorld = prompt('Inserisci la seconda parola');

if (firstWorld.length == secondWorld.length) {
    
    console.log(firstWorld + ' ' + secondWorld);

} else if (firstWorld.length > secondWorld.length) {
    
    console.log(firstWorld);

} else if (secondWorld.length > firstWorld.length) {
    
    console.log(secondWorld);
}



