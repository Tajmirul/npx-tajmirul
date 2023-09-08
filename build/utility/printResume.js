"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printResume = void 0;
const chalk_1 = __importDefault(require("chalk"));
const dateFormatter_1 = require("./dateFormatter");
const printResume = (resume) => {
    const duration = `${chalk_1.default.whiteBright((0, dateFormatter_1.dateFormatter)(resume.duration.startedAt))} - ${chalk_1.default.whiteBright(resume.duration.endAt ? (0, dateFormatter_1.dateFormatter)(resume.duration.endAt) : 'Now')}`;
    const text = [
        ``,
        chalk_1.default.greenBright.bold(resume.title),
        chalk_1.default.whiteBright.bold(resume.organization),
        duration,
        resume.description,
    ].join('\n');
    console.log(chalk_1.default.hex('#aaa')(text));
    console.log(chalk_1.default.hex('#aaa')('==========='));
};
exports.printResume = printResume;
