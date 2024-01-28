let player1Img = document.getElementById("player1").firstElementChild;
let player2Img = document.getElementById("player2").firstElementChild;
player1Img.setAttribute("src", "./img/dice-6.png");
player2Img.setAttribute("src", "./img/dice-6.png");

let facadePage = document.querySelector("body").innerHTML;

const generateRandom = ()=>{
    return Math.floor(Math.random()*6) + 1;
}
// i want to make page react to user first click to start game and show results
// second click is going to trigger the game start over.

const game=()=>{
    
    const firstDice = generateRandom();
    const secondDice = generateRandom();
    player1Img.setAttribute("src", `./img/dice-${firstDice}.png`);
    player2Img.setAttribute("src", `./img/dice-${secondDice}.png`);
    whoWins(firstDice, secondDice);
}
// function that checks out the logic of the game.
const whoWins=(player1, player2)=>{
    if(player1 > player2){
        document.querySelector("h1").innerText = "Player 1 wins this game \n for another try tap any key.";
    }else if(player2> player1){
        document.querySelector("h1").innerText = "Player 2 wins this game \n for another try tap any key."
    }else{
        document.querySelector("h1").innerText = "It's a draw !!!. \n for another try tap any key.";
    }
}
const resetPage=()=>{
    
    document.querySelector("body").innerHTML = facadePage;
}


