/* //Activamos el módulo de contacto

const closeForm = document.getElementById("closeButton");
closeForm.addEventListener("click", () => {
    document.getElementById("contactoViaMail").style.visibility = "hidden";
});

var submitEmail = document.getElementById("correoElectronico");
submitEmail.addEventListener("click", () => {
    document.getElementById("contactoViaMail").style.visibility = "visible";
});


/* Fechas
de Actualización y última visita*/


/*var currentDate = new Date();
var fullDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
var lastUpdate=document.getElementById("updated-date");
lastUpdate.textContent=fullDate; */