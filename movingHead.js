let movingDown = true;
let movingUp = false;
let moveLeft  = true;
let moveRight = false;
let ballSpeed = 2;

// Possible problem: if hits corner of screen and so there are two collision cases
function checkCollision(ballPos){
    let topBall = ballPos.top;
    let bottomBall = ballPos.bottom;
    let leftBall = ballPos.left;
    let rightBall = ballPos.right;
    // move down 
    if (!(bottomBall <= window.innerHeight)) {
        return [true, "down"];
    }
    // move up
    if (!(topBall >= 0)) {
        return [true, "up"]
    }
    // move left
    if (!(leftBall >= 0)) {
        return [true, "left"]
    }
    // move right
    if (!(rightBall <= window.innerWidth)) {
        return [true, "right"]
    }

    return false;
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

let moveHeadTimer  = setInterval(moveHead, 17); // set to 60000 for 60 seconds 
// moveHeadTimer called too fast, call sep function for collision test true/false
function moveHead() {
    const element = document.getElementsByClassName("sexy");
    let ball = element[0];
    let ballPos = ball.getBoundingClientRect();
    let topBall = ballPos.top;
    let leftBall = ballPos.left;
    // check to see if collision or no
    let collision = checkCollision(ballPos)
    // then move direction depending
    if (collision) {
        changeDirection(collision[1]) // gives changeDirection where to go
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