// Snack 6: avete a disposizione un elenco di frutti per fare una macedonia. Scegliete 2, 3 o 4 in modo casuale e calcolate il prezzo della macedonia:

const products = [
  { title: 'Mela', price: 2.30},
  { title: 'Banana', price: 1.50 },
  { title: 'Mango', price: 2},
  { title: 'Pesca', price: 1.80},
  { title: 'Pera', price: 1.50},
  { title: 'Arancia', price: 2.20}
];

// funzione che genera un numero casuale da min a max (incluso)
const getRandomNum = ((min, max) => {
  randomNum = Math.floor(Math.random() * (max - min +1) + min);
  return randomNum;
})

// variabile che conterrà il prezzo totale, inizialmente 0
let totalPrice = 0;

// creo un ciclo che gira una volta per ogni elemento dell'array products
products.forEach((product) => {
  // stampo il valore attuale della variabile prezzo totale
  console.log('prezzo totale precedente',totalPrice.toFixed(2),'€');
  // genero un numero casuale da 2 a 4
  let moltiplicatore = getRandomNum(2,4);
  // prendo il prezzo dell'elemento product e lo moltiplico per il numero random, poi lo aggiungo a prezzo totale
  totalPrice += product.price  * moltiplicatore;
  // stanpo in console il nome del prodotto che sto ciclando + il moltiplicatore
  console.log(`PREZZO ${product.title}`,product.price,'€','moltiplicatore',moltiplicatore);
  // stampo in console il nuovo valore di prezzo totale
  console.log('prezzo totale nuovo',totalPrice.toFixed(2),'€');
})

// stampo in console il valore del prezzo totale
console.log('PREZZO TOTALE',totalPrice.toFixed(2),'€');

