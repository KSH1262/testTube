const moreBtn = document.querySelector('.info .data .titleBtn');
const title = document.querySelector('.info .data .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});