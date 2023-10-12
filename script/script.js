// Slideshow
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

setInterval(nextSlide, 8000);

// Function - To the top
function toTop()
{
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

// Hide "To the top" - button
window.addEventListener("scroll", function()
{
    let element = document.getElementById("btn-top")

    if (window.scrollY > 100)
    {
        element.classList.remove("hide-btn")
    }

    else
    {
        element.classList.add("hide-btn")
    }
})

//Open & close "Offert"
const menu = document.getElementById("sideMenu")
const overlay = document.getElementById("overlay")

function showHideMenu()
{
    if (menu.classList.contains("hide-btn"))
    {
        menu.classList.remove("hide-btn")
        overlay.classList.remove("hide-btn")

    }
}

function hideMenu()
{
    overlay.classList.add("hide-btn")
    menu.classList.add("hide-btn")
}


