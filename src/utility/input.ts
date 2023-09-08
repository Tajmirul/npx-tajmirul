import * as readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';
import { commands } from './commands';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// process.stdin.on('keypress', (c, k) => {
//     if (k.name === 'tab') {
//         const suggestions = commands.filter((command) =>
//             command.startsWith(k.sequence),
//         );

//         console.log(suggestions.join('\t'));
//     }
// });

rl.on('SIGINT', () => {
    console.log(chalk.redBright('\n\nHasta la vista.\n'));
    rl.close();
});

export const input = (
    question: string,
    cb?: (answer: string) => void,
): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            cb?.(answer);
            resolve(answer);
        });
    });
};
