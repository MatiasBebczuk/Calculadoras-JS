function calcular() {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    const operacion = document.getElementById('operacion').value;
    let resultado;

    switch (operacion) {
        case '+':
            resultado = Number(num1) + Number(num2);
            break;
        case '-':
            resultado = Number(num1) - Number(num2);
            break;
        case '*':
            resultado = Number(num1) * Number(num2);
            break;
        case '/':
            resultado = num2 !== '0' ? Number(num1) / Number(num2) : 'Error: División por cero';
            break;
        default:
            resultado = 'Operación no válida';
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function resetear() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').innerText = '';
}
