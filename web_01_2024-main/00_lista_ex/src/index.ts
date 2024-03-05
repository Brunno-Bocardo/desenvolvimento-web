// FUÇÃO 1 
function acharMaiorNumero(...numeros:number[]) {
    let tamanho:number = numeros.length
    let maior:number = 0
    let i:number
    for (i=0; i<=tamanho;i++) {
        if(numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    return maior
}
// console.log(acharMaiorNumero(1,2,3,78,95,7))


// FUNÇÃO 2
function parImpar(valor:number) {
    if (valor % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(parImpar(49))


// FUNÇÃO 3
function mediaArray(...numeros:number[]):number {
    let tamanho:number = numeros.length
    let media = 0
    let i:number = 0
    while(i < tamanho) {
        media = media + numeros[i]
        i++
    }
    return media/tamanho
}
// console.log(mediaArray(1,1,1))


// FUNÇÃO 4
function convertToUpper(text:string) : string {
    let new_text:string = text.toUpperCase()
    return new_text
}
// console.log(convertToUpper("ola mundo"))
// console.log(convertToUpper("meu precioso"))


// FUNÇÃO 5
function primoOrNot(val:number){
    let i:number 

    if (val== 2 || 1) {
        return true
    }
    else {
        for (i=2; i<(val); i++) {
            if (val%i == 0) {
                return false
            }
            else {
                return true
            }
        }
    }
}
// console.log(primoOrNot(1))


// FUNÇÃO 6
function inverterArray(...array:number[]) {
    let tamanho:number = array.length
    let new_array = []
    let i:number

    for (i=0; i<tamanho; i++) {
        let aux = array.pop()
        new_array.push(aux)
    }
    
    return new_array
}
// console.log(inverterArray(1,2,3,4,97))


// FUNÇÃO 7
function porcentagem(valor:number, porcentagem:number) {
    return valor * ((porcentagem/100) + 1)
}
// console.log(porcentagem(2500, 10))


// FUNÇÃO 8
function reverterFrase(frase:string) {
    let fraseArray:string[] = frase.split(" ")
    let newPhrase = []

    for (let i=0; i<=fraseArray.length; i++) {
        let aux = fraseArray.pop()
        newPhrase.push(aux)
    }

    return newPhrase.join(' ')
}
// console.log(reverterFrase("ola pessoas")) 


// FUNÇÃO 9
function somarPares(...array:number[]) {
    let soma:number = 0
    let tamanho:number = array.length

    for (let i=0; i<=tamanho; i++) {
        if (array[i] % 2 == 0) {
            soma += array[i]
        }
    }

    return soma
}
// console.log(somarPares(1,2,3,4,2))


// FUNÇÃO 10
function fatorial(valor:number) : number {
    let resultado:number = 1


    for (let i=valor; i!=0; i--) {
        resultado *= valor
        valor --
    }

    return resultado
}
// console.log(fatorial(5))
// console.log(fatorial(3))
// console.log(fatorial(13))