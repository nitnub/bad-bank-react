"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../entities/account/account.controller");
const undeclaredRouter = (0, express_1.Router)();
undeclaredRouter.route('/').post(account_controller_1.undeclaredRoute);
module.exports = undeclaredRouter;
