import { Request, Response } from "express";
import { OrdinationService } from '@modules/ordination/services/OrdinationService';
import { container } from "tsyringe";

class OrdinationController {

    public async order(request: Request, response: Response): Promise<Response> {

        const { numbers } = request.body;

        const ordinationService = container.resolve(OrdinationService);

        const result = await ordinationService.execute(numbers);

        return response.json(result);

    }

}

export { OrdinationController };