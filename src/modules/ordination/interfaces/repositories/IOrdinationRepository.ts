
interface IOrdinationRepository {
    saveOrderedNumbers(data: Array<number>): Promise<Array<number>>;

}

export { IOrdinationRepository };