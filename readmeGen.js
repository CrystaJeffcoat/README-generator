module.exports = {

  initialQuestions: [
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description: "
    },
    {
      type: "checkbox",
      message: "What would you like to include in your README?",
      name: "content",
      choices: [
        "Table of Contents", 
        "Installation", 
        "Usage", 
        "Credits",
        "License",
        "Contributing",
      ]
    }
  ],
  Installation: [
    {
        type: "input",
        name: "installation",
        message: "Enter installation steps: "
    }
  ],
  Usage: [
    {
        type: "input",
        name: "usage",
        message: "Enter examples for usage: "
    }
  ],
  Credits: [
    {
        type: "input",
        name: "credits",
        message: "Enter credits you would like to include: "
    }
  ],
  License: [
    {
        type: "input",
        name: "license",
        message: "Enter license information: "
    }
  ],
  Contributing: [
    {
        type: "input",
        name: "contributing",
        message: "Enter contributing guidelines: "
    }
  ]
}