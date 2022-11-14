class Game {
    constructor() {
        this.players = [];
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
        this.winner = undefined;
        this.draw = false;
    };

    addPlayers(playerDetails) {
        this.players.push(playerDetails)
        this.players[0].activePlayer = true;
    };

    switchActivePlayer() {
        for(var i = 0; i < this.players.length; i++) {
            this.players[i].activePlayer = !this.players[i].activePlayer;
        };
    };

    takeTurn(num) {
        for(var i = 0; i < this.players.length; i++) {
            if(this.gameBoard[num] === '' && this.players[i].activePlayer === true) {
                this.gameBoard.splice(num, 1, this.players[i].token);
                this.players[i].tokenPlacement.push(num);
                this.turnNumber ++;
            };
        };
    };

    checkForWinner() {
        for(var i = 0; i < this.players.length; i++) {
            for(var j = 0; j < this.winning.length; i++) {
                if(this.players[i].tokenPlacement.includes(this.winning[j][0]) 
                && this.players[i].tokenPlacement.includes(this.winning[j][1]) 
                && this.players[i].tokenPlacement.includes(this.winning[j][2])) {
                    this.players[i].increaseWins();
                    this.winner = this.players[i].token;
                };
            };
        };
    };

    resetBoard() {
        for(var i = 0; i < this.players.length; i++) {
            this.turnNumber = 1;
            this.players[i].tokenPlacement = [];
            this.gameBoard = ['','','','','','','','',''];
            this.winner = undefined;
        }
    }
};