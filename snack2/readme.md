### Traccia

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.  
Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:  
- Un array di stringhe contenente il loro nome tutto in maiuscolo.   
ES (Marco della Rovere => MARCO DELLA ROVERE);
- Un array di oggetti "studente" che hanno un totale di voti superiore a 70  
- Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120  

Questo è l'elenco degli studenti:  

| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |

### Svolgimento

1. creo un array di oggetti contenente tutti i dati degli studenti

2. applico il methodo map all'array 
    3. per ogni studente
    4. il nuovo nome sarà uguale al nome studente tutto in maiuscolo
5. stampo in console il nuovo array

6. applico il methodo filter all'array 
    7. per ogni studente
    8. se i voti sono maggiori di 70 lo trascrivo
9. stampo in console il nuovo array

