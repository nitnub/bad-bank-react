"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bankRoute_1 = __importDefault(require("./routes/bankRoute"));
const undeclaredRoute_1 = __importDefault(require("./routes/undeclaredRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', bankRoute_1.default);
app.use('*', undeclaredRoute_1.default);
// app.get('/api/all-data', );
exports.default = app;
