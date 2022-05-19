const button = document.querySelector('.button-mode');
const imgMode = document.getElementById('img-mode');
const body = document.querySelector('.body');

button.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if(document.body.classList.contains('dark')) {
    imgMode.src = './img/moon.png';
  } else {
    imgMode.src = './img/sun.png';
  }
})