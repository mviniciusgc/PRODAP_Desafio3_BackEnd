import { injectable, inject } from "tsyringe";
import { IOrdenacaoRepository } from "../interfaces/repositories/IOrdenacaoRepository";
import { AppError } from "@shared/error/appError";

@injectable()
class OrdenacaoService {

    constructor(
        @inject('OrdenacaoRepository')
        private ordenacaoRepository: IOrdenacaoRepository,
    ) { }

    public async execute(data: Array<number>): Promise<Array<number>> {

        
        const contemNegativos = await this.existeNumerosNegativos(data);

        if (contemNegativos) {
            throw new AppError("Não pode conter números negativos")
        }

        const numerosPares = await this.obterParesOrdenadosCrescente(data);
        const numerosImpares = await this.obterImparesOrdenadosDecrescente(data);
        const numerosOrdenados = numerosPares.concat(numerosImpares);
        const numeros = await this.ordenacaoRepository.salvarNumerosOrdenados(numerosOrdenados);

        return numeros;
    }

    private async existeNumerosNegativos(data: number[]): Promise<boolean> {
        const negativo = data.some(element => Math.sign(element) != 1);
        return negativo;
    }


    private async obterParesOrdenadosCrescente(data: number[]): Promise<number[]> {

        let newArrayNumber: Array<number>;
        newArrayNumber = [];

        const negativo = data.forEach(function (numero) {
            if (numero % 2 == 0) {
                newArrayNumber.push(numero)
            }
        })

        return newArrayNumber.sort(this.compararNumeros);
    }


    private async obterImparesOrdenadosDecrescente(data: number[]): Promise<number[]> {

        let newArrayNumber: Array<number>;
        newArrayNumber = [];

        const negativo = data.forEach(function (numero) {
            if (numero % 2 != 0) {
                newArrayNumber.push(numero)
            }
        })

        return newArrayNumber.sort(this.compararNumeros).reverse();
    }

    private compararNumeros(a: number, b: number) {
        return a - b;
    }


}

export { OrdenacaoService };