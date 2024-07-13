"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(id, title) {
        this.id = id || 0;
        this.title = title;
    }
}
exports.Livro = Livro;
Livro.nextId = 1;
