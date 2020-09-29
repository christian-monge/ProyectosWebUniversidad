'use strict';


const botonReservar = document.querySelector('#btnReservar');
const inputNombre = document.querySelector('#txtNombre');
const inputFechaEntrada = document.querySelector('#fecha-entrada');
const inputFechaSalida = document.querySelector('#fecha-salida');
const inputEmail = document.querySelector('#txtEmail');
const inputTelefono = document.querySelector('#telefono');
const inputMoneda =document.querySelector('#moneda');
const inputTerminos = document.querySelector('#terminos');


let validar_datos = () => {
    let error = false;
    if(!String(inputNombre.value)){
        document.querySelector('#txtNombre').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
    }else{
        document.querySelector('#txtNombre').classList.remove('error-input');
    }
    let today = Date().getDate;
    if (new Date(inputFechaEntrada.value) >= new Date(inputFechaSalida.value) || inputFechaEntrada.value == '') {
        document.querySelector('#fecha-entrada').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#fecha-entrada').classList.remove('error-input');
    }
    if (new Date(inputFechaSalida.value) <= new Date(inputFechaEntrada.value) || inputFechaSalida.value == '') {
        document.querySelector('#fecha-salida').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#fecha-salida').classList.remove('error-input');
    }

    if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inputEmail.value))){
        document.querySelector('#txtEmail').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#txtEmail').classList.remove('error-input');
    }
    if(!Number(inputTelefono.value)){
        document.querySelector('#telefono').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#telefono').classList.remove('error-input');
    }

    if (!inputMoneda.checked) {
        document.querySelector('#moneda').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#moneda').classList.remove('error-input');
    }
    
    if (!inputTerminos.checked) {
        document.querySelector('#terminos').classList.add('error-input');
        Swal.fire({
            title: 'Existen campos vacíos o mal ingresados',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        })
        error=true;
    }else{
        document.querySelector('#terminos').classList.remove('error-input');
    }

    if(!error){
        Swal.fire(
            'Buen trabajo!',
            'Su reservación se realizó con exito!',
            'success'
          )
        inputNombre.value = '';
        inputFechaEntrada.value = '';
        inputFechaSalida.value = '';
        inputEmail.value = '';
        inputTelefono.value = '';
        inputMoneda.checked = '';
        inputTerminos.checked = '';
    }
};

botonReservar.addEventListener('click', validar_datos)