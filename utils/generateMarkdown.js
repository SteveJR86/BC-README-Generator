// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}

## Description
  
`;
// logic below determines which badge is shown depending on the license selected
  if(data.license === 'MIT License') {
    markdown += `![MIT license](https://img.shields.io/badge/license-MIT-blue)
    `;
  } else if (data.license === 'GNU GPLv3') {
    markdown += `![license](https://img.shields.io/badge/license-GNU%20GPLv3-blue)
    `;
  } else if (data.license === 'Apache License 2.0') {
    markdown += `![license](https://img.shields.io/badge/license-Apache%202.0-blue)
    `;
  } else if (data.license === 'Boost Software License 2.0') {
    markdown += `![license](https://img.shields.io/badge/license-Boost%201.0-blue)
    `;
  }
  
  markdown += `
${data.description}

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

return markdown
}

module.exports = generateMarkdown;
