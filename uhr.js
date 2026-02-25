
const targetDate = new Date(Date.now() + (10 * 60 * 60 * 1000) + (3 * 60 * 1000) + (4 * 1000));


const elHH = document.querySelector('#hh .num');
const elMM = document.querySelector('#mm .num');
const elSS = document.querySelector('#ss .num');

function pad(n){ return n < 10 ? '0' + n : String(n); }

function animateChange(el, newValue){
  if (!el) return;
  if (el.textContent === newValue) return;
  el.style.transition = "opacity .18s ease";
  el.style.opacity = "0.05";
  setTimeout(()=> {
    el.textContent = newValue;
    el.style.opacity = "1";
  }, 180);
}

function update(){
  const now = new Date();
  let diff = Math.max(0, Math.floor((targetDate - now) / 1000)); // seconds
  const hours = Math.floor(diff / 3600);
  diff = diff % 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  animateChange(elHH, pad(hours));
  animateChange(elMM, pad(minutes));
  animateChange(elSS, pad(seconds));
}

// initial
update();
// update each second
setInterval(update, 1000);
