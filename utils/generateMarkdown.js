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
function generateMarkdown({title, username, email, description, usage, installation, contribution, test, license}) {
  const template = (
`# ${title}

![License](https://img.shields.io/badge/License-${license}-teal)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License



## Contribution

${contribution}

## Test Instructions

${test}

## Questions

- [Github](https://github.com/${username})
- [Email](mailto:${email})
`
  );

  console.log ('Markdown generated...');
  return template;
}

module.exports = {generateMarkdown};
