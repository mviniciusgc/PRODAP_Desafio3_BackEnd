import { container } from 'tsyringe';

import { IOrdinationRepository } from '@modules/ordination/interfaces/repositories/IOrdinationRepository';
import { OrdinationRepository } from '@modules/ordination/infra/repositories/OrdinationRepository';

container.registerSingleton<IOrdinationRepository>('OrdinationRepository', OrdinationRepository);