// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
