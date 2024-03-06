"use strict";
class Carro {
    constructor(cor, portas, ganhaDoFusca, ano) {
        this.cor = cor;
        this.portas = portas;
        this.ganhaDoFusca = ganhaDoFusca;
        this.ano = ano;
    }
    get getCor() {
        return this.cor;
    }
    get getPortas() {
        return this.portas;
    }
    get getGanhaDoFusca() {
        return this.ganhaDoFusca;
    }
    get getAno() {
        return this.ano;
    }
    set setCor(cor) {
        this.cor = cor;
    }
    set setPortas(portas) {
        this.portas = portas;
    }
    set setGanhaDoFusca(ganhaDoFusca) {
        this.ganhaDoFusca = ganhaDoFusca;
    }
    set setAno(ano) {
        this.ano = ano;
    }
    idadeCarro(idadeDoCarro) {
        let dataAtual = new Date().getFullYear();
        let result = dataAtual - idadeDoCarro;
    }
}
let dataAtual = new Date();
console.log(dataAtual);
