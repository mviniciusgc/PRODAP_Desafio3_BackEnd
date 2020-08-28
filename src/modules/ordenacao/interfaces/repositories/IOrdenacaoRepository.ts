
interface IOrdenacaoRepository {
    salvarNumerosOrdenados(data: Array<number>): Promise<Array<number>>;

}

export { IOrdenacaoRepository };