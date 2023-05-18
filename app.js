//Campo de batalla
const battleCamp = document.getElementById('battle-camp');
const battleMessage = document.getElementById('battle-message');

//Jugadores
const imgAttackPlayer = document.getElementById('img-attack-player');
const imgAttackPc = document.getElementById('img-attack-pc');

//Botones para jugador
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissor = document.getElementById('button-scissor');

let PlayerOption;
let pcOption;
let imgPlayer;
let imgPc;

const images = [
    {
        name: "Rock",
        URL: "img/rock.png"
    },

    {
        name: "Paper",
        URL: "img/paper.png"
    },

    {
        name:"Scissor",
        URL: "img/scissor.png"
    }
]

//Acción Jugador
buttonRock.addEventListener('click', function () {
    PlayerOption = "Rock";
    PcOption();
});

buttonPaper.addEventListener('click', function () {
    PlayerOption = "Paper";
    PcOption();
});

buttonScissor.addEventListener('click', function () {
    PlayerOption = "Scissor";
    PcOption();
});

// Acción PC
function PcOption() {
    var random = randomNumber();
    if (random == 0) {
        pcOption = "Rock";
    } else if (random == 1) {
        pcOption = "Paper";
    } else if (random = 2) {
        pcOption = "Scissor";
    }
    startBattle();
}

function randomNumber() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

function startBattle() {
    if (PlayerOption == pcOption) {
        battleMessage.innerHTML = "Draw!"
    } else if (PlayerOption == "Rock" && pcOption == "Scissor") {
        battleMessage.innerHTML = "You Won!";
    } else if (PlayerOption == "Paper" && pcOption == "Rock") {
        battleMessage.innerHTML = "You Won!";
    } else if (PlayerOption == "Scissor" && pcOption == "Paper") {
        battleMessage.innerHTML = "You Won!";
    } else {
        battleMessage.innerHTML = "You lost.";
    }
    addImages();
}

function addImages() {
    for(let i = 0; i<images.length; i++){
        if(PlayerOption == images[i].name){
            imgPlayer = images[i].URL;
            var insert = `<img class="img-battle-player" src=${imgPlayer} alt="option">`;
            imgAttackPlayer.innerHTML = insert;
        }

        if(pcOption == images[i].name){
            imgPc = images[i].URL;
            var insert = `<img class="img-battle-pc" src=${imgPc} alt="option">`;
            imgAttackPc.innerHTML = insert;
        }
    }
}