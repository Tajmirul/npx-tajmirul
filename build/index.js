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
exports.handler = void 0;
const chalk_1 = __importDefault(require("chalk"));
const commands_1 = require("./utility/commands");
const input_1 = require("./utility/input");
console.clear();
const runCommand = (command, args) => __awaiter(void 0, void 0, void 0, function* () {
    const commandDetail = commands_1.commandDetails[command];
    if (!commandDetail.action) {
        return;
    }
    yield commandDetail.action(args);
});
exports.handler = chalk_1.default.hex('#ff9d00').bold('visitor') +
    '@' +
    chalk_1.default.hex('#05ce91').bold('me.toinfinite.dev') +
    ':~$ ';
// const handler = '|-' + chalk.hex('#ff9d00').bold('visitor') + '\n' + '|-:~$ ';
runCommand('welcome');
const processCommand = (commandLine) => __awaiter(void 0, void 0, void 0, function* () {
    const commandParts = commandLine === null || commandLine === void 0 ? void 0 : commandLine.match(/\b\w+\b/g);
    const commandName = commandParts === null || commandParts === void 0 ? void 0 : commandParts[0];
    const commandArgs = commandParts === null || commandParts === void 0 ? void 0 : commandParts.slice(1);
    if (commandName === undefined || (commandName === null || commandName === void 0 ? void 0 : commandName.trim()) === '') {
        return yield askQuestion();
    }
    else if (commandName === 'exit') {
        console.log(chalk_1.default.redBright('\nHasta la vista.\n'));
        return input_1.rl.close();
    }
    if (!commands_1.commandDetails[commandName]) {
        console.log(chalk_1.default.redBright(`\nCommand ${chalk_1.default.whiteBright(commandName)} not found. Try ${chalk_1.default.whiteBright('help')}.\n`));
        return yield askQuestion();
    }
    yield runCommand(commandName, commandArgs);
    // save command history
    commands_1.commandHistory.push(commandLine);
    if (commands_1.commandHistory.length > 50) {
        commands_1.commandHistory.shift();
    }
    console.log();
    askQuestion();
});
const askQuestion = () => {
    (0, input_1.input)(exports.handler, (answer) => {
        processCommand(answer);
    });
};
// show suggestions
process.stdin.on('keypress', (c, k) => {
    if (k.name === 'tab') {
        // if (k.sequence === '\t') {
        //     return;
        // }
        console.log(`\n\nSuggestions:`);
        const suggestions = [
            ...commands_1.commands.filter((command) => command.startsWith(input_1.rl.line.trim())),
        ].join('  ');
        console.log(suggestions + '\n');
        process.stdout.write(exports.handler);
        input_1.rl.write(input_1.rl.line.trim());
        // return askQuestion();
    }
});
askQuestion();
