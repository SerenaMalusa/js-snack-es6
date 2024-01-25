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