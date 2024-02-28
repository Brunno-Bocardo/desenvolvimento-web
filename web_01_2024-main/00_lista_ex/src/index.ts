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
console.log(mediaArray(1,1,1))
