document.getElementById('somar').addEventListener('click', function() {

    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);

    if (!isNaN(n1) && !isNaN(n2)) {

        const resultado = n1 + n2;

        document.getElementById('result').textContent = resultado;
    
   } else {    

        document.getElementById('result').textContent = 'Por favor, insira números válidos.';

   }
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('result').textContent = '';
});    