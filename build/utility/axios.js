"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localAxios = void 0;
const axios_1 = __importDefault(require("axios"));
exports.localAxios = axios_1.default.create({
    baseURL: 'https://me-back.toinfinite.dev',
});
