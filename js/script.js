//imports the constants that are used in script.js

import{ 
    navbarHeader 
}from "./header.js" 
 
import{ 
    getUsrNameForm, 
    getUsrNameInput, 
    getUsrNameButton 
}from "./getUsrNameForm.js" 
 
import{ 
    RulesAndHeadLineDiv 
} from "./rulesAndHeaLineDiv.js" 
 
import{ 
    buttonsDiv,  
    buttonsForm 
}from "./buttonsDiv.js" 
 
import{ 
    displayDiv, 
    displayUsrImg, 
    displayMiddleH1, 
    displayMiddleH3, 
    displayComputerImg, 
    displayUsrH1, 
    displayComputerH1 
}from "./displayDiv.js" 
 
//variables that will be show in the navbar 
let usrName = "" 
let wins = 0 
let losses = 0 
let ties = 0 
let round = 0 
 
//used to store what the user has chosen as their weapon 
let usrChosenOption = "" 
 
//used to store what the computer has chosen as their weapon 
let computerChosenOption = "" 
 
//relative location of the imgs used
const arrOfImgLocation = [ 
"media/rock.png",  
"media/paper.png",  
"media/scissor.png",  
"media/lizard.png",  
"media/spock.png"  
] 
 
 
 
 
 
let printThisWhenTied = "" 
 

/* object that contains all the diffret strings that correlate to what usr and computer has chosen 

if usrChosenOption = paper   and   computerChosenOption = rock 
optionCorelation[usrChosenOption][computerChosenOption].outcome         will be "win" 
optionCorelation[usrChosenOption][computerChosenOption].explanation     will be "Paper covers rock" 

objects in optionCorelation is named the same as the diffrent values of the buttons */
const optionCorelation = { 
    rock:{ 
        location: arrOfImgLocation[0], 
        rock:{ 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        paper: { 
            outcome: "loss", 
            explanation: "Paper covers rock" 
        }, 
        scissor: { 
            outcome: "win", 
            explanation: "Rock Crushes scissors" 
        }, 
        lizard: { 
            outcome: "win", 
            explanation: "Rock Crushes lizard" 
        }, 
        spock: { 
            outcome: "loss", 
            explanation: "Spock vaporizes rock" 
        } 
    }, 
    paper:{ 
        location: arrOfImgLocation[1], 
        rock:{ 
            outcome: "win", 
            explanation: "Paper covers rock" 
        }, 
        paper: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        scissor: { 
            outcome: "loss", 
            explanation: "Scissor cuts paper" 
        }, 
        lizard: { 
            outcome: "loss", 
            explanation: "Lizard eats paper" 
        }, 
        spock: { 
            outcome: "win", 
            explanation: "Paper disproves Spock" 
        } 
    }, 
    scissor:{ 
        location:arrOfImgLocation[2], 
        rock:{ 
            outcome: "loss", 
            explanation: "Rock crushes scissors" 
        }, 
        paper: { 
            outcome: "win", 
            explanation: "Scissors cuts paper" 
        }, 
        scissor: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        lizard: { 
            outcome: "win", 
            explanation: "Scissors decapitates lizard" 
        }, 
        spock: { 
            outcome: "loss", 
            explanation: "Spock smashes scissors" 
        } 
    },  
    lizard:{ 
        location: arrOfImgLocation[3], 
        rock:{ 
            outcome: "loss", 
            explanation: "Rock crushes lizard" 
        }, 
        paper: { 
            outcome: "win", 
            explanation: "Lizard eats paper" 
        }, 
        scissor: { 
            outcome: "loss", 
            explanation: "Scissors decapitates lizard" 
        }, 
        lizard: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        spock: { 
            outcome: "win", 
            explanation: "Lizard poisons Spock" 
        } 
    }, 
    spock:{ 
        location: arrOfImgLocation[4], 
        rock:{ 
            outcome: "win", 
            explanation: "Spock vaporizes rock" 
        }, 
        paper: { 
            outcome: "loss", 
            explanation: "Paper disproves Spock" 
        }, 
        scissor: { 
            outcome: "win", 
            explanation: "Spock smashes scissors" 
        }, 
        lizard: { 
            outcome: "loss", 
            explanation: "Lizard poisons Spock" 
        }, 
        spock: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        } 
    } 
} 
 
 
 
 
//---------- EVENTLISTENERS ---------- 
 
//adds getUsrNameForm to DOM 
document.body.append(getUsrNameForm) 

//activates when getUsrNameForm is submitted
getUsrNameButton.addEventListener("click" , (event) => { 
 
    //stops site from reloading 
    event.preventDefault() 
 
    //gets the users Name, from the input tag, and sets usrName  
    usrName = getUsrNameInput.value 
 
    //removes the getUsrNameForm form from DOM 
    getUsrNameForm.remove() 
 
    //adds the navbar 
    document.body.append(navbarHeader) 
 
    //adds the rules 
    document.body.append(RulesAndHeadLineDiv) 
 
    //adds the buttons 
    document.body.append(buttonsDiv) 
 
    //adds the usrName to the navbar 
    document.querySelector(".navUsrName").innerText += usrName 
     
}) 
 
//activates when one of the five buttons is clicked in the form 
buttonsForm.addEventListener("submit", (event) => { 
 
    //no reloading the page 
    event.preventDefault() 
 
    //removes RulesAndHeadLineDiv from the DOM 
    RulesAndHeadLineDiv.remove() 
 
    //variable that is visible in the navbar 
    round++ 
 
    //when form is submitted this gets the value of the button pressed 
    usrChosenOption = event.submitter.value  
 
    //randomly chooses a option for computer
    computerChosenOption = randomOption() 
 
    //logs the value of the button pressed 
    console.log(`Users Chosen option is = ${usrChosenOption}`) 
     
    //changes the displayUsrImg src 
    displayUsrImg.src = optionCorelation[usrChosenOption].location 
 
    //changes the displayComputerImg src 
    displayComputerImg.src = optionCorelation[computerChosenOption].location 
 
    //changes the displayMidde 
    displayMiddleH3.innerText = optionCorelation[usrChosenOption][computerChosenOption].explanation 
 
    //if usr has lost 
    if(optionCorelation[usrChosenOption][computerChosenOption].outcome == "loss"){ 
        displayMiddleH1.innerText = "LOSER!" 
        displayComputerH1.style.color = "green"         
        displayUsrH1.style.color = "red" 
        losses++ 
 
        //if usr has won 
    }else if(optionCorelation[usrChosenOption][computerChosenOption].outcome == "win"){ 
        displayMiddleH1.innerText = "WINNER!" 
        displayUsrH1.style.color = "green" 
        displayComputerH1.style.color = "red" 
        wins++ 
 
        //if usr is tied with computer 
    }else if(optionCorelation[usrChosenOption][computerChosenOption].outcome == "tie"){ 
        displayMiddleH1.innerText = "TIE!" 
        displayUsrH1.style.color = "black" 
        displayComputerH1.style.color = "black" 
        ties++ 
    } 
     
    //checks if usr has won or lost three times 
    if(wins == 3 || losses == 3){ 
        if(wins == 3){ 
            window.alert("WINNER WINNER CHICKEN DINNER!!!") 
        }else{ 
            window.alert("HAHA!! LOSER! LOOOOOOOSER!!") 
        } 
        displayMiddleH1.innerText = "To keep playing: choose your weapon" 
        displayMiddleH3.innerText = "" 
         
        //resets the variables in the navbar 
        wins = 0 
        losses = 0 
        ties = 0 
        round = 0 
    } 
 
    //updates the variables in the navbar 
    updateNavBar(usrName, wins, losses, ties, round) 
 
    //adds the displayDiv to DOM 
    document.body.prepend(displayDiv) 
}) 
 
 
 
//---------- EVENTLISTENER END---------- 
 
 
 
 
 
 
//---------------------------------------- ONLY FUNCTIONS BELOW THIS----------------------------------------- 
 
 
//returns one of the five options as a string, randomized 
function randomOption(){ 
    let ranValue = getRandomValueBetween(1,5) 
    switch(ranValue){ 
        case 1: 
            return "rock" 
 
        case 2: 
            return "paper" 
 
        case 3: 
            return "scissor" 
 
        case 4: 
            return "lizard" 
 
        case 5: 
            return "spock" 
             
 
        default: 
            console.log("Something is hella wrong if you see this") 
            break; 
       
    } 
} 
 
//updates the variables show in the navbar 
function updateNavBar(usrName, wins, losses, ties, round){ 
    document.querySelector(".navUsrName").innerText = `UserName: ${usrName}` 
    document.querySelector(".navWins").innerText = `Wins: ${wins}` 
    document.querySelector(".navLosses").innerText = `Losses: ${losses}` 
    document.querySelector(".navTies").innerText = `Ties: ${ties}` 
    document.querySelector(".navRound").innerText = `Round: ${round}` 
} 
 
 
//transforms variables into querystring 
function buildQuery (dataName, data) { 
    let objectOfData = { 
        [dataName] : data 
    } 
	return new URLSearchParams(objectOfData).toString(); 
} 
 
 
//returns random integer between, including, minimumValue and maximumValue 
//minimumValue <= retrunValue >= maximumValue 
function getRandomValueBetween(minimumValue, maximumValue){ 
    let retrunValue = Math.floor(Math.random() * (maximumValue - minimumValue +1)) + minimumValue 
    return retrunValue 
} 
 
 
//gets value from querystring 
function getParameterByName(name, url = window.location.href) { 
    name = name.replace(/[\[\]]/g, '\\$&'); 
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), 
        results = regex.exec(url); 
    if (!results) return null; 
    if (!results[2]) return ''; 
    return decodeURIComponent(results[2].replace(/\+/g, ' ')); 
} 