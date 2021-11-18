# Unit 09 Node.js: Professional README Generator

For this project, I have created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

The application will be invoked by using the following command:

```bash
node index.js
```

I was presented with the following acceptance criteria:

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## 💡 Application Walkthrough

This command line application will ask users set of questions to generate a README file.
It will ask for the:
- Github username
- Email address
- Project name
- Project description
- License information
- Installation procedure
- Usage
- Tests
- Contributors information
Upon entering the answers, the application will generate a professional looking README file.

## Mock-up

Please find below the application screenshot:

![Application screenshot](./assets/Screenshot.png)

## 🔗 Application Demo

https://drive.google.com/file/d/1JRqGbYem0kt3QlN5TRNtsqD-RFEdhPhD/view?usp=sharing

   <br/>

---
