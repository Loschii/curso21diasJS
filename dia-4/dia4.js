let fome = prompt('Você esta com fome? (sim/não)');
let dinheiro = prompt('Você tem dinheiro? (sim/não)');
let restaurante = prompt('O restaurante esta aberto? (sim/não)');

if(fome === 'não' || dinheiro === 'não'){
    console.log("Hoje a janta será em casa")
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'não'){
    console.log('Peça um delivery!')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}

let nome = prompt('Digite seu nome');
let idade = Number(prompt('Digite sua idade'));
let cartaDeMotorista = prompt('Você possui carta de motorista? (sim/não)');
let carro = prompt('Você possui algum carro? (sim/não)');

if(idade < 18 || cartaDeMotorista === 'não'){
    console.log(nome + ', você não pode dirigir')
} else if(idade >= 18 && cartaDeMotorista === 'sim' && carro === 'não'){
    console.log(nome + ', você pode dirigir mas não tem carro')
} else if(idade >= 18 && cartaDeMotorista === 'sim' && carro === 'sim'){
    console.log(nome + ', você será o motorista!')
}