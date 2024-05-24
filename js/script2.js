/* 
    Objetivo: Calcular a média de 2 números

    1 - Pegar os 2 números
    2 - Somar os 2 números
    3 - Dividir a soma dos números pela quantidade de números
    4 - Mostrar o resultado
*/



function soma() {
    let numero1 = 1627
    let numero2 = 2948
    console.log(numero1 + numero2);
    return numero1 + numero2 //o elemento 'return' retorna a função  chamando função
}

soma()


function media() {
    console.log(soma() / 2);
}

media()


function media2numeros(n1, n2) {
    let resultado = soma() /2
    return resultado;
    
}

