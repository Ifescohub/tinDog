import data from "./data.js";
import Dog from "./Dog.js";

const likeBtn = document.getElementById("like-btn");
const nopeBtn = document.getElementById("nope-btn");


let index = 0;
let likeReaction = [];
let status;
let isWaiting = false

//Function to get new instance of dog from the Dog Class
function getNewDog(){
    return new Dog(data[index]);
}

//Function to swipe to different dogs
function swipe(){
    if (!isWaiting){
        renderReaction();
        isWaiting = true
        index++;
    
        setTimeout(()=>{
            dog = getNewDog();
            render();
            isWaiting = false
        }, 1000);
    }
   
}

//Formatting button clicks
function buttonHandler(button, boolen){
    button.addEventListener("click", (e)=>{
        if (index < data.length){
            status = boolen
            swipe()
    
            if (button == likeBtn){
                likeReaction.push(e.clientX)    
            }
        }else{
            location.reload(true);
        }  
    })    
}

buttonHandler(likeBtn, true)
buttonHandler(nopeBtn, false)


function renderReaction(){
    let reactionEl = document.querySelector(".reactions");
    
    reactionEl.innerHTML = dog.renderReactionHTML(status);
    setTimeout(() => {
        reactionEl.innerHTML = "";    
    }, 1000);
}


function render(){
    let containerEl =  document.querySelector(".container");
    
    return index < data.length 
    ?   containerEl.innerHTML = dog.renderDogs()
    :   containerEl.innerHTML = dog.renderEnding(likeReaction.length);
}

let dog = getNewDog();
render();

