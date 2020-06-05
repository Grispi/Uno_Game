import useCardAnimations from "~/hooks/useCardAnimations";
import { useState, useRef, useEffect } from "react";
import db from "~/utils/firebase/index";
import { Card, BackCard } from "~/components/Card";
import {
  takeACard,
  isAllowedToThrow,
  isReverse,
  isSkip,
  isWild,
  sortCards,
  isWildDrawFour,
  isDrawTwo,
} from "~/utils/game";
import Heading from "~/components/Heading";
import PlayerCards from "~/components/PlayerCards";
import WildCardOptions from "~/components/WildCardOptions";
import CurrentMovePlayerOptions from "~/components/CurrentMovePlayerOptions";
import DrawPile from "~/components/DrawPile";
import DiscardPile from "~/components/DiscardPile";
import BoardLayout from "~/components/BoardLayout";

export default function GameInProgress({
  room,
  roomId,
  playersActive,
  playerId,
}) {
  const onYellOne = (player) => {
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
  };
  const getPlayingCards = () => {
    const cards = [];
    playersActive.forEach((player) => {
      cards.push(...player.data().cards);
    });
    cards.push(room.discardPile);
    return cards;
  };

  const verifyYellPlayer = () => {
    let yellOne;
    if (room.currentMove == room.yellOne) {
      return (yellOne = room.yellOne);
    } else {
      return (yellOne = null);
    }
  };
  const onPassTurn = (player) => {
    const roomRef = db.collection("rooms").doc(roomId);
    const totalPlayers = playersActive.length;
    const moves = 1;
    const roomIsReverse = room.isReverse;
    const direction = roomIsReverse ? -1 : 1;

    const nextPlayer =
      (totalPlayers + (player + moves * direction)) % totalPlayers;

    const playerCards = playersActive[room.currentMove].data().cards;
    const playingCards = getPlayingCards();
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
  };

  const onDrawCard = () => {
    const player = room.currentMove;
    const usedCards = room.deckDict;
    const playingCards = getPlayingCards();
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
  };

  const onDiscardACard = (card, color) => {
    const playerCards = playersActive[room.currentMove].data().cards;
    if (isWild(card) && !color) {
      setWildCard(card);
      return;
    }

    if (
      isAllowedToThrow(
        card,
        room.discardPile,
        room.discardColor,
        room.drawCount,
        playerCards
      )
    ) {
      const roomRef = db.collection("rooms").doc(roomId);
      const totalPlayers = playersActive.length;
      const roomIsReverse = isReverse(card) ? !room.isReverse : room.isReverse;
      const direction = roomIsReverse ? -1 : 1;
      const moves = isSkip(card) ? 2 : 1;

      const nextPlayer =
        (totalPlayers + (room.currentMove + moves * direction)) % totalPlayers;

      let drawCount = room.drawCount || 0;
      if (isWildDrawFour(card)) {
        drawCount += 4;
      } else if (isDrawTwo(card)) {
        drawCount += 2;
      }

      const playerCards = playersActive[room.currentMove].data().cards;
      let nextCards = playerCards.filter((c) => c != card);
      let usedCards = room.deckDict;
      let yellOne = verifyYellPlayer();
      let pennalty = room.pennalty;
      const playingCards = getPlayingCards();
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

      setWildCard(null);
    } else {
      alert("Esa carta no es válida");
    }
  };

  const [wildCard, setWildCard] = useState(null);
  const { drawPileRef, pileRef, onCardAdd, onCardRemove } = useCardAnimations();
  const currentMovePlayer = playersActive[room.currentMove];

  return (
    <div className="flex flex-1">
      <BoardLayout
        players={playersActive}
        currentPlayerId={playerId}
        renderPlayer={(player, isCurrentPlayer) => (
          <>
            <Heading color="white" type="h1" margin="2">
              <span
                className={
                  currentMovePlayer.id == player.id
                    ? "bg-yellow-500 p-2 rounded text-black font-bold pl-2"
                    : "opacity-50 pl-2"
                }
              >
                {player.data().name}
              </span>
            </Heading>
            <PlayerCards
              cards={sortCards(player.data().cards)}
              isCurrentPlayer={isCurrentPlayer}
              onDiscardACard={onDiscardACard}
              isCardDisabled={(card) =>
                currentMovePlayer.id != player.id ||
                !isAllowedToThrow(
                  card,
                  room.discardPile,
                  room.discardColor,
                  room.drawCount,
                  player.data().cards
                )
              }
              onCardAdd={onCardAdd}
              onCardRemove={onCardRemove}
            />
          </>
        )}
        drawPile={
          <DrawPile
            onDrawCard={onDrawCard}
            canDrawFromPile={!room.drawPile}
            isCurrentPlayerTurn={currentMovePlayer.id == playerId}
            drawPileRef={drawPileRef}
          />
        }
        discardPile={
          <DiscardPile
            discardPile={room.discardPile}
            discardColor={room.discardColor}
            pileRef={pileRef}
          />
        }
        playerOptions={
          wildCard ? (
            <WildCardOptions
              onChooseColor={(color) => onDiscardACard(wildCard, color)}
            />
          ) : (
            <CurrentMovePlayerOptions
              currentMovePlayer={currentMovePlayer}
              playerId={playerId}
              onPassTurn={onPassTurn}
              room={room}
              onYellOne={onYellOne}
            />
          )
        }
        yellOneMessage={
          room.yellOne != null ? (
            <h1 className="z-10 bg-red-700 text-white m-2 font-medium text-center text-xl md:text-2x p-4 rounded">
              UNO!! gritó: {playersActive[room.yellOne].data().name}
            </h1>
          ) : null
        }
      />
    </div>
  );
}
