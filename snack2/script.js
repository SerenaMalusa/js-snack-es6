// 1. creo un array di oggetti contenente tutti i dati degli studenti
const students = [
    {
        id : 213,
        name : 'Marco della Rovere',
        grades : 78
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84
    }
]

// 2. applico il methodo map all'array
// 4. il nuovo nome sarà uguale al nome studente tutto in maiuscolo
const studentsNames = students.map ((student) => student.name.toUpperCase());

// 5. stampo in console il nuovo array
console.log(studentsNames);

// 6. applico il methodo filter all'array 
const bestStudents = students.filter ((student) => {

    return student.grades >= 70;

});

console.log(bestStudents);