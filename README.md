# Seacrest-Team-Profile-Generator

This is a command-line application to dynamically generate a HTML file.

## Description

This application will take in information about employees on a software engineering team, then generates an HTML file that displays summaries for each person.

It is tasked to convert the starter code into a working Node.js command-line application and to make sure every part of the code passes each provided test.

---

 ## Table of Contents
  * [Description](#description)
  * [User Story](#user-story)
  * [Usage](#usage)
  * [Technical Acceptance Criteria](#technical-acceptance-criteria)
  * [Mock-Up](#mock-up)
  * [Review](#review)
  * [Helpful Resources](#helpful-resources)

---

## User Story

AS A manager, I WANT to generate a HTML file that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

---

## Usage

The application can be invoked by using the following command:

```bash
node index.js
```
The sample HTML generated using the application is in the 'output' directory of the project repository.

The tests can be run by using the following command:

```bash
npm run test
```

---

## Technical Acceptance Criteria

* Satisfies all of the following acceptance criteria:

  * Create a command-line application that accepts user input

  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
      * The first class is an `Employee` parent class with the following properties and methods:       
        * `name`
        * `id`
        * `email`
        * `getName()`
        * `getId()`
        * `getEmail()`
        * `getRole()`&mdash;returns `'Employee'`     
      * The other three classes will extend `Employee`.      
      * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
        * `officeNumber`
        * `getRole()`&mdash;overridden to return `'Manager'`
      * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
        * `github`&mdash;GitHub username
        * `getGithub()`
        * `getRole()`&mdash;overridden to return `'Engineer'`
      * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
        * `school`
        * `getSchool()`
        * `getRole()`&mdash;overridden to return `'Intern'`
      * Finally, although it???s not a requirement, consider adding validation to ensure that user input is in the proper format.   
    * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
      * When a user starts the application then they are prompted to enter the **team manager**???s:
        * Name
        * Employee ID
        * Email address
        * Office number
      * When a user enters those requirements then the user is presented with a menu with the option to:
        * Add an engineer
        * Add an intern 
        * Finish building the team
      * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
        * Engineer's Name
        * ID
        * Email
        * GitHub username
      * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
        * Intern???s name
        * ID
        * Email
        * School
      * When a user decides to finish building their team then they exit the application, and the HTML is generated.
    * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
      * The `render` function will generate and return a block of HTML including templated divs for each employee!
    * Create an HTML file using the HTML returned from the `render` function. 
      * Write it to a file named `team.html` in the `output` folder. 
      * You can use the provided variable `outputPath` to target this location.

  	* Use the [Inquirer package](https://www.npmjs.com/package/inquirer).

    * All tests pass using the [Jest package](https://www.npmjs.com/package/jest).

    * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

---

## Mock-Up

The following image shows a mock-up of the generated HTML file???s appearance and all tests passed:

![An image of HTML webpage titled ???My Team??? features five boxes listing employee names, titles, and other key info.](./assets/images/mockup.png)

![An image of all tests passed](./assets/images/test.png)

When a user run node index.js at the terminal,

1. The user is prompted to enter the **team manager**???s:
      * Name
      * Employee ID
      * Email address
      * Office number
2. When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
3. When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
4. When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern???s name
      * ID
      * Email
      * School
5. When a user decides to finish building their team by selecting 'Finish building the team' option in the menu, the application should check if the `output` folder exists and create it if it does not. The HTML is generated in the 'output' directory.

---

## Review

TA, a Web Developer, reviews the code, providing feedback on errors and making sure that all of the acceptance criteria have been met.

* [A sample HTML webpage generated using the application.](./assets/images/mockup.png)

* [The URL of the GitHub repository.](https://github.com/seacrest3/Seacrest-Team-Profile-Generator.git)

---

## Helpful Resources

- [Jest](https://jestjs.io/docs/getting-started)

- [Object-Oriented Programming in JavaScript](https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/#object-composition)

- [Inquirer.js](https://www.npmjs.com/package/inquirer)

- [MDN Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

- [W3Schools React ES6 Destructuring](https://www.w3schools.com/react/react_es6_destructuring.asp)

- [JavaScript Tutorial](https://www.javascripttutorial.net/)

- [freeCodeCamp.org](https://www.freecodecamp.org/)

- [Github Pages Guide](https://pages.github.com/)