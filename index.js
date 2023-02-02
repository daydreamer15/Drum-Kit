
//part of code that detects button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

  function handleclick() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);
}
}
//part of the code that detects keyboard press

    document.addEventListener("keydown", function(event){
        makesound(event.key);
        buttonAnimation(event.key);
    });

    
function makesound(key){
    switch(key){
        case "D":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
        case "R":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "E":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    
        case "A":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    
        case "M":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
        case "E":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    
        case "R":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    
        default: console.log(buttonInnerHTML);
        }
}

function buttonAnimation(currentKey){
    var activateButton  = document.querySelector("." + currentKey);
    activateButton.classList.add("pressed");

    setTimeout(function(){
        activateButton.classList.remove("pressed");
    },100
    );
}
