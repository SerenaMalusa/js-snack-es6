function createCard (name, weight, ...htmlClasses) {

    //creo la card con classe card
    let card = document.createElement('div');

    // aggiungo le classi
    htmlClasses.forEach((htmlClass) => {
        card.classList.add(htmlClass);
    });
    
    // metto il contenuto dentro la card
    card.innerHTML = `
    <div class="card-body">
        <h5 class="card-title bike-name">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bike-weight">peso: ${weight}Kg</li>
    </ul>
    `
    // restituisco la card
    return card;
    
}