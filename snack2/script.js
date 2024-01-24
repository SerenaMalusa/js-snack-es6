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

// 6. applico il methodo filter all'array 
// 8. se i voti sono maggiori di 70 lo trascrivo
const bestStudents = students.filter ((student) => student.grades >= 70);

// 10. applico il metodo filter all'array
// 12. se i voti sono maggiori di 70 e l'id è maggiore di 120 lo trascrivo
const bestLatetsStudents = students.filter ((student) => student.grades >= 70 && student.id >= 120);

// stampo tutto in console
console.log(`
Nomi studenti in maiuscolo:`, studentsNames, `

Elenco studenti con voti >= a 70:`, bestStudents, `

Elenco studenti con voti >= a 70 e id >= 120`, bestLatetsStudents);