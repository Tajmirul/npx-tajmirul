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
exports.showProjects = exports.getProjects = void 0;
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = require("../axios");
let projects = [];
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    if (projects.length) {
        return projects;
    }
    const res = yield axios_1.localAxios.get('/projects?all=true');
    projects = res.data.projects;
    return projects;
});
exports.getProjects = getProjects;
//
const showProjects = (projects) => __awaiter(void 0, void 0, void 0, function* () {
    projects.forEach((project) => {
        console.log(chalk_1.default.blueBright.bold(`\n${project.title}`));
        console.log(chalk_1.default.hex('#777')(`https://me.toinfinite.dev/projects/${project.slug}`));
        console.log(chalk_1.default.bold('Technologies: ') + project.technologies.join(', '));
        console.log();
        console.log(chalk_1.default.hex('#aaa')(project.shortDescription));
        console.log(chalk_1.default.hex('#aaa')('==========='));
    });
});
exports.showProjects = showProjects;
