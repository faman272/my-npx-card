'use strict'

import figlet from 'figlet';
import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type : "list",
        name : "action",
        message : "What do you want to do?",
        choices : [
            {
                name : `Send me an ${chalk.bold('email')}?`,
                value : () => {
                    open("mailto:fathurrahmansmkt@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                },                          
            },
            {
                name : "Exit",
                value : () => {
                    console.log("Thank you for your time! Have a great day! :)\n");
                }
            }
        ]
    }
]

const data = {
    intro: figlet.textSync('        Hack Learn', { font: 'mini',  }),
    name: `${chalk.white.bold('      Fathurrahman')}/${chalk.hex('#0094C6')('@faman272')}`, 
    handle: chalk.white("@faman272"),
    instagram: chalk.hex('#FF00A0')("https://www.instagram.com/faman272/"),
    github: chalk.hex('#787878')("https://github.com/faman272"),
    dribbble: chalk.hex('#AB009C')("https://dribbble.com/faman272"),
    website: chalk.hex('#00AB9E')("https://faman272.github.io/faman272/"),
    npx: chalk.hex('#A1AB00')("npx faman"),

    labelFact: chalk.hex('#FF6262').bold("       Fun Fact:"),
    labelInstagram: chalk.hex('#FF00A0').bold("      Instagram:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelDribbble: chalk.hex('#F259FF').bold("       Dribbble:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.intro}`,
        `${data.name}`,
        ``,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDribbble}  ${data.dribbble}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Fathurrahman, a fullstack web with a strong" 
        )}`,
        `${chalk.bold("design background. As an Indonesian developer, I love crafting")}`,
        `${chalk.bold(
            "visually appealing, functional, and responsive web apps. "
        )}`,
        `${chalk.bold(
            "Let's connect if you're interested in collaborating!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());