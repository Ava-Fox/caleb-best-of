let movingDown = true;
let movingUp = false;
let moveLeft  = true;
let moveRight = false;
let ballSpeed = 2;

function checkCollision(ball){
    // move down 
    if (!(bottomBall <= window.innerHeight)) {
        return [true, "down"];
    }
    if (!(topBall >= 0)) {
        return [true]
    }
    if (!(leftBall >= 0)) {

    }
    if (!(rightBall <= window.innerWidth)) {

    }

    return false;
}
// Checks collision: which is the if bottomBall <= window.innerHeight thing
    // could call changeDirection with which direction to move or just return false
// but the moving logic is gonna get messed up right?

function changeDirection(direction){
    // move down
    if (direction === "down") {
        // this actually moves the ball
        ball.style.top = `${topBall + ballSpeed}px`
        movingDown = true;
        movingUp = false;
    }
    else if (direction === "up") {
        ball.style.top = `${topBall - ballSpeed}px`
        movingUp = true;
        movingDown = false;
    }
    else if (direction === "left") {
        ball.style.left = `${leftBall - ballSpeed}px`
        moveLeft = true;
        moveRight = false;
    }

    else if (direction === "right") {
        ball.style.left = `${leftBall + ballSpeed}px`
        moveRight = true;
        moveLeft = false;
    }

    if (movingDown) {
        if (bottomBall <= window.innerHeight) {
            ball.style.top = `${topBall + ballSpeed}px`
        }
        else {
            movingDown = false;
            movingUp = true;
        }
    }
    else if (movingUp) {
        if (topBall >= 0) {
            ball.style.top = `${topBall - ballSpeed}px`
        }
        else {
            movingUp = false;
            movingDown = true;
        }
    }
    if (moveLeft) {
        console.log('test left');

        if (leftBall >= 0) {
            ball.style.left = `${leftBall - ballSpeed}px`
        }
        // Hit Left wall
        else {
            moveLeft = false;
            moveRight = true;
            // scoreRight++;
            // scoreRightEl.innerHTML = scoreRight;
        }
    }
    else if (moveRight) {
        console.log('test right');

        if (rightBall <= window.innerWidth) {
            ball.style.left = `${leftBall + ballSpeed}px`
        }
        // Hit right wall
        else {
            moveRight = false;
            moveLeft = true;
            // scoreLeft++;
            // scoreLeftEl.innerHTML = scoreLeft;  
        }
    }
}

let moveHeadTimer  = setInterval(moveHead, 2000); // set to 60000 for 60 seconds 
// moveHeadTimer called too fast, call sep function for collision test true/false
function moveHead() {
    let collision = checkCollision()
    if (collision) {
        changeDirection(collision[1]) // gives changeDirection where to go
    }
    const element = document.getElementsByClassName("sexy");
    let ball = element[0];
    let ballPos = ball.getBoundingClientRect();
    let topBall = ballPos.top;
    let bottomBall = ballPos.bottom;
    let leftBall = ballPos.left;
    let rightBall = ballPos.right;
    
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