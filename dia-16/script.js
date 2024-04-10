let nomes = [];
let senhas = [];

function solicitarOpcao(){
    let opcao = prompt('Escolha uma opção:\n1. Cadastrar\n2. Fazer login ' + '\n3. Excluir cadastro\n4. Encerrar programa');
    return opcao;
}

function cadastrarUsuario(){
    nomes.push(prompt('Digite o seu nome:'))
    senhas.push(prompt('Digite sua senha:'))
}

function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        return true;
    } else {
        return false;
    }
}

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log('Cadastro excluído com sucesso!');
    } else {
        console.log('Usuário não encontrado.');
    }
}

let continuar = true;
while(continuar){
    let opcao = solicitarOpcao();

    switch(opcao){
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            let nome1 = prompt('Digite seu nome')
            let senha = prompt('Digite sua senha')
            let login = fazerLogin(nome1, senha);
            if(login){
                console.log('Login feito com sucesso')
            } else {
                console.log('Nome ou senha incorretos!')
            }
            break;
        case "3":
            let nome = prompt('Digite seu nome')
            excluirCadastro(nome);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}