const Game = require('./game');
const Player = require('./player');

var game = new Game();
var playerOne = new Player({id: 'Player One',token: '💩'});
var playerTwo = new Player({id: 'Player Two', token: '🐐'});
playerOne.activePlayer = true;

// ~~~~~~~~~~~~~~~~~~~~

game.addPlayers(playerOne);
game.addPlayers(playerTwo);
console.log(game)
game.takeTurn(4);
game.takeTurn(8);
game.takeTurn(2);
game.takeTurn(6);
game.takeTurn(3);
game.takeTurn(1);
game.takeTurn(7);
game.takeTurn(5);
game.takeTurn(0);
console.log(game)
game.takeTurn(1);
game.takeTurn(2);
game.takeTurn(3);
game.takeTurn(5);
game.takeTurn(4);
game.takeTurn(6);
game.takeTurn(7);
console.log(game)
game.takeTurn(1);
game.takeTurn(2);
game.takeTurn(3);
game.takeTurn(5);
game.takeTurn(4);
game.takeTurn(8);
console.log(game)