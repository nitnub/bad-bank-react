"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const bankRoute_1 = __importDefault(require("./routes/bankRoute"));
const undeclaredRoute_1 = __importDefault(require("./routes/undeclaredRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4001;
const mongoose_1 = require("mongoose");
(0, mongoose_1.connect)(process.env.DB_CONN_STRING);
app.use('/api', bankRoute_1.default);
app.use('*', undeclaredRoute_1.default);
// app.get('/api/all-data', );
app.listen(PORT, () => {
    console.log(`[server] Listening at`, chalk_1.default.yellow `http://localhost:${PORT}`);
});
