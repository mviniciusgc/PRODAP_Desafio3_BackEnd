import 'reflect-metadata';
import { OrdinationRepository } from '../repositories/OrdinationRepository';
import { OrdinationService } from '@modules/ordination/services/OrdinationService';
import { AppError } from '@shared/error/appError';


describe('Sort numbers', () => {
    let fakeOrdinationRepository: OrdinationRepository;
    let ordinationService: OrdinationService;

    beforeEach(() => {
        fakeOrdinationRepository = new OrdinationRepository();
        ordinationService = new OrdinationService(fakeOrdinationRepository);
    })

    it('should receive positive numbers and order increasing and decreasing odd pairs', async () => {

        const numbers = [11, 10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

        const orderednumbers = await ordinationService.execute(numbers);

        expect(orderednumbers).toEqual( expect.arrayContaining([4, 10, 32, 34, 98, 654, 3456, 6789, 567, 543, 87,11]))

    })

    it('should return an error when containing negative number', async () => {
        const numbers = [-11, 10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

        expect(ordinationService.execute(numbers)).rejects.toBeInstanceOf(AppError);

    })

});