"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const chalk_1 = __importDefault(require("chalk"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const PORT = process.env.PORT || 4001;
(0, mongoose_1.connect)(process.env.DB_CONN_STRING).then((con) => {
    const host = con.connection.host;
    const port = con.connection.port;
    const database = con.connection.name;
    const version = con.version;
    console.log(`[mongodb] Connected at http://${host}:${port}/${database} (v${version})`);
});
app_1.default.listen(PORT, () => {
    console.log(`[server] Listening at`, chalk_1.default.yellow `http://localhost:${PORT}`);
});
