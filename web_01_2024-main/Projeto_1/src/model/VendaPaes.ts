export class VendaPaes {
    cpf:string;
    totalPrice:number;
    idModalidade:number;
    amount:number;
    price:number;

    constructor(cpf:string, idModalidade:number, amount:number, price:number) {
        this.cpf = cpf;
        this.idModalidade = idModalidade;
        this.amount = amount;
        this.price = price;
        this.totalPrice = this.calculateTotalPrice();
    }

    private calculateTotalPrice(): number {
        return this.amount * this.price;
    }
}