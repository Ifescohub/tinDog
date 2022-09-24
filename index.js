import data from "./data.js";
import Dog from "./Dog.js";

const likeBtn = document.getElementById("like-btn");
const nopeBtn = document.getElementById("nope-btn");
const like = document.getElementById("like");
const nope = document.getElementById("nope");

let index = 0;
let likeReaction = [];
let waiting = false

//Function to get new instance of dog from the Dog Class
function getNewDog(){
        let newDog = new Dog(data[index]);
        return newDog
}

function swipe(){
        index++
        dog = getNewDog();
        render();
}

function buttonHandler(button, reaction){
    button.addEventListener("click", ()=>{
        if (index < data.length && !waiting){
            
            reaction.classList.add("active");
            button.classList.add("active");
            
            setTimeout(()=>{
                reaction.classList.remove("active");
                button.classList.remove("active");
                swipe();
            }, 1000);
    
            if (reaction.id == "like"){
                likeReaction.push(reaction.id)
                
            }
        }else{
            location.reload(true);
        }  
    })    
}

buttonHandler(likeBtn, like)
buttonHandler(nopeBtn, nope)

function endApp(){
    document.querySelector(".container").innerHTML = dog.getEnd(likeReaction.length);
}


function render(){
    if (index > data.length -1){
        document.querySelector(".container").innerHTML = dog.getEnd(likeReaction.length);
    }else{
        document.querySelector(".container").innerHTML = dog.renderDogs();
    }
   
}

let dog = getNewDog();
render();
