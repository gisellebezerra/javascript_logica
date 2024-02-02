<h1>Exercícios lógica de programação: JavaScript</h1>

<h2>3ª Parte</h2>

<p>Utilizando estrutura de repetição WHILE.</p>
 
1º - 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
```javascript
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++
}
```
2ª - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
```javascript
let contador = 10;

while (contador >= 0) {
    console.log(contador);
    //contador = contador - 1
    contador--;
}
```
3ª - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
```javascript
let numero = prompt('Digite um número para começar a contagem regressiva');

while (numero >= 0){
    console.log(numero);
    numero --;
```
4ª - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
```javascript
let numero = prompt('Digite um número para começar a contagem progressiva');
let contador = 0

while (contador <= numero) {
    console.log(contador);
    contador ++;
}
```
