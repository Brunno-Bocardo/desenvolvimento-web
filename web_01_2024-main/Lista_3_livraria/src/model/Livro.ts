export class Livro {
    private static nextId: number = 1;
    id:number
    title:string

    constructor(title:string) {
        this.id = Livro.nextId++
        this.title = title
    }
}