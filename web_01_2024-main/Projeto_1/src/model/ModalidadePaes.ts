export class ModalidadePaes {
    private static nextId: number = 1;
    // Isso é uma variável estática 
    // O que significa que ela é compartilhada entre todas as instâncias da classe 
    // Sendo assim, a cada nova instância, ela aumenta seu valor em 1
    id:number;
    name:string;
    vegan:boolean;

    constructor(name:string, vegan:boolean) {
        this.id = ModalidadePaes.nextId++;
        this.name = name;
        this.vegan =vegan;
    }
}