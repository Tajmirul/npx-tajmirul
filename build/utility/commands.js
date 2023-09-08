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
exports.commandDetails = exports.commandHistory = exports.commands = void 0;
const chalk_1 = __importDefault(require("chalk"));
const getResume_1 = require("./actions/getResume");
const open_1 = __importDefault(require("open"));
const printResume_1 = require("./printResume");
const showProjects_1 = require("./actions/showProjects");
const showContacts_1 = require("./actions/showContacts");
const variables_1 = require("./variables");
const ora_1 = __importDefault(require("ora"));
exports.commands = [
    'welcome',
    'help',
    'exit',
    'clear',
    'echo',
    'whoami',
    'gui',
    'about',
    'education',
    'experience',
    'skills',
    'projects',
    'contact',
    'email',
    'resume',
];
exports.commandHistory = [];
exports.commandDetails = {
    welcome: {
        description: 'Welcome message',
        usage: 'welcome',
        example: 'welcome',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const name = `
▀█▀ ▄▀█ ░░█ █▀▄▀█ █ █▀█ █░█ █░░   █ █▀ █░░ ▄▀█ █▀▄▀█
░█░ █▀█ █▄█ █░▀░█ █ █▀▄ █▄█ █▄▄   █ ▄█ █▄▄ █▀█ █░▀░█
            `;
            console.log(name);
            const text = [
                `Welcome to my terminal Portfolio! version 1.0.0`,
                `For a list of available commands type ${chalk_1.default.greenBright.bold('help')}`,
                ``,
            ].join('\n');
            console.log(text);
        }),
    },
    help: {
        description: 'List available commands',
        usage: 'help',
        example: 'help',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const longestCommand = exports.commands.reduce((a, b) => a.length > b.length ? a : b);
            const generateSpaces = (command) => {
                return ' '.repeat(longestCommand.length - command.length);
            };
            const commandsWithHelpText = Object.keys(exports.commandDetails)
                .map((commandName) => {
                const commandDetail = exports.commandDetails[commandName];
                return `${chalk_1.default
                    .hex('#05ce91')
                    .bold(commandName)} ${generateSpaces(commandName)} - ${commandDetail.description}`;
            })
                .join('\n');
            const helpText = [
                `Available commands:`,
                commandsWithHelpText,
                ``,
                `Press ${chalk_1.default
                    .hex('#05ce91')
                    .bold('tab')} to autocomplete commands.`,
                `Up/down arrow keys to navigate command history.`,
            ].join('\n');
            console.log(helpText);
        }),
    },
    exit: {
        description: 'Exit the terminal',
        usage: 'exit',
        example: 'exit',
        // no action needed
    },
    clear: {
        description: 'Clear the terminal',
        usage: 'clear',
        example: 'clear',
        action: () => __awaiter(void 0, void 0, void 0, function* () { return console.clear(); }),
    },
    echo: {
        description: 'Print a string to the terminal',
        usage: 'echo [string]',
        example: 'echo hello world',
        action: (args) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`${args === null || args === void 0 ? void 0 : args.join(' ')}`);
        }),
    },
    history: {
        description: 'See command history',
        usage: 'history',
        example: 'history',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(exports.commandHistory.join('\n'));
        }),
    },
    whoami: {
        description: 'Print the current user',
        usage: 'whoami',
        example: 'whoami',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            console.log('Visitor');
        }),
    },
    gui: {
        description: 'Visit my website',
        usage: 'gui',
        example: 'gui',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            (0, open_1.default)(variables_1.FRONTEND);
            console.log(`Visit my website at ${variables_1.FRONTEND}`);
        }),
    },
    about: {
        description: 'Know more about me',
        usage: 'about',
        example: 'about',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const aboutText = [
                ``,
                `I'm ${chalk_1.default.greenBright.bold('Tajmirul Islam')}, a ${chalk_1.default.bold('Front End Developer')} from `,
                `Dhaka, Bangladesh. I love coding, especially when `,
                `I'm part of a team. My focus is on writing fast `,
                `and clean code, making websites work better. I enjoy `,
                `learning and solving problems. Currently, I'm `,
                `working at AnchorBlock Technology, building `,
                `websites with React and Next. Before that, I was `,
                `at Branex IT, where I worked on various projects `,
                `using HTML, CSS, JavaScript, and more. You can `,
                `check out my portfolio to see some of my work. `,
                ``,
                `Let's talk!`,
            ].join('\n');
            console.log(aboutText);
        }),
    },
    education: {
        description: 'My education background',
        usage: 'education',
        example: 'education',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const allResumes = yield (0, getResume_1.getResume)();
            allResumes === null || allResumes === void 0 ? void 0 : allResumes.forEach((item) => {
                if (item.category === 'education') {
                    (0, printResume_1.printResume)(item);
                }
            });
        }),
    },
    experience: {
        description: 'Experience i have gathered so far',
        usage: 'experience',
        example: 'experience',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const resume = yield (0, getResume_1.getResume)();
            resume.forEach((item) => {
                if (item.category === 'work') {
                    (0, printResume_1.printResume)(item);
                }
            });
        }),
    },
    skills: {
        description: 'My skills',
        usage: 'skills',
        example: 'skills',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            console.log('\nMy Skills:');
            console.log(`Languages: HTML, JavaScript, ${chalk_1.default.blueBright.bold('TypeScript')}`);
            console.log(`Frameworks: React, ${chalk_1.default.blueBright.bold('Next')}, Tailwind Css, SASS`);
            console.log(`Others: ${chalk_1.default.blueBright.bold('Node')}, Express, MongoDB`);
            console.log(`Tools: Git, GitHub, Figma`);
        }),
    },
    projects: {
        description: 'View my projects',
        usage: 'projects',
        example: 'projects',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const projects = yield (0, showProjects_1.getProjects)();
            (0, showProjects_1.showProjects)(projects);
        }),
    },
    contact: {
        description: 'Contact Information',
        usage: 'contact',
        example: 'contact',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, showContacts_1.showContacts)();
        }),
    },
    email: {
        description: 'Send me an email',
        usage: 'email',
        example: 'email',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const spinner = (0, ora_1.default)('Opening email client...\n\n').start();
            const generalData = yield (0, showContacts_1.getGeneralData)();
            (0, open_1.default)(`https://mail.google.com/mail/?view=cm&fs=1&to=${generalData.contact.email}&body=Dear+Tajmirul+Islam,`);
            console.log(generalData.contact.email);
            console.log('\nDone, see you soon at inbox.\n');
            spinner.stop();
            spinner.clear();
        }),
    },
    resume: {
        description: 'Want to see my resume?',
        usage: 'resume',
        example: 'resume',
        action: () => __awaiter(void 0, void 0, void 0, function* () {
            const spinner = (0, ora_1.default)('Opening resume ...').start();
            const generalData = yield (0, showContacts_1.getGeneralData)();
            const resume = variables_1.BACKEND + '/' + generalData.resume;
            (0, open_1.default)(resume);
            spinner.stop();
            spinner.clear();
            console.log("\nIf didn't open, CTRL + click here: ");
            console.log(resume);
        }),
    },
};
