class Carro {
    nome
    potencia 
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo 
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }

    definirVencedor() {
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        this.Vencedor = vencedor
    }

    ExibirVencedor() {
        alert('O vencedor é: ' + this.Vencedor.nome)
    }
}

let corrida = new Corrida('Monza tubarão', 'Formula 1', 60000)

corrida.Participantes[0] = new Carro('uno da vivo', 120, 160, 10)
corrida.Participantes[1] = new Carro('gol bola 97', 300, 220, 3)
corrida.Participantes[2] = new Carro('marea', 210, 220, 9)

corrida.definirVencedor()
corrida.ExibirVencedor()