const cardTypes = {
    clubs: "♣️",
    spades: "♠️",
    hearts: "🖤",
    diamond: "◆",
};

const cards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
];

// { desc: "", type: , symbol}
export function initialiseDeck() {
    const deckOfCards = [];
    for (const val in cardTypes) {
        for (let card of cards) {
            const obj = {
                desc: `${card} of ${val}`,
                type: val,
                value: card,
                symbol: cardTypes[val],
            };
            deckOfCards.push(obj);
        }
    }
    return deckOfCards;
}
