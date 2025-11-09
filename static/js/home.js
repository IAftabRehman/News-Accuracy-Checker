let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index){
    slides.forEach((slide, i) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize first slide
showSlide(currentSlide);

// Change slide every 4 seconds
setInterval(nextSlide, 4000);
