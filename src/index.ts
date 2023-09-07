import chalk from 'chalk';
import { commandDetails, commandHistory } from './utility/commands';
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

export const handler =
    chalk.hex('#ff9d00').bold('visitor') +
    '@' +
    chalk.hex('#05ce91').bold('me.toinfinite.dev') +
    ':~$ ';

runCommand('welcome');

const askQuestion = async (): Promise<void> => {
    const commandLine = await input(handler);

    const commandParts = commandLine?.match(/\b\w+\b/g);
    const commandName = commandParts?.[0];
    const commandArgs = commandParts?.slice(1);

    if (commandName === 'exit' || commandName === undefined) {
        console.log(chalk.redBright('\nHasta la vista.\n'));

        return rl.close();
    } else if (commandName.trim() === '') {
        console.log(`'${commandName.trim()}'`);
        return askQuestion();
    }

    if (!commandDetails[commandName as keyof typeof commandDetails]) {
        console.log(
            chalk.redBright(
                `\nCommand ${chalk.whiteBright(
                    commandName,
                )} not found. Try ${chalk.whiteBright('help')}.\n`,
            ),
        );
        return askQuestion();
    }

    runCommand(commandName as keyof typeof commandDetails, commandArgs);

    // save command history
    commandHistory.push(commandLine);
    if (commandHistory.length > 50) {
        commandHistory.shift();
    }

    console.log();
    askQuestion();
};

askQuestion();
