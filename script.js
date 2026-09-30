// Small interactions for the portfolio
const nav = document.querySelector('.nav-wrap');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.boxShadow = y > 20 ? '0 8px 30px rgba(23,60,50,.06)' : 'none';
  lastY = y;
});

const revealItems = document.querySelectorAll('.edu-card, .timeline-item, .tax-card, .skill-panel, .achievement, .project-feature');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

revealItems.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
