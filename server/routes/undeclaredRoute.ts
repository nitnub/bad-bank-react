import express, { Router } from 'express';
import { undeclaredRoute } from '../entities/account/account.controller';

const undeclaredRouter: Router = Router();

undeclaredRouter.route('/').post(undeclaredRoute);

module.exports = undeclaredRouter;
