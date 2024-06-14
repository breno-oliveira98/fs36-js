function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Você é adulto!");
    } else if (idade <= 12 && idade > 3) {
        console.log("Você é criança!");
    } else if (idade <= 3) {
        console.log("Você é bebê!");
    } else if (idade >=13 && idade <= 17) {
        console.log("Você é adolescente!");
    } else {
        console.log("Você não tem idade válida!");
    }
}
verificarIdade(20);
verificarIdade(16); 
verificarIdade(8);
verificarIdade(2);