export class ItemVenda {
    estoquePaesID: number;
    quantidade: number;
    nomeItem: string|undefined

    constructor(estoquePaesID: number, quantidade: number, nomeItem:string|undefined) {
        this.estoquePaesID = estoquePaesID;
        this.quantidade = quantidade;
        this.nomeItem = nomeItem;
    }
}