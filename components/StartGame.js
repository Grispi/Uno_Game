import Layout from "./MyLayout";
import db from "../utils/firebase/index";
import {
  takeACard,
  isAllowedToThrow,
  isReverse,
  isSkip,
  isWild,
  sortCards,
  isWildDrawFour,
  isDrawTwo,
} from "../utils/game";
import { useState } from "react";
import { Card, BackCard } from "../components/Card";
import Button from "../components/Button";
import Main from "../components/Main";
import Heading from "../components/Heading";

export default function StartGame({ room, roomId, playersActive, playerId }) {
  const [wildCard, setWildCard] = useState(null);

  const onSubmitUno = (player) => {
    const roomRef = db.collection("rooms").doc(roomId);
    roomRef.set(
      {
        yellOne: player,
      },
      { merge: true }
    );
  };
  const onSubmitPaso = (player) => {
    const roomRef = db.collection("rooms").doc(roomId);
    const previosPlayer = player;
    const totalPlayers = playersActive.length;
    const moves = 1;
    const roomIsReverse = room.isReverse;
    const direction = roomIsReverse ? -1 : 1;

    const nextPlayer =
      (totalPlayers + (player + moves * direction)) % totalPlayers;

    roomRef.set(
      {
        currentMove: nextPlayer,
        previosMove: previosPlayer,
        yellOne: null,
        drawCount: 0,
        drawPile: false,
      },
      { merge: true }
    );
  };
  const onSubmitPile = (player) => {
    const usedCards = room.deckDict;
    const card = takeACard(usedCards);
    let drawCount = room.drawCount;

    //Se le agrega la carta q se saca del pozo
    const playerCards = playersActive[player].data().cards;
    if (drawCount > 0) {
      for (var i = 0; i < drawCount; i++) {
        playerCards.push(takeACard(usedCards));
      }
      // drawCount = 0;
    } else {
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
      const previosPlayer = player;
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
          previosMove: previosPlayer,
          drawPile: false,
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
        },
        { merge: true }
      );
    }
  };

  const onSubmit = (card, color) => {
    if (isWild(card) && !color) {
      setWildCard(card);
      return;
    }

    if (
      isAllowedToThrow(
        card,
        room.discardPile,
        room.discardColor,
        room.drawCount
      )
    ) {
      const roomRef = db.collection("rooms").doc(roomId);
      const totalPlayers = playersActive.length;
      const previosPlayer = room.currentMove;
      const currentMove = room.currentMove;
      const roomIsReverse = isReverse(card) ? !room.isReverse : room.isReverse;
      const direction = roomIsReverse ? -1 : 1;
      const moves = isSkip(card) ? 2 : 1;

      const nextPlayer =
        (totalPlayers + (currentMove + moves * direction)) % totalPlayers;
      let yellOne;
      if (previosPlayer == room.yellOne) {
        yellOne = room.yellOne;
      } else {
        yellOne = null;
      }

      let drawCount = room.drawCount || 0;
      if (isWildDrawFour(card)) {
        drawCount += 4;
      } else if (isDrawTwo(card)) {
        drawCount += 2;
      }

      roomRef.set(
        {
          currentMove: nextPlayer,
          previosMove: previosPlayer,
          discardPile: card,
          discardColor: color || null,
          isReverse: roomIsReverse,
          yellOne: yellOne,
          drawCount: drawCount,
          drawPile: false,
        },
        { merge: true }
      );
      const playerCards = playersActive[room.currentMove].data().cards;
      playersActive[room.currentMove].ref.set(
        {
          cards: playerCards.filter((c) => c != card),
        },
        { merge: true }
      );

      setWildCard(null);
    } else {
      alert("Esa carta no es válida");
    }
  };

  if (!playersActive || playersActive.length === 0) {
    return (
      <Main color="green">
        <Layout />
        Loading...
      </Main>
    );
  } else {
    const winner = playersActive.find(
      (player) => player.data().cards.length == 0
    );
    if (winner) {
      return (
        <Main color="green" justify="center">
          <Heading type="h1" color="white">
            Ganó el jugador:
            {winner.data().name}
          </Heading>
        </Main>
      );
    } else {
      const currentMovePlayer = playersActive[room.currentMove];
      const currentPlayer = playersActive.find(
        (player) => player.id == playerId
      );
      const indexCurrentPlayer = playersActive.indexOf(currentPlayer);
      return (
        <>
          <Main color="green">
            <Heading type="h1" color="white">
              Es el turno del jugador: {currentMovePlayer.data().name}
            </Heading>

            <div className="grid grid-rows-4 grid-cols-3 gap-1">
              {playersActive.map((player, index) => {
                const isCurrentPlayer = player.id === playerId;
                let positionPlayer;
                playersActive.length == 2
                  ? (positionPlayer = {
                      0: {
                        row: 3,
                        col: 2,
                        trans: 0,
                        flex: "col",
                        pad: "py-10",
                      },
                      1: {
                        row: 1,
                        col: 2,
                        trans: 0,
                        flex: "col",
                        pad: "py-10",
                      },
                    })
                  : (positionPlayer = {
                      0: {
                        row: 3,
                        col: 2,
                        trans: 0,
                        flex: "col",
                        pad: "py-10",
                      },
                      1: {
                        row: 2,
                        col: 1,
                        trans: 90,
                        flex: "row",
                        pad: "px-24",
                      },
                      2: {
                        row: 1,
                        col: 2,
                        trans: 0,
                        flex: "col",
                        pad: "py-10",
                      },
                      3: {
                        row: 2,
                        col: 3,
                        trans: 90,
                        flex: "row-reverse",
                        pad: "px-24",
                      },
                    });
                const posPlayer =
                  (playersActive.length - indexCurrentPlayer + index) %
                  playersActive.length;

                // if (player.data().cards.length > 0) {
                return (
                  <>
                    <div
                      key={player.id}
                      className={`row-start-${positionPlayer[posPlayer].row} col-start-${positionPlayer[posPlayer].col} flex  flex-col sm:flex-${positionPlayer[posPlayer].flex} items-center lg:${positionPlayer[posPlayer].pad}`}
                    >
                      <Heading color="white" type="h1" margin="2">
                        {player.data().name}
                      </Heading>
                      <div
                        className={`flex transform rotate-${positionPlayer[posPlayer].trans} flex-auto`}
                        style={{
                          flexFlow: "row nowrap",
                          justifyContent: "center",
                        }}
                      >
                        {sortCards(player.data().cards).map((card) => {
                          const disabled =
                            playersActive[room.currentMove].id != player.id ||
                            !isAllowedToThrow(
                              card,
                              room.discardPile,
                              room.discardColor,
                              room.drawCount
                            );

                          return isCurrentPlayer ? (
                            // for sm: margin: 0 -15px md:0 -20px
                            <div
                              key={card}
                              className="text-lg m-0 p-0 flex -mx-4 lg:-mx-6 "
                            >
                              <button
                                onClick={() => onSubmit(card)}
                                disabled={disabled}
                              >
                                <Card
                                  sizeSM={20}
                                  sizeMD={32}
                                  card={card}
                                  opacity={
                                    disabled ? "opacity-50" : "opacity-100"
                                  }
                                />
                              </button>
                            </div>
                          ) : (
                            <div
                              key={card}
                              className="text-lg m-0 p-0 -mx-5 lg:-mx-6"
                            >
                              <BackCard sizeSM={20} sizeMD={30} size={5} />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="row-start-2 col-start-2 flex flex-col justify-center items-center">
                      <div className="flex flex-no-wrap">
                        <button
                          onClick={() => onSubmitPile(room.currentMove)}
                          disabled={
                            room.drawPile == true ||
                            currentMovePlayer.id != playerId
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
                              <BackCard sizeMD={32} sizeSM={20} />
                            </div>
                            <div
                              style={{
                                top: 0,
                                position: "absolute",
                                left: ".5em",
                              }}
                            >
                              <BackCard sizeMD={32} sizeSM={20} />
                            </div>
                            <div
                              style={{
                                top: 0,
                                position: "absolute",
                                left: "1em",
                              }}
                            >
                              <BackCard sizeMD={32} sizeSM={20} />
                            </div>
                          </div>
                        </button>

                        <button>
                          <Card
                            sizeSM={20}
                            sizeMD={32}
                            card={room.discardPile}
                            wildColor={room.discardColor}
                          />
                        </button>
                      </div>

                      <div className="m-4 w-1/2 flex justify-center">
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
                            className={`flex flex-1 flex-row ${
                              currentMovePlayer.id == playerId
                                ? ""
                                : "invisible"
                            }`}
                          >
                            <button
                              onClick={() => onSubmitPaso(room.currentMove)}
                              className={`flex-1 text-white font-bold py-2 px-2 rounded bg-${
                                room.drawPile == false
                                  ? "gray-500"
                                  : "green-700"
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

                    <div>
                      {room.yellOne != null ? (
                        <span className="text-white">
                          UNO!! gritó: {playersActive[room.yellOne].data().name}
                        </span>
                      ) : null}
                    </div>
                  </>
                );
              })}
            </div>
          </Main>
        </>
      );
    }
  }
}
