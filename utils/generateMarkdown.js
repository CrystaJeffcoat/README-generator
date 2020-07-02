function generateMarkdown(title, content) {
  return `
## ${title}

${content}
`;
}

module.exports = generateMarkdown;
