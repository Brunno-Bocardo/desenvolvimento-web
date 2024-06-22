// Crie uma função que reverte uma sentença e utiliza uma função callback para devolver à função
// chamadora um texto específco. O texto deve ser "A INVERSÃO DA SENTENÇA RESULTOU
// EM: "" concatenado com o resultado obtido, tudo em letras maiúsculas. A função chamadora será
// responsável por exibir o resultado no console.


export function reverterString(string:string, callback: (param:any)=> void) {
    const op = string.split("").reverse().join("")
    const newText = callback(op)
    console.log(newText)
}

export function exibe(string:string) {
    return `A INVERSÃO DA SENTENÇA RESULTOU EM:  ${string.toUpperCase()}`;
}