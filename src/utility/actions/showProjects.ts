import chalk from 'chalk';
import { Project } from '../../types/project';
import { localAxios } from '../axios';

let projects: Project[] = [];

export const getProjects = async (): Promise<Project[]> => {
    if (projects.length) {
        return projects;
    }

    const res = await localAxios.get('/projects?all=true');
    projects = res.data.projects;
    return projects;
};

//
export const showProjects = async (projects: Project[]) => {
    projects.forEach((project) => {
        console.log(chalk.blueBright.bold(`\n${project.title}`));
        console.log(
            chalk.hex('#777')(
                `https://me.toinfinite.dev/projects/${project.slug}`,
            ),
        );
        console.log(
            chalk.bold('Technologies: ') + project.technologies.join(', '),
        );
        console.log();
        console.log(chalk.hex('#aaa')(project.shortDescription));
        console.log(chalk.hex('#aaa')('==========='));
    });
};
