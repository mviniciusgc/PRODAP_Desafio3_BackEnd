import { container } from 'tsyringe';

import { IOrdenacaoRepository } from '@modules/ordenacao/interfaces/repositories/IOrdenacaoRepository';
import { OrdenacaoRepository } from '@modules/ordenacao/infra/repositories/OrdenacaoRepository';

container.registerSingleton<IOrdenacaoRepository>('OrdenacaoRepository', OrdenacaoRepository);