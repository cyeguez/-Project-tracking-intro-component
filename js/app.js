const botonMenu = document.querySelector('.header__icon-menu');
const botonCerrar = document.querySelector('.header__icon-close');
const nav = document.querySelector('.nav');

botonMenu.addEventListener('click',() => {
  botonCerrar.style.display = 'inline-block';
  botonMenu.style.display = 'none';
  nav.style.display = 'flex';
  
});
botonCerrar.addEventListener('click',() => {
  botonCerrar.style.display = 'none';
  botonMenu.style.display = 'inline-block';
});