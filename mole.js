
let curMoleTile;
let curMolePlant;
let score=0;
let gameOver = false;

window.onload = function () {
    setgame()
}

function setgame() {

    for(let i = 0; i < 9; i++){
        tils = document.createElement('div');
        tils.id = i.toString();
        // ADD EVENT LISTNER
        tils.addEventListener("click", selectTile) 
        // APPEND DIV ONTO BOARD
        document.getElementById('board').appendChild(tils)   
    }
    setInterval(setCurrentMole, 1000);
    setInterval(setCurrentPlant, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setCurrentMole() {
    if(gameOver){
        return;
    }
    if (curMoleTile) {
        curMoleTile.innerHTML = '';
    }
    let num = getRandomTile();
    if (curMolePlant && curMolePlant.id === num) {
        return;
    }
    let mole = document.createElement('img');
    mole.src = './monty-mole.png'
    curMoleTile = document.getElementById(num);
    curMoleTile.append(mole);

}

function setCurrentPlant() {
    if(gameOver){
        return;
    }
    if (curMolePlant) {
        curMolePlant.innerHTML = '';
    }
    let num = getRandomTile();
    if (curMoleTile && curMoleTile.id === num) {
        return;
    }
    let plant = document.createElement('img');
    plant.src = './piranha-plant.png'
    curMolePlant = document.getElementById(num);
    curMolePlant.append(plant)

}

function selectTile (){
    if(this === curMoleTile){
        score +=10;
        document.getElementById('score').innerText = "SCORE " +score;
    }
    if(this === curMolePlant){
        gameOver = true;
        document.getElementById('score').innerText = 'GAME OVER YOUR SCORE IS ' + score
        
    }
}