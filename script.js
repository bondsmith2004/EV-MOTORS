const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
  
    function showItem(index) {
      items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
          item.classList.add('active');
        }
      });
    }
  
    function moveCarousel(direction) {
      currentIndex = (currentIndex + direction + totalItems) % totalItems;
      showItem(currentIndex);
    }
  
    document.querySelector('.prev').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.next').addEventListener('click', () => moveCarousel(1));
  
    showItem(currentIndex);
  
    // Auto-move carousel every 5 seconds
    setInterval(() => moveCarousel(1), 5000);
  
    // Sticky navbar functionality
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 25) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });


  