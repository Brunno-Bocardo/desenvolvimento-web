"use strict";
// FUÇÃO 1 
function acharMaiorNumero(...numeros) {
    let tamanho = numeros.length;
    let maior = 0;
    let i;
    for (i = 0; i <= tamanho; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}
// console.log(acharMaiorNumero(1,2,3,78,95,7))
// FUNÇÃO 2
function parImpar(valor) {
    if (valor % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(parImpar(49))
// FUNÇÃO 3
function mediaArray(...numeros) {
    let tamanho = numeros.length;
    let media = 0;
    let i = 0;
    while (i < tamanho) {
        media = media + numeros[i];
        i++;
    }
    return media / tamanho;
}
console.log(mediaArray(1, 1, 1));
