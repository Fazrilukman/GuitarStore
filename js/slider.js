  const slides = document.querySelectorAll('.hero-text-slide');
  const heroImg = document.getElementById('hero-img');
  const images = [
    'img/hl1.png',
    'img/hl2.png',
    'img/hl3.png',
    'img/hl4.png'
  ];  

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });

    // Fade out dulu (opsional)
    heroImg.style.opacity = 0;
    setTimeout(() => {
      heroImg.src = images[index];
      heroImg.style.opacity = 1;
    }, 300);
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);

