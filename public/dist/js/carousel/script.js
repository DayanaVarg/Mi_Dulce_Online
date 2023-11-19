let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');
const button = document.querySelector('.carrusel-prev'); // Reemplaza con tu selector real de botón

const end = () => {
  isDown = false;
  slider.classList.remove('active');
};

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

const handleClick = () => {
  // Puedes ajustar el valor de scrollLeft según tus necesidades
  slider.scrollLeft += 100; // Ajusta este valor según sea necesario
};

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);

  button.addEventListener('click', handleClick);
})();