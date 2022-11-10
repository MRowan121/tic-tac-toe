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
playerOne.activePlayer = true;
var activeToken;

game.addPlayers(playerOne);
game.addPlayers(playerTwo);

playerOneToken.innerHTML = game.players[0].token;
playerTwoToken.innerHTML = game.players[1].token;