import { Router } from 'express';
import { undeclaredRoute } from '../entities/account/account.controller';

const undeclaredRouter: Router = Router();

undeclaredRouter.route('/').all(undeclaredRoute);

export default undeclaredRouter;
