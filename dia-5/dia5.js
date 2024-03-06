// SWITCH CASE

// exercicio 1

// let num1 = parseInt(prompt('Digite o primeiro valor'));
// let num2 = parseInt(prompt('Digite o segundo valor'));
// let opcao = parseInt(prompt('Escolha a operação que deseja realizar:'  
// + "\n1 = + \n2 = - \n3 = * \n4 = /"))

// switch(opcao){
//     case 1: 
//         console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
//         break;
//     case 2:
//         console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
//         break;
//     case 3:
//         console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2))
//         break;    
//     case 4:
//         console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2))
//         break;         
// }

// exercicio 2
let valor 
let quantidade
let abastecer = parseInt(prompt('Bem vindo, você deseja: ' + 
'\n1- Abastecer com gasolina \n2- Abastecer com álcool \n3- Calibrar os pneus '))

switch(abastecer){
    case 1:
        valor = parseInt(prompt('Qual valor deseja abastecer: '))
        quantidade = valor /5
        console.log('Foram abastecidos ' + quantidade + 'L de gasolina')
        break;
    case 2:
        valor = parseInt(prompt('Qual valor deseja abastecer: '))
        quantidade = valor /3
        console.log('Foram abastecidos ' + quantidade + 'L de álcool')
        break;
    case 3:
        console.log('Pneus calibrados com sucesso')
        break;        
}