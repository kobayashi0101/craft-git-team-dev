// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// スクロールでふわっと表示
const fadeItems = document.querySelectorAll('.about-card, .program-card, .access-info, .access-map');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

fadeItems.forEach(function(item) {
  item.classList.add('fade-up');
  observer.observe(item);
});