import { Router } from 'express';
import { ordenacaoRouter } from '@modules/ordenacao/infra/http/routes/Ordenacao.route';


const routes = Router();

routes.use('/ordenar', ordenacaoRouter);

export { routes };