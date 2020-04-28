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

export function isAllowToThrowIt(newCard, cardPile, color) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  const indexCardPile = cardPile - 1;
  const pileCards = cards[indexCardPile];
  return (
    (newCards.number != null && newCards.number == pileCards.number) ||
    newCards.color == pileCards.color ||
    ((pileCards.special == "wild" || pileCards.special == "wild-drawFour") &&
      newCards.color == color) ||
    (newCards.special != null && newCards.special == pileCards.special) ||
    newCards.special == "wild" ||
    newCards.special == "wild-drawFour"
  );
}

export function isReverse(newCard) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  return newCards.special == "reverse";
}

export function isSkip(newCard) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  return newCards.special == "skip";
}

export function isWild(newCard) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  return newCards.special == "wild" || newCards.special == "wild-drawFour";
}
