var Player = require('./player')

class Game {
    constructor() {
        this.players = [];
        this.gameNumber = 1;
        this.turnNumber = 1;
        this.gameBoard = ['','','','','','','','',''];
        this.winning = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    };

    addPlayers(playerDetails) {
        this.players.push(playerDetails)
    };

    switchActivePlayer() {
        for(var i = 0; i < this.players.length; i++) {
            this.players[i].activePlayer = !this.players[i].activePlayer;
        };
    };
};

module.exports = Game;