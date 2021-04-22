
var readlineSync = require("readline-sync");
var score = 0;


var userName = readlineSync.question("Enter your name: ");

console.log("Welcome " + userName + " to DO YOU KNOW Zeeshan? ");
console.log("Rules: You will be awarded 2 points for each correct answer");
console.log("<------------------------------------------->");

function play(question, answer){

    var userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase() == answer.toUpperCase()){
        console.log("You are right!");
        score = score + 2;
    }else{
        console.log("You are wrong!");
    }

    console.log("Current score: ", score);
    console.log("-----------------------");
}

var questions = [{
    question: "What is my full name? ",
    answer: "zeeshan akhter"
},{
    question: "My birth date? ",
    answer: "28"
},{
    question: "What is my age? ",
    answer: "18"
},{
    question: "Where do I live? ",
    answer: "gaya"
},{
    question: "My favourite fruit? ",
    answer: "mango"
}];

for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];

    play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You scored: ", score);