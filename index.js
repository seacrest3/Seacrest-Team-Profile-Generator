const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create an inquiry for user to enter the information about the members of the development team
const inquireManager = () => {
    //Inquire information about the manager
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the team manager:",
            validate: (yourName) => {
                validName = /^[A-Za-z]+$/.test(yourName)
                if (validName) {
                    return true;
                } else {
                    console.log(' Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee ID of the team manager:",
            validate: (yourId) => {
                validId = /^[0-9]+$/.test(yourId)
                if (validId) {
                    return true;
                } else {
                    console.log(' Please enter a valid ID!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the email address of the team manager:",
            validate: (yourEmail) => {
                validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(yourEmail)
                if (validEmail) {
                    return true;
                } else {
                    console.log(' Please enter a valid Email!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the office number of the team manager:",
            validate: (yourOfficeNumber) => {
                validOfficeNumber = /^[0-9]+$/.test(yourOfficeNumber)
                if (validOfficeNumber) {
                    return true;
                } else {
                    console.log(' Please enter a valid office number!');
                    return false;
                }
            }
        },
    ]).then((managerInfo) => {
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        teamMembers.push(manager);
        console.log(teamMembers);
        memberMenu();
    });
}
//Present a menu with the options to add members to the team
const memberMenu = () => {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "memberSelect",
            message: "Please select member to be added to the team:",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"],
        },
    ]).then((choice) => {
        if (choice.memberSelect == "Add an engineer") {
            //Inquire information about the engineer to be added
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the name of the engineer:",
                    validate: (yourName) => {
                        validName = /^[A-Za-z]+$/.test(yourName)
                        if (validName) {
                            return true;
                        } else {
                            console.log(' Please enter a valid name!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the employee ID of the engineer:",
                    validate: (yourId) => {
                        validId = /^[0-9]+$/.test(yourId)
                        if (validId) {
                            return true;
                        } else {
                            console.log(' Please enter a valid ID!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the email address of the engineer:",
                    validate: (yourEmail) => {
                        validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(yourEmail)
                        if (validEmail) {
                            return true;
                        } else {
                            console.log(' Please enter a valid Email!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter the GitHub username of the engineer:",
                    validate: (username) => {
                        if (username) {
                            return true;
                        } else {
                            console.log(' Please enter a GitHub username!');
                            return false;
                        }
                    }
                },
            ]).then((engineerInfo) => {
                const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                teamMembers.push(engineer);
                console.log(teamMembers);
                memberMenu();
            })
        } else if (choice.memberSelect == "Add an intern") {
            //Inquire information about the intern to be added
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the name of the intern:",
                    validate: (yourName) => {
                        validName = /^[A-Za-z]+$/.test(yourName)
                        if (validName) {
                            return true;
                        } else {
                            console.log(' Please enter a valid name!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the employee ID of the intern:",
                    validate: (yourId) => {
                        validId = /^[0-9]+$/.test(yourId)
                        if (validId) {
                            return true;
                        } else {
                            console.log(' Please enter a valid ID!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the email address of the intern:",
                    validate: (yourEmail) => {
                        validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(yourEmail)
                        if (validEmail) {
                            return true;
                        } else {
                            console.log(' Please enter a valid Email!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "school",
                    message: "Please enter the school of the intern:",
                    validate: (yourSchool) => {
                        validSchool = /^[A-Za-z\s]*$/.test(yourSchool)
                        if (validSchool) {
                            return true;
                        } else {
                            console.log(' Please enter a valid School name!');
                            return false;
                        }
                    }
                },
            ]).then((internInfo) => {
                const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                teamMembers.push(intern);
                console.log(teamMembers);
                memberMenu();
            });
        } else {
            //Finish building the team
            console.log(`Finish building the team`);
            //Create the output directory if not exist
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            //Call the render function to generate the HTML file and pass in an array containing all employee objects
            fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        }
    });
}
//Start the application to call the inquireManager() function
inquireManager();
