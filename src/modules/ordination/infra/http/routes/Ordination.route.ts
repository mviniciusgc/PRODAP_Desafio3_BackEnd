import { Router } from 'express';
import { OrdinationController } from '../controllers/OrdinationController';

const ordinationRouter = Router();
const ordinationController = new OrdinationController();

ordinationRouter.post('/', ordinationController.order)

export { ordinationRouter };