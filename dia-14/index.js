var nome 
var salario

function perguntarColaborador() {
    nome = prompt('Digite o nome do colaborador:');
    salario = parseFloat(prompt('Digite o salário do colaborador:'));
    calcularAumentoSalario(nome, salario);
}

function calcularAumentoSalario(nome, salario){
    var aumento = 0
    if(salario <= 1500){
        aumento = 0.2; 
    } else if(salario <= 2000){
        aumento = 0.5;
    } else if(salario <= 3000){
        aumento = 0.1;
    } else {
        aumento = 0.05;
    }

    var novoSalario = salario + (salario * aumento)

    console.log('Nome do colaborador: ' + nome);
    console.log('Salário: R$' + salario);
    console.log('Aumento: ' + (aumento * 100) + '%');
    console.log('Salário reajustado: R$' + novoSalario);

    perguntarNovamente();
}

function perguntarNovamente(){
    var resposta = prompt('Deseja calcular novamente? (s/n)');

    if(resposta == 's'){
        perguntarColaborador();
    } else {
        console.log('Programa encerrado.');
    }
}