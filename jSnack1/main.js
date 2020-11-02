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
        'peso' : 6
    },
    {
        'nome' : 'Scott',
        'peso' : 5
    }
];
console.log(bike);

//creo variabile per il peso corrente che sto scorrendo
var currentWeight;

//creo variabile per salvare il peso precedente
var minor;

//cre ciclo per scorrere ogni oggetto dell'array
for (var i = 0; i < bike.length; i++) {
    thisBike = bike[i]
    console.log(thisBike);
    //creo ciclo for in per stampare ogni singola proprietà dell'oggetto
    for (var key in bike[i]) {
        currentWeight = thisBike['peso'];
        console.log( thisBike['nome'] + ' ha un peso' + ' ' + currentWeight);
        // console.log(key + ': ' + thisBike[key]);
        if (currentWeight < minor) {
            minor = currentWeight;
            console.log('winner ' + bike[i]);
        }
    }
}
});
