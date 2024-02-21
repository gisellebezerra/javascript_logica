<h1>Exercícios lógica de programação: JavaScript</h1>

<h2>4ª Parte</h2>

1ª - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

```javascript
console.log('Seja bem-vindo(a)!');
}
```
2ª - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

```javascript
var nome = 'Beatriz';
console.log(`Olá, ${nome}!`);
```

3ª - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

```javascript
var nome = 'Giselle';
alert(`Olá, ${nome}!`);
```

4ª - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

```javascript
let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);
```

5ª - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

```javascript
var valor1 = 5;
var valor2 = 10;
var resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);
```

6ª - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

```javascript
var valor1 = 20;
var valor2 = 10;
var resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
```

7ª - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

```javascript
var idade = prompt('Digite sua idade');

if (idade >= 18){
    console.log(`Você possui ${idade}, portanto é maior de idade`);
} else{
    console.log(`Você possui ${idade}, portanto é menor de idade`);
}
```

8ª - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

```javascript
let numero = prompt('Digite um número');

if (numero > 0) {
    alert(`O número ${numero} é positivo`);
}

else if(numero == 0) {
    alert(`O número é zero`);
}
else{
    alert(`O número ${numero} é negativo`);
}
```

9ª - Use um loop while para imprimir os números de 1 a 10 no console.

```javascript
let numeros = 1;
while (numeros <= 10) {
    console.log(numeros);
    numeros++;
}
```

10ª - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

```javascript
let nota = 6;

 if(nota >= 7){
    console.log('Parabéns, você foi aprovado!');
 } else{
    console.log('Você foi reprovado!');
 }
```

11ª - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

```javascript
var numeroAleatorio = Math.random();
 console.log(numeroAleatorio);
```
12ª - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

```javascript
var numeroAleatorio = parseInt(Math.random() * 10 + 1);
 console.log(numeroAleatorio);

```
13ª - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

```javascript
var numeroAleatorio = parseInt(Math.random() * 1000 + 1);
 console.log(numeroAleatorio);
```
