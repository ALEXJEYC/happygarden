var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var clave = document.getElementById('clave');
var error = document.getElementById('error');
error.style.color='red';

var form = document.getElementById('formulario');
    form.addEventListener('sbmit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if (nombre.value === null || nombre.value === ''){
            mensajesError.push('Ingresa tu nombre');
        }
        if (apellido.value === null || apellido.value === ''){
            mensajesError.push('Ingresa tu apellido');
        }
        if (clave.value === null || clave.value === ''){
            mensajesError.push('Ingresa tu clave');
        }
        error.innerHTML =  mensajesError.join(', ');

    });