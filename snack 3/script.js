// 1. creo array di oggetti
const bikes = [
    {
        name : 'Wilier 0 SLR',
        weight : 6.5
    },
    {
        name : 'Cannondale SuperSix EVOHi-MOD Disc Dura Ace',
        weight : 8.0
    },
    {
        name : 'Trek Emonda 2020',
        weight : 6.81
    },
    {
        name : 'Trek Emonda SLR',
        weight : 4.65
    },
    {
        name : 'SAVA Phantom 2.0 700C',
        weight : 8.1
    },
]

// 2. creo variabile peso minimo = peso oggetto 0
let minWeight = bikes[0].weight;

// 3. ciclo tutti gli oggetti dell'array
bikes.forEach((bike) => {
    
    // 4. se peso minimo >= del peso dell oggetto  
    // 5. peso minimo diventa il peso di quell'oggetto 
    if (minWeight > bike.weight) minWeight = bike.weight;

});

// 6. filtro l'array e prendo solo l'elemento che ha peso = peso minimo
// 7. e lo destrutturo direttamente in un oggetto
const [lighterBike] = bikes.filter((bike) => bike.weight == minWeight);

// 8. lo stampo in console
console.log(`la bici ${lighterBike.name} è la più leggera di tutte con un peso di ${lighterBike.weight}Kg`);