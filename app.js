const btn1 = document.querySelector('#boton1');
const parrafo1 = document.querySelector('.texto1');
const parrafo2 = document.querySelector('.texto2');


btn1.addEventListener('click', function(){

parrafo1.innerText = 'Hola, Peter';
parrafo2.style.background = 'red';
parrafo2.innerText = 'Hola, Dalek';

});