document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('testimonial-slider');
  const leftBtn = document.getElementById('testimonial-left');
  const rightBtn = document.getElementById('testimonial-right');
  if (!slider || !leftBtn || !rightBtn) return;

  const card = slider.querySelector('.testimonial-card');
  const gap = 24;
  const cardWidth = card.offsetWidth + gap;
  const visibleCount = Math.floor(slider.offsetWidth / cardWidth);
  const totalCards = slider.children.length;

  let currentIndex = 0;

  function scrollToIndex(index) {
    const maxIndex = totalCards - visibleCount;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  leftBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex - 1);
  });

  rightBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex + 1);
  });

  // Touch swipe
  let startX = null;
  slider.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });
  slider.addEventListener('touchend', function (e) {
    if (startX === null) return;
    const delta = e.changedTouches[0].clientX - startX;
    if (delta > 50) {
      scrollToIndex(currentIndex - 1);
    } else if (delta < -50) {
      scrollToIndex(currentIndex + 1);
    }
    startX = null;
  });

  // Initial scroll
  setTimeout(() => scrollToIndex(0), 100);
});
