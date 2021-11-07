// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseImg = "";
  switch (data.license) {
    case 'MIT':
      licenseImg = "https://img.shields.io/badge/License-MIT-blue"
      break;
    case 'APACHE 2.0':
      licenseImg = "https://img.shields.io/badge/License-APACHE%202.0-blue"
      break;
    case 'GPL 3.0':
      licenseImg = "https://img.shields.io/badge/License-GPL%203.0-blue"
      break;
    case 'BSD 3':
      licenseImg = "https://img.shields.io/badge/License-BSD%203-blue"
      break;
    case 'None':
    licenseImg = "no"
    break;
  }
  return `
  # ${data.project}
  ![Github license](${licenseImg})
  ![Github license](${licenseImg})
  
  ## Description
  
  ${data.description}
  
  ## Table of Content
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Test](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependecies, run the following command: 
  
  \`\`\`
  ${data.dependencies}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  
  ${data.contact}
  
  ## Tests
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  
  - Email me at ${data.email}
  - Github https://www.github.com/${data.username}

---
© ${data.name} 
--
<img src="https://avatars.githubusercontent.com/${data.username}" alt="drawing" height="200" width="200"/>

  `;
}
module.exports = generateMarkdown;
