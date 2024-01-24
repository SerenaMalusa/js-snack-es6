const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
  ];


// 1. applico il metodo map all array vips, che ne modificherà il contenuto
const placeholders = vips.map ((vip,index) => {

    // 7. creo un oggetto con le seguenti chiavi:valori e lo restituisco
    return {

        // 4. nome del tavolo : 'Tavolo VIP'
        tableName : "Tavolo Vip",
        // 5. nome dell'ospite : vip
        guestName : vip,
        // 6. numero posto : numero random da 1 al numero di tutti i vip
        placeNum : index +1

    };

});

// 8. stampo il nuovo array
console.log('elenco segnaposti', placeholders);