class Carro {
    private cor:string
    private portas:number
    private ganhaDoFusca:boolean
    private ano:number

    constructor (cor:string, portas:number, ganhaDoFusca:boolean, ano:number) {
        this.cor = cor
        this.portas = portas
        this.ganhaDoFusca = ganhaDoFusca
        this.ano = ano
    }

    get getCor() {
        return this.cor
    }

    get getPortas() {
        return this.portas
    }

    get getGanhaDoFusca() {
        return this.ganhaDoFusca
    }

    get getAno() {
        return this.ano
    }

    set setCor(cor:string) {
        this.cor = cor
    }

    set setPortas(portas:number) {
        this.portas = portas
    }

    set setGanhaDoFusca(ganhaDoFusca:boolean) {
        this.ganhaDoFusca = ganhaDoFusca
    }

    set setAno(ano:number) {
        this.ano = ano
    }

    idadeCarro(idadeDoCarro:number) {
        let dataAtual = new Date().getFullYear()
        let result = dataAtual - idadeDoCarro
    }
}


let dataAtual = new Date()
console.log(dataAtual)