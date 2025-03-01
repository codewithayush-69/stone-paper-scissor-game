let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#winner");
const mychoice = document.querySelector("#user-choice");
const comchoice = document.querySelector("#computer-choice");
const userScoreSpan = document.querySelector("#player-score");
const compScoreSpan = document.querySelector("#computer-score");
const body = document.querySelector("body");

const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    showresult(userChoice, compChoice);
    
    setTimeout(() => {
        if (userChoice === compChoice) {
            draw();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissor" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showingWinner(userWin, userChoice, compChoice);
        }
    }, 3000);
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        body.setAttribute("id","effects")
        playGame(userChoice);
    });
});

const gencompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const draw = () => {
    msg.innerText = "The game was a Draw. Choose again";
    msg.style.backgroundColor = "brown";
};

const showingWinner = (userWin, userChoice, compChoice) => { 
    if (userWin) {
        userScore++;
        userScoreSpan.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreSpan.innerText = compScore;
        msg.innerText = `You lose. Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const showresult = (userChoice, compChoice) => {
    setTimeout(() => {  
        mychoice.innerText = `You: ${userChoice}`;  
        comchoice.innerText = `Computer: ${compChoice}`;
        body.setAttribute("id","effect");
    }, 3000);
};