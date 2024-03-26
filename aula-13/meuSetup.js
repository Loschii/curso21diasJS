class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
}

let pc = new Computador('desktop', 'i5', 'gtx 1050', '2tb', '16gb', '280gb')
console.log(pc)