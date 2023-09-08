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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResume = void 0;
const axios_1 = require("../axios");
let resume = [];
const getResume = () => __awaiter(void 0, void 0, void 0, function* () {
    if (resume.length) {
        return resume;
    }
    const res = yield axios_1.localAxios.get('/resume');
    resume = res.data.resumes;
    return resume;
});
exports.getResume = getResume;
