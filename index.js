document.querySelectorAll('.toggle-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling; 
    details.classList.toggle('hidden'); 


    if (details.classList.contains('hidden')) {
      button.textContent = 'Подробнее';
    } else {
      button.textContent = 'Скрыть';
    }
  });
});

const texts = [
  "Начни своё приключение с немецким",
  "Учись немецкому быстро и с удовольствием"
];
let i = 0; // індекс фрази
let j = 0; // індекс літери
let currentText = '';
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetween = 1500;

function typeEffect() {
  const target = document.getElementById('typing-text');

  if (!isDeleting && j < texts[i].length) {
    currentText = texts[i].substring(0, j + 1);
    j++;
    target.textContent = currentText;
    setTimeout(typeEffect, typingSpeed);
  }
  else if (isDeleting && j > 0) {
    currentText = texts[i].substring(0, j - 1);
    j--;
    target.textContent = currentText;
    setTimeout(typeEffect, deletingSpeed);
  }
  else if (!isDeleting && j === texts[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, delayBetween);
  }
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);
