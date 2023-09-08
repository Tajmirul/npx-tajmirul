import chalk from 'chalk';
import { Resume } from '../types/resume';
import { dateFormatter } from './dateFormatter';

export const printResume = (resume: Resume) => {
    const duration = `${chalk.whiteBright(
        dateFormatter(resume.duration.startedAt),
    )} - ${chalk.whiteBright(
        resume.duration.endAt ? dateFormatter(resume.duration.endAt) : 'Now',
    )}`;

    const text = [
        ``,
        chalk.greenBright.bold(resume.title),
        chalk.whiteBright.bold(resume.organization),
        duration,
        resume.description,
        ``,
    ].join('\n');
    console.log(text);
};
