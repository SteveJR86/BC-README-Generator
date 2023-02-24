// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

![MIT license](https://img.shields.io/badge/license-MIT-blue)
![license](https://img.shields.io/badge/license-GNU%20GPLv3-blue)
![license](https://img.shields.io/badge/license-Apache%202.0-blue)
![license](https://img.shields.io/badge/license-Boost%201.0-blue)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installInstr}

## Usage

${data.usage}

## License

This project is licensed according to the ${data.license} license.

## Contributing

${data.contGuide}

## Tests

${data.testInstr}

## Questions

You can find the profile of the owner of this repo on GitHub at [https://github.com/${data.userGitHub}](https://github.com/${data.userGitHub}).

If you've any questions on this repo please email the owner at [${data.userEmail}](mailto:${data.userEmail})
`;
}

module.exports = generateMarkdown;
