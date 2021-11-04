let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//create aleatory order colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.lenght] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//light the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//check if buttons clickeds is same as order generaty in game
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.lenght == order.lenght){
        alert(`Pontuação: ${score}\nVocê acertou ! Próximo nível !`);
        nextLevel();
    }
}

//function for clicked by usuary
let click = (color) => {
    clickedOrder[clickedOrder.lenght] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    },250);
}

// color return function
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

//next level game function
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//game over function
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\n Clique em "OK" para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//game start function
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}

//click event for colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//start game
playGame();