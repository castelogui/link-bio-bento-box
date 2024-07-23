let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? 'block' : 'none';
  });
}

function moveSlide(n) {
  const slides = document.querySelectorAll('.slides img');
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

// Inicializar a galeria
document.addEventListener('DOMContentLoaded', () => {
  showSlides();
});
