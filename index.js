const fs = require("fs");
const inquirer = require("inquirer");
const readmeQuestions = require("./utils/readmeGen");
const generateMarkdown = require("./utils/generateMarkdown.js");

let username;
let reponame;

// Questions to retrieve username and repository name for github --
const userQuestions = [

    {
        type: "input",
        message: "What is your gituhub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your repository name?",
        name: "reponame"
    }
    
];

// Get user info from github API to generate badge --
getRepo();
async function getRepo() {
    try {
        await inquirer
        .prompt(userQuestions)
        .then(function(res) {
            if ((res.username) && (res.reponame)) {
                username = res.username
                reponame = res.reponame
            }else {
                console.log("Enter a valid username and repo");
            }
        });
    
        const badge = `(https://img.shields.io/github/repo-size/${username}/${reponame})`;
        formattedData.push("![GitHub repo size]" + badge)
        console.log(formattedData)
        getData();
    } catch (err) {
        console.log(err);
    }
}

// Asks initial questions from readmeGen file -- Gets outline for readme
let formattedData = []

async function getData() {
    try {
        await inquirer
            .prompt(readmeQuestions)
            .then(function(data){
                for (const d in data) {
                    formattedData.push(generateMarkdown(d, data[d]))
                }
                fs.writeFile("README.md", formattedData.join(""), function(err){
                    if (err) {
                        console.log(err);
                    }
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
