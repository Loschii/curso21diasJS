let nome = prompt('Digite seu nome:');
let idade = Number(prompt('Digite sua idade:'));
let peso = parseInt(prompt('Digite seu peso:'));
let altura = Number(prompt('Digite sua altura em metros (ex.: 1.71)'));
let profissao = prompt('Digite sua profissão');

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`);

if(idade >= 18){
    console.log('Está liberado para tomar umas geladas.')
} else{
    console.log('Sem gelada pra você.')
}

let meses = idade * 12;
let dias = idade * 365;
let semanas = idade * 52;

console.log('Sua idade em meses é: ' + meses);
console.log('Sua idade em semanas é: ' + semanas);
console.log('Sua idade em dias é: ' + dias);

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log('Magreza');
} else if(imc >= 18.5 && imc <= 24.9){
    console.log('Normal');
} else if(imc > 24.9 && imc <= 30){
    console.log('Sobrepeso');
} else{
    console.log('Obesidade');
}

let anoAtual = 2023
let anoNasc = anoAtual - idade;
console.log('Você nasceu no ano de ' + anoNasc);

let idadeAtual = 0

for(let i = anoNasc; i <= anoAtual; i++){
    console.log(i + ' - ' + idadeAtual + ' anos de idade')
    idadeAtual++
}

do {
    let continuar = prompt('Deseja inserir os dados novamente? (s/n)')
}while(continuar == "s")
let confirmar = "n"
while(confirmar != "s"){
    let nome = prompt('Digite seu nome')
    let idade = parseInt(prompt('Digite sua idade'))
    let salarioAtual = parseFloat(prompt('Digite seu salario atual'))
    console.log('nome: ' + nome + ', idade: ' + idade + ', salário atual: ' + salarioAtual)
    confirmar = prompt('As informações estão corretas? (s/n)')
}

let aumento = 0.015;
console.log('Previsão salarial para os proximos 10 anos: ')

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2023 + ano) + ' = R$' + salarioAtual)
}