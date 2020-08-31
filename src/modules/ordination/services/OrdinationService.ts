import { injectable, inject } from "tsyringe";
import { IOrdinationRepository } from "../interfaces/repositories/IOrdinationRepository";
import { AppError } from "@shared/error/appError";

@injectable()
class OrdinationService {

    constructor(
        @inject('OrdinationRepository')
        private ordinationRepository: IOrdinationRepository,
    ) { }

    public async execute(data: Array<number>): Promise<Array<number>> {

        
        const containsNegatives = await this.negativeNumbers(data);

        if (containsNegatives) {
            throw new AppError("cannot contain negative numbers")
        }

        const pairNumbers = await this.getIncreasingOrderedPairs(data);
        const oddNumbers = await this.geOddSortedDescending(data);
        const orderingNumbers = pairNumbers.concat(oddNumbers);
        const numbers = await this.ordinationRepository.saveOrderedNumbers(orderingNumbers);

        return numbers;
    }

    private async negativeNumbers(data: number[]): Promise<boolean> {
        const negative = data.some(element => Math.sign(element) != 1);
        return negative;
    }


    private async getIncreasingOrderedPairs(data: number[]): Promise<number[]> {

        let newArrayNumber: Array<number>;
        newArrayNumber = [];

        const negative = data.forEach(function (numero) {
            if (numero % 2 == 0) {
                newArrayNumber.push(numero)
            }
        })

        return newArrayNumber.sort(this.compararNumeros);
    }


    private async geOddSortedDescending(data: number[]): Promise<number[]> {

        let newArrayNumber: Array<number>;
        newArrayNumber = [];

        const negative = data.forEach(function (numero) {
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

export { OrdinationService };