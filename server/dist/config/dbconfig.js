"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDisconnect = exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnect = () => {
    const URL = process.env.DB_CONN_STRING;
    mongoose_1.default.connect(URL);
    mongoose_1.default.connection.on('open', () => __awaiter(void 0, void 0, void 0, function* () {
        const host = mongoose_1.default.connection.host;
        const port = mongoose_1.default.connection.port;
        const database = mongoose_1.default.connection.name;
        const version = mongoose_1.default.version;
        console.log(`[mongodb] Connected to http://${host}:${port}/${database} (v${version})`);
    }));
    mongoose_1.default.connection.on('error', (err) => {
        console.log('[mongodb] Unable to connect to database. Error', err);
    });
};
exports.mongoConnect = mongoConnect;
const mongoDisconnect = () => {
    if (!mongoose_1.default.connection)
        return;
    mongoose_1.default.disconnect();
    mongoose_1.default.connection.on('close', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('[mongodb] Disconnected from database');
    }));
};
exports.mongoDisconnect = mongoDisconnect;
