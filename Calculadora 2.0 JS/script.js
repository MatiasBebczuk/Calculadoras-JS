let valorPantalla = "";
let primerOperando = null;
let segundoOperando = null;
let operacionActual = null;
let memoria = null;


function actualizarPantalla(valor) {
    document.getElementById("pantalla").innerText = valor || "0";
}

function agregarNumero(numero) {
    valorPantalla += numero;
    actualizarPantalla(valorPantalla);
}

// Elegir la operación
function elegirOperacion(operacion) {
    if (valorPantalla !== "") {
        primerOperando = valorPantalla;
        operacionActual = operacion;
        valorPantalla = ""; // Se pone en blanco pantalla al ejec el 2do num
    }
}

// Calcular
function calcular() {
    if (operacionActual !== null && valorPantalla !== "") {
        segundoOperando = valorPantalla;
        let resultado;

        switch (operacionActual) {
            case '+':
                resultado = Number(primerOperando) + Number(segundoOperando);
                break;
            case '-':
                resultado = Number(primerOperando) - Number(segundoOperando);
                break;
            case '*':
                resultado = Number(primerOperando) * Number(segundoOperando);
                break;
            case '/':
                resultado = Number(primerOperando) / Number(segundoOperando);
                break;
        }

        valorPantalla = resultado.toString();
        actualizarPantalla(valorPantalla);
        reiniciarCalculadora();
    }
}

// Reiniciar 
function reiniciarCalculadora() {
    primerOperando = null;
    segundoOperando = null;
    operacionActual = null;
}

// Guardar memoria
function guardarEnMemoria() {
    memoria = valorPantalla;
}

// Usar memoria
function usarMemoria() {
    if (memoria !== null) {
        valorPantalla = memoria;
        actualizarPantalla(valorPantalla);
    }
}

// Borrar ultimo dígito
function borrarUltimo() {
    valorPantalla = valorPantalla.slice(0, -1);
    actualizarPantalla(valorPantalla);
}
