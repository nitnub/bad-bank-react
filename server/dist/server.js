"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const chalk_1 = __importDefault(require("chalk"));
const dbconfig_1 = require("./config/dbconfig");
dotenv_1.default.config();
const PORT = process.env.PORT || 4001;
(0, dbconfig_1.mongoConnect)();
app_1.default.listen(PORT, () => {
    console.log(`[server] Listening at`, chalk_1.default.yellow `http://localhost:${PORT}`);
});
