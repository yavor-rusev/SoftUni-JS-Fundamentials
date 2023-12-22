function cardGame(playersArray) {
    let allPlayers = {};

    for (let playerInfo of playersArray) {
        let [name, cards] = playerInfo.split(": ");
        let cardsArray = cards.split(", ");

        if (!allPlayers.hasOwnProperty(name)) {
            allPlayers[name] = new Set(cardsArray);

        } else {
            let currentCardsArray = Array.from(allPlayers[name]);
            let allCardsArray = currentCardsArray.concat(cardsArray);
            
            allPlayers[name] = new Set(allCardsArray);
        }
    }

    for (let player of Object.entries(allPlayers)) {
        let [name, cardSet] = player;
        let cardsValueSum = 0;

        for (let currentCard of cardSet) {
            let currentCardSymbolsArray = currentCard.split("");
            let cardPower = '';
            let cardType = '';
            let cardValue = 0;

            if (currentCardSymbolsArray.length === 2) {
                cardPower = currentCardSymbolsArray[0];
                cardType = currentCardSymbolsArray[1];

            } else if (currentCardSymbolsArray.length === 3) {
                cardType = currentCardSymbolsArray.pop()[0];
                cardPower = currentCardSymbolsArray.join('');
            }

            if (Number(cardPower)) {
                cardPower = Number(cardPower);

            } else {
                switch (cardPower) {
                    case "J": cardPower = 11; break;
                    case "Q": cardPower = 12; break;
                    case "K": cardPower = 13; break;
                    case "A": cardPower = 14; break;
                }
            }

            switch (cardType) {
                case "S": cardValue = cardPower * 4; break;
                case "H": cardValue = cardPower * 3; break;
                case "D": cardValue = cardPower * 2; break;
                case "C": cardValue = cardPower * 1; break;
            }

            cardsValueSum += cardValue;
        }

        console.log(`${name}: ${cardsValueSum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])