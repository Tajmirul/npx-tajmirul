import chalk from 'chalk';
import { Commands } from '../types/commands';
import { Resume } from '../types/resume';
import art from 'ascii-art';
import { getResume } from './actions/getResume';
import open from 'open';
import { dateFormatter } from './dateFormatter';
import { printResume } from './printResume';

export const commands: Commands[] = [
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

export const commandHistory: string[] = [];

export const commandDetails: {
    [key in Commands]: {
        description: string;
        usage: string;
        example: string;
        action?: (arg?: string[]) => Promise<void>;
    };
} = {
    welcome: {
        description: 'Welcome message',
        usage: 'welcome',
        example: 'welcome',
        action: async () => {
            const name = `
▀█▀ ▄▀█ ░░█ █▀▄▀█ █ █▀█ █░█ █░░   █ █▀ █░░ ▄▀█ █▀▄▀█
░█░ █▀█ █▄█ █░▀░█ █ █▀▄ █▄█ █▄▄   █ ▄█ █▄▄ █▀█ █░▀░█
            `;
            console.log(name);
            const text = [
                `Welcome to my terminal Portfolio! version 1.0.0`,
                `For a list of available commands type ${chalk.greenBright.bold(
                    'help',
                )}`,
                ``,
            ].join('\n');

            console.log(text);
        },
    },
    help: {
        description: 'List available commands',
        usage: 'help',
        example: 'help',
        action: async () => {
            const longestCommand = commands.reduce((a, b) =>
                a.length > b.length ? a : b,
            );

            const generateSpaces = (command: string) => {
                return ' '.repeat(longestCommand.length - command.length);
            };

            const commandsWithHelpText = Object.keys(commandDetails)
                .map((commandName) => {
                    const commandDetail =
                        commandDetails[commandName as Commands];

                    return `${chalk
                        .hex('#05ce91')
                        .bold(commandName)} ${generateSpaces(commandName)} - ${
                        commandDetail.description
                    }`;
                })
                .join('\n');

            const helpText = [
                `Available commands:`,
                commandsWithHelpText,
                ``,
                `Press ${chalk
                    .hex('#05ce91')
                    .bold('tab')} to autocomplete commands.`,
                `Up/down arrow keys to navigate command history.`,
            ].join('\n');

            console.log(helpText);
        },
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
        action: async () => console.clear(),
    },
    echo: {
        description: 'Print a string to the terminal',
        usage: 'echo [string]',
        example: 'echo hello world',
        action: async (args?: string[]) => {
            console.log(`${args?.join(' ')}`);
        },
    },
    history: {
        description: 'See command history',
        usage: 'history',
        example: 'history',
        action: async () => {
            console.log(commandHistory.join('\n'));
        },
    },
    whoami: {
        description: 'Print the current user',
        usage: 'whoami',
        example: 'whoami',
        action: async () => {
            console.log('Visitor');
        },
    },
    gui: {
        description: 'Visit my website',
        usage: 'gui',
        example: 'gui',
        action: async () => {
            open('https://me.toinfinite.dev');
            console.log('Visit my website at https://me.toinfinite.dev');
        },
    },
    about: {
        description: 'Know more about me',
        usage: 'about',
        example: 'about',
        action: async () => {
            const aboutText = [
                ``,
                `I'm ${chalk.greenBright.bold(
                    'Tajmirul Islam',
                )}, a ${chalk.bold('Front End Developer')} from `,
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
                `Let's connect on GitHub or LinkedIn!`,
            ].join('\n');

            console.log(aboutText);
        },
    },
    education: {
        description: 'My education background',
        usage: 'education',
        example: 'education',
        action: async () => {
            const allResumes = await getResume();
            allResumes?.forEach((item: Resume) => {
                if (item.category === 'education') {
                    printResume(item);
                }
            });
        },
    },
    experience: {
        description: 'Experience i have gathered so far',
        usage: 'experience',
        example: 'experience',
        action: async () => {
            const resume = await getResume();
            resume.forEach((item: Resume) => {
                if (item.category === 'work') {
                    printResume(item);
                }
            });
        },
    },
    skills: {
        description: 'My skills',
        usage: 'skills',
        example: 'skills',
        action: async () => {
            console.log('print skills');
        },
    },
    projects: {
        description: 'View my projects',
        usage: 'projects',
        example: 'projects',
        action: async () => {
            console.log('print projects');
        },
    },
    contact: {
        description: 'Contact Information',
        usage: 'contact',
        example: 'contact',
        action: async () => {
            console.log('print contact information');
        },
    },
    email: {
        description: 'Send me an email',
        usage: 'email',
        example: 'email',
        action: async () => {
            open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=tasmirolislam@gmail.com&body=Dear+Tajmirul+Islam,',
            );
            console.log('tasmirolislam@gmail.com');
            console.log('\nDone, see you soon at inbox.\n');
        },
    },
    resume: {
        description: 'Want to see my resume?',
        usage: 'resume',
        example: 'resume',
        action: async () => {
            console.log('open resume');
        },
    },
};
