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
// console.log(mediaArray(1,1,1))
// FUNÇÃO 4
function convertToUpper(text) {
    let new_text = text.toUpperCase();
    return new_text;
}
// console.log(convertToUpper("ola mundo"))
// console.log(convertToUpper("meu precioso"))
// FUNÇÃO 5
function primoOrNot(val) {
    let i;
    if (val == 2 || 1) {
        return true;
    }
    else {
        for (i = 2; i < (val); i++) {
            if (val % i == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}
// console.log(primoOrNot(1))
// FUNÇÃO 6
function inverterArray(...array) {
    let tamanho = array.length;
    let new_array = [];
    let i;
    for (i = 0; i < tamanho; i++) {
        let aux = array.pop();
        new_array.push(aux);
    }
    return new_array;
}
// console.log(inverterArray(1,2,3,4,97))
// FUNÇÃO 7
function porcentagem(valor, porcentagem) {
    return valor * ((porcentagem / 100) + 1);
}
// console.log(porcentagem(2500, 10))
// FUNÇÃO 8
function reverterFrase(frase) {
    let fraseArray = frase.split(" ");
    return fraseArray.length;
}
// console.log(reverterFrase("ola pessoas")) 
let string = 'oi pessoal';
let palavra = string.split(" ");
console.log(palavra);
