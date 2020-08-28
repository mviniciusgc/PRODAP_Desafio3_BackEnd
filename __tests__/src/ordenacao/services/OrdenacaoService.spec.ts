import 'reflect-metadata';
import { OrdenacaoRepository } from '../repositories/OrdenacaoRepository';
import { OrdenacaoService } from '@modules/ordenacao/services/OrdenacaoService';
import { AppError } from '@shared/error/appError';


describe('Ordenar números', () => {
    let fakeOrdenacaoRepository: OrdenacaoRepository;
    let ordenacaoService: OrdenacaoService;

    beforeEach(() => {
        fakeOrdenacaoRepository = new OrdenacaoRepository();
        ordenacaoService = new OrdenacaoService(fakeOrdenacaoRepository);
    })

    it('deve receber números positivos e ordenalos os pares crescentes e impares decrescentes', async () => {

        const numeros = [11, 10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

        const numerosOrdenados = await ordenacaoService.execute(numeros);

        expect(numerosOrdenados).toEqual( expect.arrayContaining([4, 10, 32, 34, 98, 654, 3456, 6789, 567, 543, 87,11]))

    })

    it('deve retornar um erro ao conter número negativo', async () => {
        const numeros = [-11, 10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

        expect(ordenacaoService.execute(numeros)).rejects.toBeInstanceOf(AppError);

    })

});