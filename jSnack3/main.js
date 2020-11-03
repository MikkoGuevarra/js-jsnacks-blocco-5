$(document).ready(function() {
    // A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

    var students = [
        {
            'name' : 'Lionel',
            'lastName' : 'Messi',
            'age' : 33
        },
        {
            'name' : 'Cristiano',
            'lastName' : 'Ronaldo',
            'age' : 35
        },
        {
            'name' : ' Zlatan',
            'lastName' : 'Ibrahimovic',
            'age' : 39
        },
    ];



    //creo nuovo array
    var newObjects = [];

    //ciclo il primo array per prendere ogni singolo oggetto
    for (var i = 0; i < students.length; i++) {
        var thisStudent = students[i];
        console.log(thisStudent);

        //creo clone di ogni singolo oggetto
        var newObject = {
            'name' : thisStudent.name,
            'lastName' : thisStudent.lastName,
            'age' : thisStudent.age,
            'position' : stringGen(1)
        };
        //genero una lettera random tramite funzione
        // var randomLetter = stringGen(1);
        //push lo studente corrente al nuovo array
        newObjects.push(newObject);
        //per ogni singolo oggetto aggiungo la nuova proprietà position che contiene la lettera random generata per ogni itterazione
        // newObjects[i].position = randomLetter;

    }
    console.log('new array : ');
    console.log(newObjects);
    console.log('old array : ');
    console.log(students);

});
function stringGen(len) {
    var text = " ";
    var charset = "ABCDEFGHIJKLMNOPSTUWZ";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}
