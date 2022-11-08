class Player {
    constructor(playerDetails) {
        this.id = playerDetails.id;
        this.token = playerDetails.token;
        this.wins = playerDetails.wins || 0;
    };

    increaseWins() {
        // Will need to come back and add if statement
        // if player wins, increase win count. Else, do nothing.
        this.wins = this.wins + 1;
    };
};


module.exports = Player;