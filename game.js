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
            this.checkForWinner(this.players[i])
            this.players[i].activePlayer = !this.players[i].activePlayer;
        };
    };

    takeTurn(num) {
        for(var i = 0; i < this.players.length; i++) {
            if(this.gameBoard[num] === '' && this.players[i].activePlayer === true) {
                this.gameBoard.splice(num, 1, this.players[i].token);
                this.players[i].tokenPlacement.push(num);
                this.turnNumber = this.turnNumber + 1;
                console.log(this.gameBoard);
            };
        };
        this.switchActivePlayer();
        this.checkForDraw();
    };

    checkForWinner(activePlayer) {
        for(var i = 0; i < this.winning.length; i++) {
            if(activePlayer.tokenPlacement.includes(this.winning[i][0]) 
            && activePlayer.tokenPlacement.includes(this.winning[i][1]) 
            && activePlayer.tokenPlacement.includes(this.winning[i][2])) {
                activePlayer.increaseWins();
                this.resetBoard();
                console.log(`${activePlayer.id} Wins!`)
            };
        };
    };

    checkForDraw() {
        if(this.turnNumber === 10) {
            this.resetBoard();
            console.log(`DRAW!`)
        };
    };

    resetBoard() {
        this.gameNumber = this.gameNumber + 1;
        for(var i = 0; i < this.players.length; i++) {
            if(this.gameNumber > 3) {
                this.gameNumber = 1;
                this.turnNumber = 1;
                this.players[i].tokenPlacement = [];
                // Need to understand why line 71 isn't clearing out both players wins.
                // this.players[i].wins = 0;
                this.players[0].wins = 0;
                this.players[1].wins = 0;
                this.gameBoard = ['','','','','','','','',''];
            } else {
                this.turnNumber = 1;
                this.players[i].tokenPlacement = [];
                this.gameBoard = ['','','','','','','','',''];
            }
        }
    }
};

module.exports = Game;