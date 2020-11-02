$(document).ready(function() {
// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

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

for (var i = 0; i < bike.length; i++) {
    thisBike = bike[i]
    console.log(thisBike);
    for (var key in bike[i]) {
        var currentWeight = thisBike['peso'];
        console.log( thisBike['nome'] + ' ha un peso' + ' ' + currentWeight);
        // console.log(key + ': ' + thisBike[key]);
        if (thisBike['peso'] < currentWeight) {
            console.log(thisBike);

        }
    }
}
});
