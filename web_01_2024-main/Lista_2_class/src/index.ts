// EXERCÍCIO 1 
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

    idadeCarro() {
        let dataAtual = new Date().getFullYear()
        let result = dataAtual - this.ano
        return result
    }
}

const carrinho = new Carro("vermelho",3,true,1900)
// console.log(carrinho.idadeCarro())
// console.log(carrinho.getGanhaDoFusca)
// console.log(carrinho.getCor)
// console.log(carrinho.setPortas=2)



// EXERCÍCIO 2 
class Calculadora {
    private val1:number
    private val2:number

    constructor (valor1: number, valor2:number) {
        this.val1 = valor1
        this.val2 = valor2
    }

    soma() {
        return this.val1 + this.val2
    }

    subtracao() {
        return this.val1 - this.val2
    }

    multiplicacao() {
        return this.val1 * this.val2
    }

    divisao() {
        if (this.val2 == 0)
            return "NÃO DIVIDE POR ZERO PÔ  >:("
        else
            return this.val1 / this.val2
    }

    porcentagem() {
        let aux = this.val2/100
        return aux*this.val1
    }

    get getVal1() {
        return this.val1
    }

    get getVal2() {
        return this.val2
    }

    set setVal1(val1:number) {
        this.val1 = val1
    }

    set setVal2(val2:number) {
        this.val2 = val2
    }
}

// const conta = new Calculadora(15, 100)
// console.log(conta.soma())
// console.log(conta.subtracao())
// console.log(conta.multiplicacao())
// console.log(conta.divisao())
// console.log(conta.porcentagem())
// console.log(conta.getVal1)
// console.log(conta.getVal2)
// console.log(conta.setVal2=0)
// console.log(conta.divisao())



// EXERCÍCIO 3
class Produto {
    private nome:string
    private preco:number
    private quantidadeEmEstoque:number

    constructor (nome:string, preco:number, quantidadeEmEstoque:number) {
        this.nome = nome
        this.preco = preco
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

    calcularValorTotalEmEstoque() {
        return this.preco * this.quantidadeEmEstoque
    }

    reporEstoque(quantidade:number) {
        return this.quantidadeEmEstoque += quantidade
    }

    vender(quantidade:number) {
        let quantidadeAtual = this.quantidadeEmEstoque
        if (quantidade > quantidadeAtual)
            console.log("Infelizmente, nosso estoque só tem: ", quantidade, ". Acontece")
        else
            return this.quantidadeEmEstoque -= quantidade
            console.log("Compra feita  :)")
    }

    get getNome() {
        return this.nome
    }

    get getPreco() {
        return this.preco
    }

    get getQuantidadeEmEstoque() {
        return this.quantidadeEmEstoque
    }

    set setNome(nome:string) {
        this.nome = nome
    }

    set setPreco(preco:number) {
        this.preco = preco
    }

    set setQuantidadeEmEstoque(quantidadeEmEstoque:number) {
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }
}

const bananas = new Produto("banana", 10, 200)
console.log("Produto analisado: ", bananas.getNome)
console.log("Seu valor unitário é: ", bananas.getPreco)
console.log("Valor em estoque: ", bananas.calcularValorTotalEmEstoque())
bananas.reporEstoque(300)
console.log("Quantidade em estoque: ", bananas.getQuantidadeEmEstoque)
console.log("Vendido. Novo estoque: ", bananas.vender(150))

bananas.setPreco=12
console.log("\nA inflação veio ao mercadinho")
console.log("Seu valor unitário é: ", bananas.getPreco)
console.log("Valor em estoque: ", bananas.calcularValorTotalEmEstoque())
