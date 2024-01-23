import Postagem from "./Postagem";

export default interface Tema {
    id: Number;
    descricao: string;
    portagem?: Postagem | null;
}