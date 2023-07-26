let firstNumber = parseInt(prompt('Inserisci un numero'));
let secondNumber = parseInt(prompt('Inserisci un altro numero'));


if (firstNumber > secondNumber) {

    const random = Math.floor(Math.random() * (firstNumber - secondNumber) + secondNumber);

    console.log(random);

} else {

    const random2 = Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber);
    
    console.log(random2);
}


