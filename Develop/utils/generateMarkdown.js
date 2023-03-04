// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  }
  return ``;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
-[Test](#test)
- [Questions](#questions)
- Contributing(#contributing)

## Installation 
${data.installation}

## Usage 
${data.uusage}

## Questions 
If you havbe any questions please contact me at the following email address: ${data.email}

Find me on GitHub: [${data.username}](Https://github.com/${data.username})

`;
  
}
module.exports = generateMarkdown;
