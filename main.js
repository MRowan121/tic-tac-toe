var playerOneToken = document.querySelector('.player-one-token')
var playerOneWins = document.querySelector('.player-one-wins')
var turnDisplay = document.querySelector('.turn-display');
var playField = document.querySelector('.game-board')
var allBoxes = document.querySelectorAll('.game-board-box');
var playerTwoToken = document.querySelector('.player-two-token')
var playerTwoWins = document.querySelector('.player-two-wins')

var game = new Game();
var playerOne = new Player({id: 'Player One',token: '💩'});
var playerTwo = new Player({id: 'Player Two', token: '🐐'});
var activeToken;

game.addPlayers(playerOne);
game.addPlayers(playerTwo);

playerOneToken.innerHTML = game.players[0].token;
playerTwoToken.innerHTML = game.players[1].token;
turnDisplay.innerHTML = `It's ${game.players[0].token}'s turn!`

allBoxes.forEach(box => box.addEventListener('click', function(event) {
    var clickedBox = event.target;
    var clickedBoxIndex = parseInt(clickedBox.getAttribute('id'));
    game.takeTurn(clickedBoxIndex);
    clickedBox.innerHTML = game.gameBoard[clickedBoxIndex];
    displayMessages();
}))

function resetScreen() {
    for(var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = '';
    };
};

function switchActiveToken() {
    for(var i = 0; i < game.players.length; i++) {
        if(game.players[i].activePlayer === true) {
            activeToken = game.players[i].token;
            turnDisplay.innerText = `It's ${activeToken}'s turn!`;
        };
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
        turnDisplay.innerText = `${game.winner} wins!`;
        playerOneWins.innerHTML = `${game.players[0].wins} wins!`;
        playerTwoWins.innerHTML = `${game.players[1].wins} wins!`;
        setTimeout(function () {
            game.resetBoard();
            resetScreen();
            switchActiveToken();
        }, 1500);
    } else {
        switchActiveToken();
    };
};