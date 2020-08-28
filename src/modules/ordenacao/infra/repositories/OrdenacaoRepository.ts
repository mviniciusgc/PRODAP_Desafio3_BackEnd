import { IOrdenacaoRepository } from "@modules/ordenacao/interfaces/repositories/IOrdenacaoRepository";

class OrdenacaoRepository implements IOrdenacaoRepository {

    private NumerosOrdenado: Array<number>;

    constructor() {
        this.NumerosOrdenado = [];
    }

    public async salvarNumerosOrdenados(data: Array<number>): Promise<Array<number>> {

        this.NumerosOrdenado = data;

        return data;
    }


}

export { OrdenacaoRepository };