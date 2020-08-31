import { IOrdinationRepository } from "@modules/ordination/interfaces/repositories/IOrdinationRepository";

class OrdinationRepository implements IOrdinationRepository {

    private OrderedNumbers: Array<number>;

    constructor() {
        this.OrderedNumbers = [];
    }

    public async saveOrderedNumbers(data: Array<number>): Promise<Array<number>> {

        this.OrderedNumbers = data;

        return data;
    }
}


export { OrdinationRepository };