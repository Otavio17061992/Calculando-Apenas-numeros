function id(valor_campo) {
    return document.getElementById (valor_campo);
}

function getValor(valor_campo) {

    let valor = document.getElementById(valor_campo).value;
    return parseFloat(valor) * 100;
}



function soma() {
    let total = getValor('numero1') + getValor('numero2')
    id('resultado').value = total/100;
}

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();


});

function Validar() {
    let numero1 = document.getElementById('numero1')
    let numero2 = document.getElementById('numero2')
    if (numero1.value == "") {
        alert('Primeiro número não informado');

        numero1.focus();
    }

    if (numero2.value == "") {
        alert('Segundo número não informado');

        numero1.focus();
    }

}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }
