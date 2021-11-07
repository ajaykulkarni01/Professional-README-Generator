function generateMarkdown(data, github) {

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
    licenseImg = "https://img.shields.io/badge/License-NOT%20SPECIFIED-blue"
    break;
  }
  return `
  # ${data.project}
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
  
  - Email me at: ${data.email}
  - Github: https://www.github.com/${data.username}

---
© ${github.name} 
--
<img src="https://avatars.githubusercontent.com/${data.username}" alt="Profile image" height="200" width="200"/>

  `;
}
module.exports = generateMarkdown;
