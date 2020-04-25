import { cards } from "../utils/cards";
const cardsCount = cards.length;
export function range() {
  var deck = [];
  for (var i = 1; i <= cardsCount; i++) {
    deck.push(i);
  }
  return deck;
}
export const deck = range();
const deckDict = {};
export function takeACard(deck) {
  var random_card = Math.floor(Math.random() * cardsCount);
  const card = deck[random_card];
  if (deckDict[card] == null) {
    deckDict[card] = true;
    console.log(deckDict);
    return card;
  } else {
    console.log("volviendo a buscar una carta");
    return takeACard(deck);
  }
}

class Game {
  constructor(playerCount) {
    this.playerCards = {
      1: [1, 4, 5, 6],
      2: [3, 8, 12],
    };
    this.usedCards = {
      1: true,
      4: true,
    };
  }

  isCardUsed(card) {
    return this.usedCards[card] || false;
  }

  playCard(playerNumber, card) {}

  drawFromPile(playerNumber) {}
}
