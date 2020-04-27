import { cards } from "../utils/cards";
import CardDisplay from "../components/CardDisplay";
import db from "../utils/firebase";
const cardsCount = cards.length;

export function range() {
  var deck = [];
  for (var i = 1; i <= cardsCount; i++) {
    deck.push(i);
  }
  return deck;
}

export function takeACard(usedCards) {
  var random_card = Math.floor(Math.random() * cardsCount);
  const deck = range();
  const card = deck[random_card];

  if (usedCards[card] == null) {
    usedCards[card] = true;
    console.log("usedcards", usedCards);
    return card;
  } else if (Object.keys(usedCards).length == 108) {
    alert("No hay mas cartas");
  } else {
    return takeACard(usedCards);
  }
}

export function isAllowToThrowIt(newCard, cardPile) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  const indexCardPile = cardPile - 1;
  const pileCards = cards[indexCardPile];
  if (
    newCards.number == pileCards.number ||
    newCards.color == pileCards.color ||
    newCards.special == pileCards.special ||
    newCards.special == "wild" ||
    newCards.special == "wild-drawFour"
  ) {
    return true;
  } else if (
    pileCards.special == "wild" ||
    pileCards.special == "wild-drawFour"
  ) {
    return true;
  } else {
    return false;
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
