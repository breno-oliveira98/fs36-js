    //para declarar uma variavel usar: var, const ou let
    //var e let são variaveis que podem ser alteradas
    //const é uma variavel que não pode ser alterada

    // 1 - criando a variavel e atribuindo o valor
    // let nome = 'joao';

    /* 
    ** Declarção de Variaveis **
    1 - não pode ser palavra reservada
    2 - não pode começar com número
    3 - não pode conter espaços ou traços
    4 - não pode conter caracteres especiais
    5 - pode começar com letra, underline ou $
    6 - não pode ser palavra reservada
    7 - não pode ser nome de função
    8 - não pode iniciar com operador aritmetico: +,-,/,*
    9 - não pode iniciar com operador de comparação: >,<,==,!=,>=,<=
    10 - não pode ser uma variavel ja declarada

    */

    // CamelCase: inicia a 1ª palavra em minúsculo e o restante das palavras inicia em maiúsculo
let sobreNome2 = 'Ferreira'

    // Alterando o valor
let nome = 'joao';
nome = 'alterei o valor'


let idade = 26

console.log(typeof idade)
console.log(nome)
console.log(sobreNome2)




// 2 - Criando uma constante (algo que nao muda)

const alturaEverest = 8820;
// Atribuindo o valor da variavel
alturaEverest = 12500;
// imprimindo o valor da variavel
console.log(alturaEverest);
