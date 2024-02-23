let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChioce) =>{
      if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You WIn!. Your ${userChoice} beats ${compChioce}`;
        msg.style.backgroundColor = "green";
      }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose!. ${compChioce} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
      }
};

const playGame = (userChoice) =>{
    // Generate computer choice
    const compChioce = genCompChoice();

    if(userChoice === compChioce){
        // Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // computer choice = scissors ,paper
            userWin = compChioce === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // computer choice = scissors ,rock
            userWin = compChioce === "scissors" ? false : true;
        }else{
            // rock paper
            userWin = compChioce === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChioce);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
