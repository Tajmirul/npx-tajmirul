#!/usr/bin/env node

'use strict'

import terminalLink from 'terminal-link';
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
import fs from 'fs';
import request from 'request';
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';
import { CLIENT_RENEG_LIMIT } from 'tls';

const prompt = inquirer.createPromptModule();


const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Visit my ${chalk.blue.bold('portfolio')}`,
                value: () => {
                    open('https://me.toinfinite.dev');
                }
            },
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:tasmirolislam@gmail.com");
                    console.log("tasmirolislam@gmail.com")
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    const resumeLink = 'https://me-back.toinfinite.dev/public/uploads/1675714840082-resume-tajmirul-react.pdf'
                    const resumeFileName = 'resume-tajmirul-frontend_developer'
                    
                    // cliSpinners.dots;
                    const loader = ora({
                        text: ' Downloading Resume',
                        spinner: cliSpinners.dots,
                    }).start();
                    let pipe = request(resumeLink).pipe(fs.createWriteStream(`./${resumeFileName}.pdf`));
                    pipe.on("finish", function () {
                        let downloadPath = path.join(process.cwd(), `${resumeFileName}.pdf`)
                        console.log(`\nResume Downloaded at ${downloadPath} \n`);
                        open(downloadPath)
                        loader.stop();
                    });
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/tajmirul/30min');
                    console.log("\n See you at the meeting \n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Tajmirul: Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("Tajmirul Islam Akhand"),
    handle: chalk.white("@tajmirul"),
    work: `${chalk.white("Frontend Engineer at")} ${chalk
        .hex("#2b82b2")
        .bold("Anchorblock Technology")}`,
    github: chalk.gray("https://github.com/") + chalk.green("tajmirul"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("tajmirul"),
    facebook: chalk.gray("https://www.facebook.com/") + chalk.blue("akhand.tajmirul"),
    
    web: chalk.cyan("https://me.toinfinite.dev/"),

    labelWork: chalk.white.bold("Work:    "),
    labelFacebook: chalk.white.bold("Facebook:"),
    labelGitHub: chalk.white.bold("GitHub:  "),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelWeb: chalk.white.bold("Web:     "),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelWeb}  ${data.web}`,
        `${data.labelFacebook}  ${data.facebook}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${chalk.italic("My inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

(async () => {
    console.clear()
    console.log(me);
    const tip = [
        `Tip: Try ${chalk.cyanBright.bold(
            "cmd/ctrl + click"
        )} on the links above`,
        '',
    ].join("\n");
    console.log(tip);

    prompt(questions).then(answer => answer.action());
})()
