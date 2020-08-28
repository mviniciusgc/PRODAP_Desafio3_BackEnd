import { Request, Response } from "express";
import { OrdenacaoService } from '@modules/ordenacao/services/OrdenacaoService';
import { container } from "tsyringe";

class OrdenacaoController {

    public async ordenar(request: Request, response: Response): Promise<Response> {

        const { numeros } = request.body;

        const ordenacaoService = container.resolve(OrdenacaoService);

        const result = await ordenacaoService.execute(numeros);

        return response.json(result);

    }

}

export { OrdenacaoController };