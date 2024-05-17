## No JavaScript, existem vários tipos de dados fundamentais. Aqui está uma visão geral dos principais tipos de dados, com exemplos e explicações:

### Tipos de Dados Primitivos

1. **Number**
   - Representa números, tanto inteiros quanto de ponto flutuante.
   - Exemplos:
     ```javascript
     let inteiro = 42;
     let decimal = 3.14;
     let negativo = -7;
     let notacaoCientifica = 2.5e6; // 2.5 x 10^6
     ```

2. **String**
   - Representa uma sequência de caracteres, usada para texto.
   - Strings podem ser definidas usando aspas simples (' '), aspas duplas (" ") ou crases (``) para templates literais.
   - Exemplos:
     ```javascript
     let simples = 'Olá, mundo!';
     let duplas = "Olá, mundo!";
     let template = `Olá, ${nome}!`;
     ```

3. **Boolean**
   - Representa um valor verdadeiro (`true`) ou falso (`false`).
   - Exemplos:
     ```javascript
     let verdadeiro = true;
     let falso = false;
     ```

4. **Undefined**
   - Representa um valor que não foi definido.
   - Variáveis declaradas, mas não inicializadas, têm o valor `undefined`.
   - Exemplos:
     ```javascript
     let indefinido;
     console.log(indefinido); // undefined
     ```

5. **Null**
   - Representa a ausência intencional de um valor.
   - É um valor que deve ser atribuído manualmente.
   - Exemplos:
     ```javascript
     let vazio = null;
     ```

6. **Symbol**
   - Representa um valor único e imutável.
   - Útil para criar propriedades únicas em objetos.
   - Exemplos:
     ```javascript
     let simbolo = Symbol('descricao');
     ```

7. **BigInt**
   - Representa números inteiros de precisão arbitrária.
   - Útil para trabalhar com inteiros muito grandes que não podem ser representados pelo tipo `Number`.
   - Exemplos:
     ```javascript
     let grandeNumero = 9007199254740991n;
     ```

### Tipos de Dados Estruturais

1. **Object**
   - Estruturas de dados complexas que podem conter múltiplos valores.
   - Objetos são coleções de pares chave-valor.
   - Exemplos:
     ```javascript
     let pessoa = {
         nome: 'Alice',
         idade: 30,
         saudacao: function() {
             return `Olá, meu nome é ${this.nome}`;
         }
     };
     console.log(pessoa.nome); // Alice
     console.log(pessoa.saudacao()); // Olá, meu nome é Alice
     ```

2. **Array**
   - Um tipo especial de objeto usado para armazenar listas ordenadas de valores.
   - Cada item em um array tem um índice, começando do zero.
   - Exemplos:
     ```javascript
     let lista = [1, 2, 3, 4, 5];
     console.log(lista[0]); // 1
     ```

### Outras Estruturas de Dados e Funções

1. **Function**
   - Em JavaScript, funções são objetos de primeira classe, o que significa que podem ser armazenadas em variáveis, passadas como argumentos para outras funções e retornadas de outras funções.
   - Exemplos:
     ```javascript
     function saudacao(nome) {
         return `Olá, ${nome}`;
     }
     let cumprimentar = saudacao;
     console.log(cumprimentar('Bob')); // Olá, Bob
     ```

2. **Date**
   - Representa um momento específico no tempo.
   - Exemplos:
     ```javascript
     let agora = new Date();
     console.log(agora); // exibe a data e hora atuais
     ```

### Verificando Tipos de Dados

Para verificar o tipo de um valor em JavaScript, você pode usar o operador `typeof`:

```javascript
console.log(typeof 42);            // 'number'
console.log(typeof 'Olá');         // 'string'
console.log(typeof true);          // 'boolean'
console.log(typeof undefined);     // 'undefined'
console.log(typeof null);          // 'object' (isso é uma peculiaridade do JavaScript)
console.log(typeof Symbol('id'));  // 'symbol'
console.log(typeof 9007199254740991n); // 'bigint'
console.log(typeof {});            // 'object'
console.log(typeof []);            // 'object' (arrays são considerados objetos)
console.log(typeof function(){});  // 'function'
```

### Peculiaridades

- **Null como 'object'**: O `typeof null` retorna `'object'`. Isso é um bug histórico no JavaScript.
- **Arrays como 'object'**: Arrays são objetos especiais. Use `Array.isArray(array)` para verificar se uma variável é um array.

### Com essas informações, você deve ter uma boa compreensão dos tipos de dados no JavaScript e como eles são usados.