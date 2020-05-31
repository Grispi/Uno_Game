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

export default function GameInProgress({
  room,
  roomId,
  playersActive,
  playerId,
}) {
  const onSubmitUno = (player) => {
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
  const onSubmitPaso = (player) => {
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
  const onSubmitPile = (player) => {
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

  const onSubmit = (card, color) => {
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
  const currentPlayer = playersActive.find((player) => player.id == playerId);
  const indexCurrentPlayer = playersActive.indexOf(currentPlayer);

  return (
    <div className="flex flex-1">
      <div
        className="flex-auto grid grid-cols-3 gap-1"
        style={{
          gridTemplateRows: "auto auto 1fr auto",
        }}
      >
        {playersActive.map((player, index) => {
          const isCurrentPlayer = player.id === playerId;
          let positionPlayer;
          playersActive.length == 2
            ? (positionPlayer = {
                0: {
                  grid: "row-start-4 col-start-1 col-span-3",
                },
                1: {
                  grid: "row-start-1 col-start-2 col-span-1",
                },
              })
            : (positionPlayer = {
                0: {
                  grid: "row-start-4 col-start-1 col-span-3",
                },
                1: {
                  grid: "row-start-2 col-start-1 col-span-1",
                },
                2: {
                  grid: "row-start-1 col-start-2 col-span-1",
                },
                3: {
                  grid: "row-start-2 col-start-3 col-span-1",
                },
              });
          const posPlayer =
            (playersActive.length - indexCurrentPlayer + index) %
            playersActive.length;

          return (
            <div
              key={player.id}
              className={`${positionPlayer[posPlayer].grid} flex flex-col items-center `}
            >
              <Heading color="white" type="h1" margin="2">
                <span
                  className={
                    playersActive[room.currentMove].id == player.id
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
                onCardSubmit={onSubmit}
                isCardDisabled={(card) =>
                  playersActive[room.currentMove].id != player.id ||
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
            </div>
          );
        })}
        <div
          className={`row-start-3 col-span-3 md:row-start-2 md:col-start-2 md:col-span-1 lg:px-32 py-4 flex flex-col justify-center items-center`}
        >
          <div className="flex flex-no-wrap">
            <button
              onClick={(e) => onSubmitPile(room.currentMove)}
              disabled={
                room.drawPile == true || currentMovePlayer.id != playerId
                  ? true
                  : false
              }
              style={{ marginRight: "1em" }}
            >
              <div
                style={{
                  position: "relative",
                  paddingRight: "1em",
                }}
              >
                <div style={{}}>
                  <BackCard sizeSM={20} sizeMD={20} />
                </div>
                <div
                  style={{
                    top: 0,
                    position: "absolute",
                    left: ".5em",
                  }}
                >
                  <BackCard sizeSM={20} sizeMD={20} />
                </div>
                <div
                  style={{
                    top: 0,
                    position: "absolute",
                    left: "1em",
                  }}
                  ref={drawPileRef}
                >
                  <BackCard sizeSM={20} sizeMD={20} />
                </div>
              </div>
            </button>

            <button ref={pileRef}>
              <Card
                sizeSM={20}
                sizeMD={20}
                card={room.discardPile}
                wildColor={room.discardColor}
              />
            </button>
          </div>

          <div className="m-4 w-full md:w-1/2 flex justify-center">
            {wildCard ? (
              <div className="flex flex-row  flex-wrap md:flex-no-wrap px-4">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => onSubmit(wildCard, "red")}
                >
                  Red
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2"
                  onClick={() => onSubmit(wildCard, "yellow")}
                >
                  Yellow
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
                  onClick={() => onSubmit(wildCard, "green")}
                >
                  Green
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => onSubmit(wildCard, "blue")}
                >
                  Blue
                </button>
              </div>
            ) : (
              <div
                className={`px-8 md:px-0 flex flex-1 flex-row ${
                  currentMovePlayer.id == playerId ? "" : "invisible"
                }`}
              >
                <button
                  onClick={() => onSubmitPaso(room.currentMove)}
                  className={`flex-1 text-white font-bold py-2 px-2 rounded bg-${
                    room.drawPile == false ? "gray-500" : "green-700"
                  } hover:bg-${
                    room.drawPile == false ? "gray-500" : "green"
                  }-500 mr-2`}
                  disabled={room.drawPile == false ? true : false}
                >
                  PASO
                </button>
                <button
                  onClick={() => onSubmitUno(room.currentMove)}
                  className={`bg-red-700 hover:bg-red-500 text-white font-bold p-2 rounded ml-2`}
                >
                  UNO!
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="row-start-1 col-start-1 col-span-3 flex flex-col items-center justify-center">
          {room.yellOne != null ? (
            <h1 className="z-10 bg-red-700 text-white m-2 font-medium text-center text-xl md:text-2x p-4 rounded">
              UNO!! gritó: {playersActive[room.yellOne].data().name}
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}
