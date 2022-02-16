var rellax = new Rellax('.rellax');

var open = document.getElementById('open');
var modal_container = document.getElementById('modal_container');
var close = document.getElementById('close');

open.addEventListener('click',()=>{
    modal_container.style.display = 'flex';
})
close.addEventListener('click',()=>{
    modal_container.style.display = 'none';
})


