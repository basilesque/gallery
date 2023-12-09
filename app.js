function getRandomNumber() {
    return (Math.floor(Math.random() * 500)) + 500;
};

function createElements() {
    const container = document.createElement('div');
    container.classList.add('container');

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'row-cols-2', 'row-cols-md-4', 'row-cols-sm-3', 'g-4');

    for (let i = 1; i <= 12; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = `https://source.unsplash.com/random/${getRandomNumber()}x${getRandomNumber()}`;

        cardDiv.appendChild(image);
        colDiv.appendChild(cardDiv);

        rowDiv.appendChild(colDiv);
    }

    container.appendChild(rowDiv);

    const here = document.querySelector("#here")
    here.insertAdjacentElement('afterend', container);
}

createElements();




