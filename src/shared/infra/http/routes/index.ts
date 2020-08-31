import { Router } from 'express';
import { ordinationRouter } from '@modules/ordination/infra/http/routes/Ordination.route';


const routes = Router();

routes.use('/order', ordinationRouter);

export { routes };