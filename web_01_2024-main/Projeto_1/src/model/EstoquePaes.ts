export class Estoque {
    id: number;
    amount: number;

    constructor(modalidadeId: number, amount: number) {
        this.id = modalidadeId
        this.amount = amount;
    }
}
