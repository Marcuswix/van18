let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) 
    {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 8000); // Ändra bild varaktighet