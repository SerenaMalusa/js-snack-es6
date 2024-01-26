// Snack 5: dato un array di oggetti che rappresentano delle auto,
// chiedete all'utente con quante persone deve viaggiare e trovate la prima auto che soddisfa la richiesta:

let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 3
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5
  },
  {
    color: 'blue',
    type: 'suv',
    capacity: 8
  },
  {
    color: 'green',
    type: 'citycar',
    capacity: 4
  },
  {
    color: 'yellow',
    type: 'smart',
    capacity: 2
  }
]

// chiedo all'utente il numero di persone
const userPeople = parseInt(prompt('quante persone siete?'));

// creo variabile switch che diventerà false nel momento in cui avrò trovato prima macchina che va bene
let isFound = false;
// variabile che conterrà la macchina
let rightCar;

// preparo il ciclo while
let i = 0;
// finchè isFound è falsa & il mio indice è più piccolo della lunghezza dell'array
while ( isFound == false && i < cars.length) {

  // se la capienza di questa macchina è più grande del numero di persone inserito dall'utente
  if (cars[i].capacity >= userPeople) {
    // console.log('userPeople',userPeople, 'carCapacity',cars[i].capacity);
    
    // isFound diventa vera -> esco dal loop
    isFound = true;
    // metto questa macchina nella variabile della macchina che va bene
    rightCar = cars[i];
    
  }  

  // aumento la i per continuare il ciclo
  i++;
}

// stampo in console
console.log(`la prima macchina disponibile per le persone richieste (${userPeople}) è un/una ${rightCar.type} di colore ${rightCar.color} che ospita fino a ${rightCar.capacity} persone.`);