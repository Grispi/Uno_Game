import { cards } from "../utils/cards";

const cardsCount = cards.length;

export function range() {
  var deck = [];
  for (var i = 1; i <= cardsCount; i++) {
    deck.push(i);
  }
  return deck;
}

export function takeACard(usedCards, playingCards) {
  let random_card = Math.floor(Math.random() * cardsCount);

  const deck = range();
  const card = deck[random_card];

  if (!usedCards[card]) {
    usedCards[card] = true;
    return card;
  } else if (
    Object.keys(usedCards).filter((card) => usedCards[card]).length == 108
  ) {
    console.log("No hay mas cartas");
    // las cartas usadas se vuelven al mazo PPal
    Object.keys(usedCards).forEach((key) => {
      usedCards[key] = false;
    });
    // Se agregan las cartas que tienen los jugadores y las del pozo
    playingCards.forEach((card) => (usedCards[card] = true));

    return takeACard(usedCards, playingCards);
  } else {
    return takeACard(usedCards, playingCards);
  }
}

export function isAllowedToThrow(
  newCard,
  cardPile,
  color,
  drawCount,
  playerCards
) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  const indexCardPile = cardPile - 1;
  const pileCards = cards[indexCardPile];
  if (drawCount > 0) {
    if (
      (pileCards.special == "wild-drawFour" &&
        newCards.special == "wild-drawFour") ||
      (pileCards.special == "drawTwo" && newCards.special == "drawTwo")
    ) {
      return true;
    } else {
      return false;
    }
  } else if (newCards.special == "wild-drawFour") {
    if (
      playerCards.find((card) => {
        if (pileCards.color) {
          return cards[card - 1].color == pileCards.color;
        } else if (color) {
          return cards[card - 1].color == color;
        }
      })
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return (
      (newCards.number != null && newCards.number == pileCards.number) ||
      newCards.color == pileCards.color ||
      ((pileCards.special == "wild" || pileCards.special == "wild-drawFour") &&
        newCards.color == color) ||
      (newCards.special != null && newCards.special == pileCards.special) ||
      newCards.special == "wild"
    );
  }
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

export function isWildDrawFour(newCard) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  return newCards.special == "wild-drawFour";
}
export function isDrawTwo(newCard) {
  const indexNewCard = newCard - 1;
  const newCards = cards[indexNewCard];
  return newCards.special == "drawTwo";
}

const colorOrderMap = {
  blue: 1,
  green: 2,
  red: 3,
  yellow: 4,
  undefined: 5,
};
const specialOrderMap = {
  undefined: 1,
  skip: 2,
  reverse: 3,
  drawTwo: 4,
  wild: 5,
  "wild-drawFour": 6,
};
export const sortCards = (cardsArray) => {
  const sorted = cardsArray.slice();

  sorted.sort((cardValue1, cardValue2) => {
    const card1 = cards[cardValue1 - 1];
    const card2 = cards[cardValue2 - 1];
    const colorOrder = colorOrderMap[card1.color] - colorOrderMap[card2.color];
    if (colorOrder === 0) {
      const numberOrder =
        (card1.number != null ? card1.number : 10) -
        (card2.number != null ? card2.number : 10);
      if (numberOrder === 0) {
        const specialOrder =
          specialOrderMap[card1.special] - specialOrderMap[card2.special];
        return specialOrder;
      }
      return numberOrder;
    }

    return colorOrder;
  });

  return sorted;
};
