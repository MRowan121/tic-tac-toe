var playerOneToken = document.getElementById('player-one-token');
var playerOneWins = document.getElementById('player-one-wins');
var teamSelection = document.querySelector('.team-selection');
var pickYourTeam = document.querySelector('.pick-your-team');
var turnDisplay = document.querySelector('.turn-display');
var allBoxes = document.querySelectorAll('.game-board-box');
var playerTwoToken = document.getElementById('player-two-token');
var playerTwoWins = document.getElementById('player-two-wins');

var allLogos = [
    './logos/colts.webp',
    './logos/jaguars.webp',
    './logos/texans.webp',
    './logos/titans.webp',
];

var game = new Game();
var playerOne = new Player({id: 'Player One',token: ''});
var playerTwo = new Player({id: 'Player Two', token: ''});
var activeToken;

for(var i = 0; i < allLogos.length; i++) {
    pickYourTeam.innerHTML += `<img src="${allLogos[i]}" id="${i}"/>`;
}

pickYourTeam.addEventListener('click', function(event) {
    var clickedLogo = event.target;
    if(playerOne.token === '') {
        playerOneToken.innerHTML = `<img src="${allLogos[clickedLogo.id]}"/>`;
        playerOne.token = `<img src="${allLogos[clickedLogo.id]}"/>`;
        playerOneWins.innerHTML = logWins(game.players[0]);
        pickYourTeam.removeChild(clickedLogo);
    } else {
        playerTwoToken.innerHTML = `<img src="${allLogos[clickedLogo.id]}"/>`;
        playerTwo.token = `<img src="${allLogos[clickedLogo.id]}"/>`;
        playerTwoWins.innerHTML = logWins(game.players[1]);
        changeScreen();
    };
});

function changeScreen() {
    teamSelection.classList.toggle('hidden');
    turnDisplay.classList.toggle('hidden');
    turnDisplay.innerHTML = `${playerOne.token}'s turn!`;
};

game.addPlayer(playerOne);
game.addPlayer(playerTwo);

allBoxes.forEach(box => box.addEventListener('click', function(event) {
    var clickedBox = event.target;
    var clickedBoxIndex = parseInt(clickedBox.getAttribute('id'));
    game.takeTurn(clickedBoxIndex);
    clickedBox.innerHTML = game.gameBoard[clickedBoxIndex];
    displayMessages();
}));

function resetScreen() {
    for(var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = '';
    };
};

function switchActiveToken() {
    for(var i = 0; i < game.players.length; i++) {
        if(game.players[i].activePlayer === true) {
            activeToken = game.players[i].token;
            turnDisplay.innerHTML = `${activeToken}'s turn!`;
        };
    };
};

function logWins(player) {
    if(player.wins === 1) {
        return `${player.wins} win!`;
    } else {
        return `${player.wins} wins!`;
    };
};

function displayMessages() {
    if(game.draw === true) {
        turnDisplay.innerText = `It's a draw!`;
        setTimeout(function() {
            game.resetBoard();
            resetScreen();
            switchActiveToken();
        }, 1500);
    } else if(game.winner !== undefined) {
        turnDisplay.innerHTML = `${game.winner} win!`;
        playerOneWins.innerHTML = logWins(game.players[0]);
        playerTwoWins.innerHTML = logWins(game.players[1]);
        setTimeout(function () {
            game.resetBoard();
            resetScreen();
            switchActiveToken();
        }, 1500);
    } else {
        switchActiveToken();
    };
};