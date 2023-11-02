const basket = document.querySelector('.basket');
const stars = document.querySelector('.stars');

let basketPosition = 200; // Initial position of the basket
let score = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === 'ArrowRight' && basketPosition < 320) {
        basketPosition += 20;
    }

    basket.style.left = basketPosition + 'px';

    // Check if the basket catches the star
    if (basketPosition <= stars.offsetLeft + 50 && basketPosition + 80 >= stars.offsetLeft) {
        // If caught, increase the score and reposition the star
        score++;
        document.querySelector('.score').textContent = 'Score: ' + score;
        stars.style.left = Math.floor(Math.random() * 350) + 'px';
    }
});

