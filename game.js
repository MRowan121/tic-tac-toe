class Game {
    constructor() {
        this.players = [];
        this.turnNumber = 1;
        this.gameBoard = ['','','','','','','','',''];
        this.winCombos = [
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

    checkForWinner(activePlayer) {
        for(var i = 0; i < this.winCombos.length; i++) {
            var winCombo = this.winCombos[i];
            var a = this.gameBoard[winCombo[0]];
            var b = this.gameBoard[winCombo[1]];
            var c = this.gameBoard[winCombo[2]];
            if(a === '' || b === '' || c === '') {
            } else if(a === b && b === c) {
                activePlayer.increaseWins();
                this.winner = activePlayer.token;
            };
        };
    };

    checkForDraw() {
        if(this.winner === undefined && this.turnNumber === 10) {
            this.draw = true;
        };
    };

    resetBoard() {
        for(var i = 0; i < this.players.length; i++) {
            this.turnNumber = 1;
            this.players[i].tokenPlacement = [];
            this.gameBoard = ['','','','','','','','',''];
            this.winner = undefined;
        };
    };
};