export class ItemVenda {
    estoquePaesID: number;
    quantidade: number;

    constructor(estoquePaesID: number, quantidade: number) {
        this.estoquePaesID = estoquePaesID;
        this.quantidade = quantidade;
    }
}