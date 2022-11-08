class Player {
    constructor(playerDetails) {
        this.id = playerDetails.id;
        this.token = playerDetails.token;
        this.wins = playerDetails.wins || 0;
    };
};


module.exports = Player;