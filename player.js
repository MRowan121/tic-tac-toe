class Player {
    constructor(playerDetails) {
        this.id = playerDetails.id;
        this.token = playerDetails.token;
        this.wins = playerDetails.wins || 0;
        this.activePlayer = false;
        this.tokenPlacement = [];
    };

    increaseWins() {
        this.wins = this.wins + 1;
    };
};


module.exports = Player;