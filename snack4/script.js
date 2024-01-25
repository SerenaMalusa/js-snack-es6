const teams = [
    {
      name: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
  ];

// 1. creo la funzione che genera un numero random da min a max inclusi
const genRandomNum = (max, min = 1) => Math.floor(Math.random() * (max - min + 1) + min);

// 2. ciclo l'array e per ogni oggetto
teams.forEach((team) => {

    //3. applico la funzione alle chiavi score e foul dell'elemento
    team.score = genRandomNum(100, 0);
    team.foul = genRandomNum(10, 0);

});

// 5. creo nuovo array con metodo map
const teamsFouls = teams.map((team) => {

    // 6. con il destructuring recupero le variabili da inserire nei nuovi oggetti
    const {name,foul} = team;
    return {
        name,
        foul
    };

})

// 7. stampo in console
console.log(teams, teamsFouls);

// BONUS 
// prendo gli elementi dal dom
const rowEl = document.querySelector('.row');

teams.forEach((team,index) => {

  // creo i bottoni con il nome della squadra
  const buttonEl = document.createElement('button');
  buttonEl.classList.add(`team-${index}`, 'btn', 'btn-primary');
  buttonEl.innerText = team.name;

  // creo la card con i dati
  const cardEl = document.createElement('div');
  cardEl.classList.add(`team-info-${index}`, 'card', 'col-12', 'd-none');
  cardEl.innerHTML = `
    <h5 class="team-score">Punti: ${team.score}</h5>
    <h5 class="team-foul">Falli: ${team.foul}</h5>
  `
  // prendo il bottone e gli aggiungo un event listener
  buttonEl.addEventListener('click', function () {

    // faccio apparire e sparire la card
    cardEl.classList.toggle('d-none');

  })

  // aggiungo bottone e card al contenuto della row
  rowEl.appendChild(buttonEl);
  rowEl.appendChild(cardEl);
  
});


