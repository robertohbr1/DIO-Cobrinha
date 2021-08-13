let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8,
    y: 8
}
let direction = "r";
let food = {
    x: 0,
    y: 0
}
let newKey = true;

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x * box, snake[i].y * box, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x * box, food.y * box, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(! newKey) {return};
    if(event.keyCode == 37 && direction != "r") direction = "l";
    if(event.keyCode == 39 && direction != "l") direction = "r";
    if(event.keyCode == 38 && direction != "d") direction = "u";
    if(event.keyCode == 40 && direction != "u") direction = "d";
    newKey = false;
}

function createFood(){
    food.x = Math.floor(Math.random() * 15 + 1);
    food.y = Math.floor(Math.random() * 15 + 1);

    for(i=0; i < snake.length; i++){
        if(food.x == snake[i].x && food.y == snake[i].y){
            createFood();
            break;
        }
    }

}

function mudaVelocidade(){
    let x = document.getElementById('velocidade').value;
    var vel;
    if(x == 'slow') vel = 300;
    if(x == 'medium') vel = 100;
    if(x == 'fast') vel = 50;
    
    clearInterval(jogo);    
    jogo = setInterval(iniciarJogo, vel);
    document.getElementById('velocidade').blur();
}

function iniciarJogo(){
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "r") snakeX++;
    if(direction == "l") snakeX--;
    if(direction == "u") snakeY--;
    if(direction == "d") snakeY++;
    newKey = true;

    if(snakeX > 15 && direction == "r") snakeX = 0;
    if(snakeX < 0 && direction == "l") snakeX = 15;
    if(snakeY > 15 && direction == "d") snakeY = 0;
    if(snakeY < 0 && direction == "u") snakeY = 15;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        createFood();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

    criarBG();
    criarCobrinha();
    drawFood();

    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game over :(');
        }
    }    

    document.getElementById("snakeSize").value = snake.length;
}

createFood();
let jogo = setInterval(iniciarJogo, 500);
mudaVelocidade();
