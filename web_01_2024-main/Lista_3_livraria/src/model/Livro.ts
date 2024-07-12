export class Livro {
    private static nextId: number = 1;
    id:number
    title:string

    constructor(id:number, title:string) {
        this.id = id || 0;
        this.title = title
    }
}