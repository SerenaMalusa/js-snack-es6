### Traccia

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.  
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

`const vips = [
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
];`  

La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:  
- nome del tavolo,
- nome dell'ospite,
- posto occupato.

Generiamo e stampiamo in console l'array di oggetti per i segnaposto.

### Svolgimento

1. applico il metodo map all array vips, che ne modificherà il contenuto
    2. per ogni vip
    3. creo un oggetto con le seguenti chiavi:valori
        4. nome del tavolo : 'Tavolo VIP'
        5. nome dell'ospite : vip
        6. numero posto : numero random da 1 al numero di tutti i vip
    7. restituisco l'oggetto creato
8. stampo il nuovo array