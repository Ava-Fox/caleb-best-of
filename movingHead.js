// BITCHIN HOTKEY: CMD L
// OPTION ARROW

let movingDown = true;
let movingUp = false;
let moveLeft  = false;
let moveRight = true;
let ballSpeed = 2;

// Possible problem: if hits corner of screen and so there are two collision cases
function checkCollision(ballPos){
    let topBall = ballPos.top;
    let bottomBall = ballPos.bottom;
    let leftBall = ballPos.left;
    let rightBall = ballPos.right;
    // move down
    console.log("window: ",  window.innerWidth);
    console.log('1')

    if (topBall <= 0) {
        // if it hits the top, then there has been a top collision and you should move down
        return "down";
    }

    // move up
    console.log('2')
    // bottom collision
    if (bottomBall >= window.innerHeight) {
        return "up";
    }
    console.log('3')

    // right collision  move left
    if (rightBall >= window.innerWidth) {
        console.log("Hit left");

        return "right";
    }
    console.log('4')
    // hit left
    if (leftBall <= 0) {
        return "left";
        }
    return 0;
}

function changeDirection(direction){
    // move down
    if (direction === "down") {
        movingDown = true;
        movingUp = false;
    }
    else if (direction === "up") {
        movingUp = true;
        movingDown = false;
    }
    else if (direction === "left") {
        moveLeft = true;
        moveRight = false;
    }
    else if (direction === "right") {
        moveRight = true;
        moveLeft = false;
    }
}
// Deactivated moveHead function
let moveHeadTimer  = setInterval(moveHead, 17); // set to 60000 for 60 seconds 
// moveHeadTimer called too fast, call sep function for collision test true/false
const element = document.getElementsByClassName("sexy");
let ball = element[0];
function moveHead() {
 
    let ballPos = ball.getBoundingClientRect();
    let topBall = ballPos.top;
    let leftBall = ballPos.left;
    // check to see if collision or no
    let collision = checkCollision(ballPos)

    // then move direction depending
    if (collision != 0) {
        changeDirection(collision) // gives changeDirection where to go
    }
    if (movingDown) {
        ball.style.top = `${topBall + ballSpeed}px`
    }
    else if (movingUp) {
        ball.style.top = `${topBall - ballSpeed}px`
    }
    if (moveLeft) {
        ball.style.left = `${leftBall - ballSpeed}px`
    }
    else if (moveRight) {
        ball.style.left = `${leftBall + ballSpeed}px`
    }
    return ballPos;
}

let visibility = true;
let timer  = setInterval(changeDiv, 2000); //set to 60000 for 60 seconds 2000
// IIFE : Immediately Invoked Function Expression
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
    moveHead();
    changeDiv();

// function head() {
//     moveHead();
//     changeDiv();
// }
// head();