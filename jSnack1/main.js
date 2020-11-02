$(document).ready(function() {
// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

//creo oggetti bici
var bike = [
    {
        'nome' : 'Shava',
        'peso' : 7
    },
    {
        'nome' : 'Atala',
        'peso' : 3
    },
    {
        'nome' : 'Scott',
        'peso' : 6
    }
];
console.log(bike);

//creo variabile per il peso corrente che sto scorrendo
var currentWeight;

//creo variabile per salvare il peso minore
var minor = bike[0]['peso'];
var minorName =  bike[0]['nome'];

//cre ciclo per scorrere ogni oggetto dell'array
for (var i = 0; i < bike.length; i++) {
    thisBike = bike[i]
    console.log(thisBike);
    var currentWeight = thisBike['peso'];
    var currentName = thisBike['nome'];

    if (currentWeight < minor) {
        minor = currentWeight;
        minorName = currentName;
    }
}

console.log('the winner  is '+ minorName + ' con ' + minor + ' kg' );
$('#best-bike').text('the winner  is '+ minorName + ' con ' + minor + ' kg')

});
