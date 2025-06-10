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

const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами.');
    feedbackForm.reset();
  });
}
