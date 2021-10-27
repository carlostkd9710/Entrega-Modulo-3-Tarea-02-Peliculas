let nombre, apellido, telefono, direccion, observaciones;

let btnRegistrar = document.getElementById('btnRegistrar');
let form = document.getElementById('form');

btnRegistrar.addEventListener('click',capData)

form.addEventListener('submit',subForm)
function subForm(event){
    event.preventDefault()
    alert('Usted se ha registrado con éxito')
}

function capData(){
    nombre = document.getElementById('inpNombre').value;
    apellido = document.getElementById('inpApellido').value;
    telefono= document.getElementById('inpTelefono').value;
    direccion= document.getElementById('inpDireccion').value;
    obs= document.getElementById('inpTxtarea').value;

    guardaLocalStorage(nombre,apellido,
        telefono,direccion,obs)

        console.log(nombre,apellido,
            telefono,direccion,obs);
}

function guardaLocalStorage(){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Telefono',telefono)
    localStorage.setItem('Dirección',direccion)
    localStorage.setItem('Observaciones',observaciones)
}