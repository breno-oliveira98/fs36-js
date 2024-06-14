const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value

function calcular(e) {
    console.log(e.innerText);
}

function soma() {
    parseFloat(n1.value) + parseFloat(n2.value);

}

function subtrair() {
    parseFloat(n1.value) - parseFloat(n2.value);

}

function multiplicar() {
    parseFloat(n1.value) * parseFloat(n2.value);

}

function dividir() {
    parseFloat(n1.value) / parseFloat(n2.value);
    
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
