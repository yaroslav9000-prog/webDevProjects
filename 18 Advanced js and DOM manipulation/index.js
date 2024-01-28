// document.querySelector("button").addEventListener("click", handleClick);

let buttonList = document.querySelectorAll(".drum");
for(let index = 0; index < buttonList.length; index++){
    buttonList[index].addEventListener("click", (event)=>{
        let buttonInnerHtml = event.target.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })    
    }

document.addEventListener("keydown", (event)=>{
    let eventKey = event.key;
    makeSound(eventKey);
    console.log(eventKey);
    buttonAnimation(eventKey)
    })

const makeSound=(eventKey)=>{
    switch(eventKey){
        case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "k":
        let kickBass= new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
    case "l":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    default:
        console.log("piska v tualete");
    }
}
// add class to button that is pressed or clicked
const buttonAnimation = (keyTouched)=>{
    document.querySelector(`.${keyTouched}`).classList.add("flash");
    setTimeout(()=>{
        document.querySelector(`.${keyTouched}`).classList.remove("flash")
    },200);    
}