#!/usr/bin/env node

import chalk from 'chalk';
import { commandDetails, commandHistory, commands } from './utility/commands';
import { input, rl } from './utility/input';

console.clear();

const runCommand = async (
    command: keyof typeof commandDetails,
    args?: string[],
) => {
    const commandDetail = commandDetails[command];

    if (!commandDetail.action) {
        return;
    }

    await commandDetail.action(args);
};

const handler =
    '┌ ' +
    chalk.greenBright('@Visitor') +
    ' ➜  ' +
    chalk.blueBright('me.toinfinite.dev (') +
    chalk.redBright('master') +
    chalk.blueBright(')') +
    '\n' +
    '└ $ ';

runCommand('welcome');

const processCommand = async (commandLine: string): Promise<void> => {
    const commandParts = commandLine?.match(/\b\w+\b/g);
    const commandName = commandParts?.[0];
    const commandArgs = commandParts?.slice(1);

    if (commandName === undefined || commandName?.trim() === '') {
        return await askQuestion();
    } else if (commandName === 'exit') {
        console.log(chalk.redBright('\nHasta la vista.\n'));
        return rl.close();
    }

    if (!commandDetails[commandName as keyof typeof commandDetails]) {
        console.log(
            chalk.redBright(
                `\nCommand ${chalk.whiteBright(
                    commandName,
                )} not found. Try ${chalk.whiteBright('help')}.\n`,
            ),
        );
        return await askQuestion();
    }

    await runCommand(commandName as keyof typeof commandDetails, commandArgs);

    // save command history
    commandHistory.push(commandLine);
    if (commandHistory.length > 50) {
        commandHistory.shift();
    }

    console.log();
    askQuestion();
};

const askQuestion = () => {
    input(handler, (answer) => {
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
            ...commands.filter((command) => command.startsWith(rl.line.trim())),
        ].join('  ');

        console.log(suggestions + '\n');

        process.stdout.write(handler);
        rl.write(rl.line.trim());
        // return askQuestion();
    }
});

askQuestion();
