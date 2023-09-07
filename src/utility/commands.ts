import chalk from 'chalk';
import { Commands } from '../types/commands';
import { Resume } from '../types/resume';
import { getResume } from './actions/getResume';

export const commands: Commands[] = [
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
    'resume',
];

export const commandHistory: string[] = [];

export const commandDetails: {
    [key in Commands]: {
        description: string;
        usage: string;
        example: string;
        action?: (arg?: string[]) => void;
    };
} = {
    help: {
        description: 'List available commands',
        usage: 'help',
        example: 'help',
        action: async () => {
            const commandsWithHelpText = Object.keys(commandDetails)
                .map((commandName) => {
                    const commandDetail =
                        commandDetails[commandName as Commands];

                    return `${chalk.hex('#05ce91').bold(commandName)} - ${
                        commandDetail.description
                    }`;
                })
                .join('\n');

            const helpText = [`Available commands:`, commandsWithHelpText].join(
                '\n',
            );

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
        action: async () => {
            console.clear();
        },
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
        description: 'Print the command history',
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
        description: 'Print information about my gui',
        usage: 'gui',
        example: 'gui',
        action: async () => {
            open('https://me.toinfinite.dev');
            console.log('Visit my website at https://me.toinfinite.dev');
        },
    },
    about: {
        description: 'Print information about me',
        usage: 'about',
        example: 'about',
        action: async () => {
            console.log('I am a software engineer');
        },
    },
    education: {
        description: 'Print information about my education',
        usage: 'education',
        example: 'education',
        action: async () => {
            const resume = await getResume();
            return resume.filter(
                (item: Resume) => item.category === 'education',
            );
        },
    },
    experience: {
        description: 'Print information about my experience',
        usage: 'experience',
        example: 'experience',
        action: async () => {
            const resume = await getResume();
            return resume.filter((item: Resume) => item.category === 'work');
        },
    },
    skills: {
        description: 'Print information about my skills',
        usage: 'skills',
        example: 'skills',
        action: async () => {
            console.log('print skills');
        },
    },
    projects: {
        description: 'Print information about my projects',
        usage: 'projects',
        example: 'projects',
        action: async () => {
            console.log('print projects');
        },
    },
    contact: {
        description: 'Print information about how to contact me',
        usage: 'contact',
        example: 'contact',
        action: async () => {
            console.log('print contact information');
        },
    },
    resume: {
        description: 'Print information about my resume',
        usage: 'resume',
        example: 'resume',
        action: async () => {
            console.log('open resume');
        },
    },
};
