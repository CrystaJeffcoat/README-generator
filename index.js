const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const readmeQuestions = require("./readmeGen.js");

let username;
let reponame;
const queryURL = `https://api.github.com/repos/${username}/${reponame}/contents/`

// Questions to retrieve username and repository name for github--
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

// Get user info for github API--
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
    
        const { data } = await axios.get(queryURL);
    
        console.log(data[0].name);
    
    } catch (err) {
        console.log(err);
    }
}

// Asks initial questions from readmeGen file--
getData();
async function getData() {
    try {
        await inquirer
            .prompt(readmeQuestions.initialQuestions)
            .then(function(data){
                fs.writeFile("readmeData.json", JSON.stringify(data, null, 2), function(err){
                    if (err) {
                        console.log(err);
                    }
                    fs.readFile("readmeData.json", "utf8", function(err, data) {
                        if (err) throw err;
            
                        let userResponse = JSON.parse(data);
                        if (userResponse.content[0]) {
                            createTableofContents(userResponse.content)
                        }
                    })
                })
            })
        } catch (err) {
            console.log(err);
        }
    }  



function createTableofContents(data) {
    console.log(data)
}
// async function writeToFile(fileName, data) {

// }

// function init() {

// }

// init();
