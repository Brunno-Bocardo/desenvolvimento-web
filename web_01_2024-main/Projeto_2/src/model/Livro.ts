export class Livro {
    private static instance: Livro;

    id: number;
    titulo: string;
    autor: string;
    categoriaID: number;

    private constructor(id?: number, titulo?: string, autor?: string, categoriaID?: number) {
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaID = categoriaID || 0;
        this.validatesInformation(titulo, autor);
    }

    public static getInstance(id?: number, titulo?: string, autor?: string, categoriaID?: number): Livro {
        if (!Livro.instance) {
            Livro.instance = new Livro(id, titulo, autor, categoriaID);
        } else {
            // Atualiza a instância existente com novos valores, se necessário
            Livro.instance.id = id || Livro.instance.id;
            Livro.instance.titulo = titulo || Livro.instance.titulo;
            Livro.instance.autor = autor || Livro.instance.autor;
            Livro.instance.categoriaID = categoriaID || Livro.instance.categoriaID;
        }
        return Livro.instance;
    }

    private validatesInformation(titulo: any, autor: any) {
        let error = '';

        if (typeof titulo !== 'string' || typeof autor !== 'string') {
            error += "Informações incompletas ou incorretas.";
        }

        if (error != '') {
            throw new Error(error);
        }
    }
}
