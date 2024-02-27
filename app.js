alert('Boas vindas ao jogo do número secreto')
let numeroMaximo = 6000;

let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;
let tentativas = 1;


while (chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
        
     }  else {
        alert('Você errou :(');
    
        if (chute > numeroSecreto){
            alert(`O número segreto é menor que o ${chute}`);

        } else  {
            alert(`O número segreto é maior que o ${chute}`);
        }

        //tentativas = tentativas + 1
        tentativas ++;
    }
 
}

// OPERADOR TERNÁRIO

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if (tentativas > 1){

    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
} else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
}
*/

