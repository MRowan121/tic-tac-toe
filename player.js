class Player {
    constructor(playerDetails) {
        this.id = playerDetails.id;
        this.token = playerDetails.token;
        this.wins = 0;
        this.activePlayer = false;
        this.tokenPlacement = [];
    };

    increaseWins() {
        this.wins ++;
    };
};