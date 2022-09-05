const menu = document.querySelector('#menu');
const btn = document.querySelector('#boton')

btn.addEventListener('click', desplegarMenu)

function desplegarMenu(){
    menu.classList.toggle('hidden')
}