'use strict';

const botonEnviar = document.querySelector('#btn-enviar');
const inputNombre = document.querySelector('#nombre');
const inputTelefono = document.querySelector('#telefono');
const inputServicio =document.querySelector('#servicio');
const inputContacto = document.querySelector('#contacto');
const inputMensaje = document.querySelector('#mensaje');


let validar_datos = () => {
    let error = false;
    if(!String(inputNombre.value)){
        document.querySelector('#nombre').classList.add('error');
        Swal.fire({
            title: 'Existen campos vacíos',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
    }else{
        document.querySelector('#nombre').classList.remove('error');
    }
    
    if(!Number(inputTelefono.value)){
        document.querySelector('#telefono').classList.add('error');
        Swal.fire({
            title: 'Existen campos vacíos',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#telefono').classList.remove('error');
    }

    if (!inputServicio.value) {
        document.querySelector('#servicio').classList.add('error');
        Swal.fire({
            title: 'Existen campos vacíos',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#servicio').classList.remove('error');
    }
    
    if (!inputContacto.value) {
        document.querySelector('#contacto').classList.add('error');
        Swal.fire({
            title: 'Existen campos vacíos',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#contacto').classList.remove('error');
    }
    if(!inputMensaje.value){
        document.querySelector('#mensaje').classList.add('error');
        Swal.fire({
            title: 'Existen campos vacíos',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
    }else{
        document.querySelector('#mensaje').classList.remove('error');
    }
    if(!error){
        Swal.fire(
            '¡Su mensaje se envió con exito!',
            'Pronto le responderemos',
            'success'
          )
        inputNombre.value = '';
        inputTelefono.value = '';
        inputServicio.value = '';
        inputContacto.value = '';
        inputMensaje.value = '';
    }
};

botonEnviar.addEventListener('click', validar_datos)