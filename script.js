
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const darkToggle = document.getElementById('darkToggle');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
