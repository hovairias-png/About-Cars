// Select the slides container
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const slideInterval = 3000; // 3 seconds per slide

function showNextSlide() {
  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove("active"));

  // Show current slide
  slides[currentIndex].classList.add("active");

  // Move to next slide
  currentIndex = (currentIndex + 1) % slides.length;

  
}

// Start auto-sliding
setInterval(showNextSlide, slideInterval);

// Add hover pause effect
slidesContainer.addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});

slidesContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(showNextSlide, slideInterval);
});

// Initial slide
let autoSlide = setInterval(showNextSlide, slideInterval);
showNextSlide();

