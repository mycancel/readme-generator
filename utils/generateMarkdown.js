// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let color;
  if (license === 'MPL') color = 'brightgreen';
  else if (license === 'GPL') color = 'blue';
  else if (license === 'Apache') color = 'blue';
  else if (license === 'MIT') color = 'yellow';
  else if (license === 'BSD') color = 'blue';
  else color = 'teal';

  if (license) return (`[![License](https://img.shields.io/badge/License-${license}-${color}.svg)]`);
  else return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseLink(license) {
  if (license === 'MPL') {
    return (
      `(https://opensource.org/licenses/MPL-2.0)`
    );
  } else if (license === 'GPL') {
    return (
      `(https://www.gnu.org/licenses/gpl-3.0)`
    );
  } else if (license === 'Apache') {
    return (
      `(https://opensource.org/licenses/Apache-2.0)`
    );
  } else if (license === 'MIT') {
    return (
      `(https://opensource.org/licenses/MIT)`
    );
  } else if (license === 'BSD') {
    return (
      `(https://opensource.org/licenses/BSD-3-Clause)`
    );
  } else return (``);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MPL') {
    return (
      `The Mozilla Public License (MPL) is the least restrictive copyleft open source software license. They make it easy to modify and use their code in closed-source and/or proprietary software, as long as any code licensed under the MPL is kept in separate files and these files are distributed with the software. The MPL also includes patent grants and enforces that copyright notices be retained ( [Source](https://snyk.io/learn/open-source-licenses/) ).`
    );
  } else if (license === 'GPL') {
    return (
      `The GNU General Public License (GPL) preserves license notifications and copyright terms and is suitable for commercial, patent, and private use. Any software that uses GPL code must distribute all its source code under the same license. So if you use GPL code in your software (e.g., by using a GPL library), and distribute your application, all your source code must be made available under the same GPL license. This restriction makes the GPL a strong copyleft license ( [Source](https://snyk.io/learn/open-source-licenses/) ).`
    );
  } else if (license === 'Apache') {
    return (
      `The Apache License requires license notifications and copyrights on the distributed code and/or as a notice in the software. However, derivative works, larger projects, or modifications are allowed to carry different licensing terms when distributed and are not required to provide source code. Apache licenses contain a patent grant ( [Source](https://snyk.io/learn/open-source-licenses/) ).`
    );
  } else if (license === 'MIT') {
    return (
      `The MIT License, which bears the name of the famous university where it originated, is perhaps the most used open source license in the world, perhaps because it is very short and clear and easy to understand. It allows anyone to do whatever they wish with the original code, as long as the original copyright and license notice is included either in the distributed source code or software. It removes any liability from authors and does not explicitly contain a patent grant ( [Source](https://snyk.io/learn/open-source-licenses/) ).`
    );
  } else if (license === 'BSD') {
    return (
      `The Berkeley Source Distribution (BSD)  License is another permissive open source license that preserves license notices and copyrights but allows larger or licensed works to be distributed without source code and under different license terms. The 2- clause BSD License is very similar to the MIT open source license, while the 3-clause and 4-clause BSD licenses add more requirements or restrictions related to reuse and other terms ( [Source](https://snyk.io/learn/open-source-licenses/) ).`
    );
  } else return (``);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, username, email, description, usage, installation, contribution, test, license }) {
  const template = (
    `# ${title}

${renderLicenseBadge(license)}${renderLicenseLink(license)}

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

${renderLicenseSection(license)}

For more detailed information, click [here]${renderLicenseLink(license)}.

## Contribution

${contribution}

## Test Instructions

${test}

## Questions

- [Github](https://github.com/${username})
- [Email](mailto:${email})
`
  );

  console.log('Markdown generated...');
  return template;
}

module.exports = { generateMarkdown };
