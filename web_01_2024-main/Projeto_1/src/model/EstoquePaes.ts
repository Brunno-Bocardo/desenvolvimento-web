export class Estoque {
    private static nextId: number = 1;
    // Isso é uma variável estática 
    // O que significa que ela é compartilhada entre todas as instâncias da classe 
    // Sendo assim, a cada nova instância, ela aumenta seu valor em 1
    id: number;
    amount: number;
    modalidadeID:number;
    price:number;

    constructor(amount: number, modalidadeID:number, price:number) {
        this.id = Estoque.nextId++;
        this.amount = amount;
        this.modalidadeID = modalidadeID;
        this.price = price
    }
}
