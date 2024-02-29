let nome = prompt('Digite seu nome');
let idade = parseInt(prompt('Digite sua idade'));
let altura = parseFloat(prompt('Digite sua altura'));
let peso = Number(prompt('Digite o seu peso'));
let anoNascimento = 2023 - idade;
let imc = peso / (altura * altura);

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura} de altura, pesa ${peso} kg seu IMC ${imc} é Kg/m2`)



