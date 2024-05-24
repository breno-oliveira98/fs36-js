/* 
    Objetivo: Calcular a média de 2 números

    1 - Pegar os 2 números
    2 - Somar os 2 números
    3 - Dividir a soma dos números pela quantidade de números
    4 - Mostrar o resultado
*/
let numero1 = 1627;
let numero2 = 2948;


function soma() {
    let resultado = numero1 + numero2;
    return resultado; 
}


function media() {
    let resultado = soma() / 2;
    return resultado;
}

console.log(media());