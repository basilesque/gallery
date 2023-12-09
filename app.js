const images = document.querySelectorAll("img");

for (img of images) {
    img.src = `https://source.unsplash.com/random/${getRandomNumber()}x${getRandomNumber()}`;
};

function getRandomNumber() {
    return (Math.floor(Math.random() * 500)) + 500;
};