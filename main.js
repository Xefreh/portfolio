document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;
  const slideWidth = slides[0].getBoundingClientRect().width;

  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });

  const moveToSlide = (index) => {
    track.style.transform = "translateX(-" + slideWidth * index + "px)";

    document.querySelector(".indicator.active").classList.remove("active");
    indicators[index].classList.add("active");

    currentIndex = index;
  };

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  });

  prevButton.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      moveToSlide(index);
    });
  });
});
