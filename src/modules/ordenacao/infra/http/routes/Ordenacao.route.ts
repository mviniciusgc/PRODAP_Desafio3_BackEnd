import { Router } from 'express';
import { OrdenacaoController } from '../controllers/OrdenacaoController';

const ordenacaoRouter = Router();
const ordenacaoController = new OrdenacaoController();

ordenacaoRouter.post('/', ordenacaoController.ordenar)

export { ordenacaoRouter };