const esercizio1 = document.getElementById('concatena');
const esercizio2 = document.getElementById('concatena2');

var nome = 'aldo';
let ruolo = 'cliente';
const pgreco = 3.14;

esercizio1.innerHTML = nome + ', ' + ruolo + ', ' + pgreco;

var completo =  nome + ', ' + ruolo + ', ' + pgreco;

esercizio2.innerHTML = completo

/* esercizio 3 pt1*/ 
var nome1 = 'Mario';
document.getElementById('var').innerHTML = nome1;
{
    let nome1 = 'Carla';
    document.getElementById('let').innerHTML= nome1;
}

document.getElementById('final').innerHTML = nome1;

/* esercizio 3 pt2*/
var nome2 = Carla;

{
    let nome2 = 'Mario';
    document.getElementById('let2').innerHTML= nome2;
}
document.getElementById('let3').innerHTML = nome2;
document.getElementById('final3').innerHTML = nome2;

/*Esercizio 4 */
const iniziale = 15;

/*prima riga */
document.getElementById('iniziale').innerHTML +- iniziale;

var addizione = iniziale + 15;
document.getElementById('iniziale').innerHTML +- addizione + ', ' + (++addizione);