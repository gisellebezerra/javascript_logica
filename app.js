let milhas = prompt('Digite a quantidade de milhas que você possui');


if (30000 >= milhas && milhas >= 5000) {
    let passagem = prompt('Digite o valor da passagem para receber o desconto');
    let desconto = passagem - (passagem * 0.10);
    alert(`Seu desconto é de 10% e o valor final da passagem é de R$ ${desconto} reais`);
} 

else if (30000 < milhas) {
    let passagem = prompt('Digite o valor da passagem para receber o desconto');
    let desconto = passagem - (passagem * 0.20);
    alert(`Seu desconto é de 20% e o valor final da passagem é de R$ ${desconto} reais`);
}

else {
    alert(`Sinto muito, você precisa acumular no mínimo 5000 milhas para ganhar desconto na sua passagem!`);
} 



