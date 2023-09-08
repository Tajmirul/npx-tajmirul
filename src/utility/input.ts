import * as readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';
import { commands } from './commands';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('SIGINT', () => {
    console.log(chalk.redBright('\n\nHasta la vista.\n'));
    rl.close();
});

export const input = (question: string, cb?: (answer: string) => void) => {
    rl.question(question, (answer) => {
        cb?.(answer);
    });
};
