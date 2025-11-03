/* script.js */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#0056b3';
  } else {
    header.style.background = 'linear-gradient(120deg, #007bff, #0056b3)';
  }
});