let operacao;
let tipo;

function soma() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    tipo = "adição";
    operacao = n1 + n2;
    result(n1, n2);
}

function subtrair() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    tipo = "subtração";
    operacao = n1 - n2;
    result(n1, n2);
}

function multiplicar() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    tipo = "multiplicação";
    operacao = n1 * n2;
    result(n1, n2);
}

function dividir() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    tipo = "divisão";
    if (n2 !== 0) {
        operacao = n1 / n2;
    } else {
        operacao = "Erro: Divisão por zero";
        tipo = "erro";
    }
    result(n1, n2);
}

function result(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('result').innerHTML = "Erro: Por favor, preencha os campos.";
    } else if (tipo === "adição") {
        document.getElementById('result').innerHTML = "Resultado da soma é: " + operacao;
    } else if (tipo === "subtração") {
        document.getElementById('result').innerHTML = "Resultado da subtração é: " + operacao;
    } else if (tipo === "multiplicação") {
        document.getElementById('result').innerHTML = "Resultado da multiplicação é: " + operacao;
    } else if (tipo === "divisão" || tipo === "erro") {
        document.getElementById('result').innerHTML = "Resultado da divisão é: " + operacao;
    } else {
        document.getElementById('result').innerHTML = "Erro: Operação inválida.";
    }
}

function limparCampos() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('result').innerHTML = '';
}
