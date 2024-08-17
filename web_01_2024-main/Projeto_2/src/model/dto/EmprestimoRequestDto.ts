export class EmprestimoRequestDto {
    livroID: number;
    usuarioID: number;

    constructor(livroID: number, usuarioID: number) {
        this.livroID = livroID;
        this.usuarioID = usuarioID;
    }
}
