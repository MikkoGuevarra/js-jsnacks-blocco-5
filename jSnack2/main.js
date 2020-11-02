$(document).ready(function() {
// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

//creo array di nomi
var names = ['pippo', 'pluto', 'paperino', 'minnie', 'mickey'];
var firstNumber = parseInt(prompt('Inserisci il primo numero'));
console.log(firstNumber);

var secondoNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log(secondoNumber);

// creo nuovo array che si trovano in una posizione  compresa tra i due numeri inseriti dall'utente.
console.log(names);
var newArray = [];

for (var i = 0; i < names.length; i++) {
    var currentName = names[i];
    if (names[firstNumber] <= currentName || names[secondoNumber] >= currentName) {
        newArray.push(currentName);
    }
}
console.log(newArray);
});
