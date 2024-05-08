import { useState } from "react";
import { initialiseDeck } from "../../utils/cardUtils";
import Card from "../Card/Card";
import "./CardGame.css";


function CardGame() {
    const [deck, setDeck] = useState(initialiseDeck());
    const [drawnCards, setDrawnCards] = useState([]);

    const shuffleCards = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    };

    const handleDraw = () => {
        if (deck.length === 0) {
            alert("Deck is empty");
            return;
        }
        const cardsDrawn = [];
        const numberOfCardsToDraw = Math.min(deck.length, 5);
        const updatedDeck = shuffleCards([...deck]);

        for (let i = 0; i < numberOfCardsToDraw; i++) {
            const card = updatedDeck.pop();
            //console.log(card, updatedDeck);
            cardsDrawn.push(card);
        }
        //console.log(updatedDeck);
        setDeck([...updatedDeck]);
        setDrawnCards([...cardsDrawn, ...drawnCards]);
    };
    
    return (
        <div className="game-container">
            <button onClick={handleDraw}>Draw Cards</button>
            <div className="card-container">
                {/* <div className="row"> */}
                    {drawnCards.map((card, index) => (
                        <Card card={card} key={index} />
                    ))}
                {/* </div> */}
            </div>
        </div>
    );
}

export default CardGame;
