import db from "~/utils/firebase/index";
import {
  takeACard,
  isReverse,
  isSkip,
  isWildDrawFour,
  isDrawTwo,
} from "~/utils/game";

export function yellOne(player, roomId, playersActive, room) {
  const roomRef = db.collection("rooms").doc(roomId);
  const playerCards = playersActive[room.currentMove].data().cards;
  let pennalty;
  if (playerCards.length > 2) {
    // TIENE Q LEVANTAR 4 cartas
    pennalty = 4;
  } else {
    pennalty = null;
  }

  roomRef.set(
    {
      yellOne: player,
      pennalty: pennalty,
    },
    { merge: true }
  );
}
export function getPlayingCards(playersActive, room) {
  const cards = [];
  playersActive.forEach((player) => {
    cards.push(...player.data().cards);
  });
  cards.push(room.discardPile);
  return cards;
}

export function verifyYellPlayer(room) {
  let yellOne;
  if (room.currentMove == room.yellOne) {
    return (yellOne = room.yellOne);
  } else {
    return (yellOne = null);
  }
}

export function passTurn(player, roomId, room, playersActive) {
  const roomRef = db.collection("rooms").doc(roomId);
  const totalPlayers = playersActive.length;
  const moves = 1;
  const roomIsReverse = room.isReverse;
  const direction = roomIsReverse ? -1 : 1;
  const nextPlayer =
    (totalPlayers + (player + moves * direction)) % totalPlayers;
  const playerCards = playersActive[room.currentMove].data().cards;
  const playingCards = getPlayingCards(playersActive, room);
  const usedCards = room.deckDict;

  let pennalty = room.pennalty;
  if (pennalty > 0) {
    for (var i = 0; i < pennalty; i++) {
      const newCard = takeACard(usedCards, playingCards);
      playerCards.push(newCard);
      playingCards.push(newCard);
    }
  }

  playersActive[player].ref.set(
    {
      cards: playerCards,
    },
    { merge: true }
  );

  roomRef.set(
    {
      currentMove: nextPlayer,
      deckDict: usedCards,
      previousMove: player,
      yellOne: null,
      drawCount: 0,
      drawPile: false,
      pennalty: null,
    },
    { merge: true }
  );
}
export function drawCard(room, playersActive, roomId) {
  const player = room.currentMove;
  const usedCards = room.deckDict;
  const playingCards = getPlayingCards(playersActive, room);
  let playerCards = playersActive[player].data().cards;
  let drawCount = room.drawCount;

  let pennalty = room.pennalty;
  let total;
  if (pennalty) {
    total = drawCount + pennalty;
  } else {
    total = drawCount;
  }

  if (drawCount > 0 || pennalty) {
    for (var i = 0; i < total; i++) {
      const newCard = takeACard(usedCards, playingCards);
      playerCards.push(newCard);
      playingCards.push(newCard);
    }
  } else {
    //Se le agrega la carta q se saca del pozo
    const card = takeACard(usedCards, playingCards);
    playingCards.push(card);
    playerCards.push(card);
  }

  playersActive[player].ref.set(
    {
      cards: playerCards,
    },
    { merge: true }
  );

  const roomRef = db.collection("rooms").doc(roomId);

  if (drawCount > 0) {
    const totalPlayers = playersActive.length;
    const moves = 1;
    const roomIsReverse = room.isReverse;
    const direction = roomIsReverse ? -1 : 1;
    const nextPlayer =
      (totalPlayers + (player + moves * direction)) % totalPlayers;
    drawCount = 0;

    roomRef.set(
      {
        deckDict: usedCards,
        yellOne: null,
        drawCount: drawCount,
        currentMove: nextPlayer,
        previousMove: player,
        drawPile: false,
        pennalty: null,
      },
      { merge: true }
    );
  } else {
    roomRef.set(
      {
        deckDict: usedCards,
        yellOne: null,
        drawCount: drawCount,
        drawPile: true,
        pennalty: null,
      },
      { merge: true }
    );
  }
}

export function discardACard(roomId, playersActive, card, color, room) {
  const roomRef = db.collection("rooms").doc(roomId);
  const totalPlayers = playersActive.length;
  let moves;
  let roomIsReverse;
  if (totalPlayers == 2 && isReverse(card)) {
    moves = 2;
    roomIsReverse = room.isReverse;
  } else {
    roomIsReverse = isReverse(card) ? !room.isReverse : room.isReverse;
    moves = isSkip(card) ? 2 : 1;
  }
  const direction = roomIsReverse ? -1 : 1;
  const playerCards = playersActive[room.currentMove].data().cards;
  const nextPlayer =
    (totalPlayers + (room.currentMove + moves * direction)) % totalPlayers;

  let drawCount = room.drawCount || 0;
  if (isWildDrawFour(card)) {
    drawCount += 4;
  } else if (isDrawTwo(card)) {
    drawCount += 2;
  }

  let nextCards = playerCards.filter((c) => c != card);
  let usedCards = room.deckDict;
  let yellOne = verifyYellPlayer(room);
  let pennalty = room.pennalty;
  const playingCards = getPlayingCards(playersActive, room);
  if (yellOne == null && nextCards.length == 1) {
    pennalty = 4;
  }
  if (pennalty > 0) {
    for (var i = 0; i < pennalty; i++) {
      const newCard = takeACard(usedCards, playingCards);
      nextCards.push(newCard);
      playingCards.push(newCard);
    }
  }

  playersActive[room.currentMove].ref.set(
    {
      cards: nextCards,
    },
    { merge: true }
  );

  roomRef.set(
    {
      deckDict: usedCards,
      currentMove: nextPlayer,
      previousMove: room.currentMove,
      discardPile: card,
      discardColor: color || null,
      isReverse: roomIsReverse,
      yellOne: yellOne,
      drawCount: drawCount,
      drawPile: false,
      pennalty: null,
    },
    { merge: true }
  );
}
