let hora=14
if (hora>=12)  {console.log("buen dia");}
else if(hora>=20){console.log("bunas tardes");}
else {console.log("bunas tardes");}


const botones = document.querySelectorAll(".boton_acc")
function inforcion(event) {
    const boton = event.target;
    const infoExtra = boton.previousElementSibling;
    infoExtra.classList.toggle('ocultar')

    if (infoExtra.classList.contains('ocultar')){
        boton.textContent='[VER MAS]'}
    else {
        boton.textContent='[VER MENOS]'
    }  
}
botones.forEach(function(boton) {
    boton.addEventListener('click',inforcion)
});

    