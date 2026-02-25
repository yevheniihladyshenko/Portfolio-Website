
document.addEventListener('DOMContentLoaded', () => {
  const buy = document.getElementById('buy-btn');
  buy.addEventListener('click', (e) => {
    e.preventDefault();
    buy.style.transition = "transform .12s ease";
    buy.style.transform = "translateY(-6px) scale(0.995)";
    setTimeout(() => {
      buy.style.transform = "";
      alert('Кнопка "Купить курс" нажата. Заміни alert на реальну дію.');
    }, 160);
  });
});
