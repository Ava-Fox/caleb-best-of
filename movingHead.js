// BITCHIN HOTKEY: CMD L
// OPTION ARROW


let xDirection = 1;
let yDirection = 1;
let ballSpeed = 2;

// Possible problem: if hits corner of screen and so there are two collision cases
function checkCollision(ballPos){
    let topBall = ballPos.top;
    let bottomBall = ballPos.top + ballPos.height;
    let leftBall = ballPos.left;
    let rightBall = ballPos.left + ballPos.width;
    // move down
    if (topBall <= 0) {
        // if it hits the top, then there has been a top collision and you should move down
        yDirection = 1;
    }

    // move up
    // bottom collision
    if (bottomBall >= window.innerHeight) {
        yDirection = -1;
    }

    // right collision  move left
    if (rightBall >= window.innerWidth) {
        xDirection = -1;
    }
    // hit left
    if (leftBall <= 0) {
        xDirection = 1;
        }
    return 0;
}


// Deactivated moveHead function
let moveHeadTimer  = setInterval(moveHead, 17); // set to 60000 for 60 seconds 
// moveHeadTimer called too fast, call sep function for collision test true/false
const element = document.getElementsByClassName("sexy");
let ball = element[0];

function moveHead() {
    let ballPos = ball.getBoundingClientRect();
    console.log(ballPos);
    let topBall = ballPos.top;
    let leftBall = ballPos.left;
    console.log(ballPos)
    // check to see if collision or no
    checkCollision(ballPos)

    ball.style.top = `${topBall + (ballSpeed * yDirection)}px`
    ball.style.left = `${leftBall + (ballSpeed * xDirection)}px`
    
    return ballPos;
}

let visibility = true;
let timer  = setInterval(changeDiv, 2000); //set to 60000 for 60 seconds 2000
// IIFE : Immediately Invoked Function Expression (Just, like... a thing to know)
function changeDiv() {
    var currentElement = document.getElementsByClassName("marry-me");
    console.log("hey Caleb this isn't a joke");
    
    if (visibility) {
        currentElement[0].style.visibility='hidden';
    }
    else {
        currentElement[0].style.visibility='visible';
    }
    // whatever are give oposite
    visibility = !visibility;

}

// HAHAHA this is so dumb...