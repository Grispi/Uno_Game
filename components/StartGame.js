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
    const currentMovePlayer = playersActive[room.currentMove];
    const currentPlayer = playersActive.find((player) => player.id == playerId);
    const indexCurrentPlayer = playersActive.indexOf(currentPlayer);
    return (
      <>
        <Main color="green">
          <Heading type="h1" color="white">
            Es el turno del jugador: {currentMovePlayer.data().name}
          </Heading>

          <div className="grid grid-rows-none grid-cols-3 gap-4">
            {playersActive.map((player, index) => {
              const isCurrentPlayer = player.id === playerId;
              const positionPlayer = {
                0: { row: 3, col: 2 },
                1: { row: 2, col: 1 },
                2: { row: 1, col: 2 },
                3: { row: 2, col: 3 },
              };
              const posPlayer =
                (playersActive.length - indexCurrentPlayer + index) %
                playersActive.length;

              if (player.data().cards.length > 0) {
                return (
                  <div
                    key={player.id}
                    className={`row-start-${positionPlayer[posPlayer].row} col-start-${positionPlayer[posPlayer].col}`}
                  >
                    <Heading color="white" type="h1" margin="5">
                      {player.data().name}
                    </Heading>
                    <div className="mx-8">
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
                          <div
                            style={{ display: "inline-flex" }}
                            className="text-lg m-0 p-0 "
                          >
                            <button
                              key={card}
                              onClick={() => onSubmit(card)}
                              disabled={disabled}
                              className={disabled ? "opacity-50" : null}
                            >
                              <Card size={5} card={card} />
                            </button>
                          </div>
                        ) : (
                          <div
                            style={{ display: "inline-flex", margin: "-15px" }}
                            className="text-lg m-0 p-0 "
                          >
                            <BackCard size={5} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Heading type="h1" color="white">
                    Ganó el jugador:{" "}
                    {playersActive[room.previosMove].data().name}
                  </Heading>
                );
              }
            })}
            {currentMovePlayer.id == playerId ? (
              <>
                {room.drawPile == false ? (
                  <div className="row-start-1 col-span-1 m-6">
                    <button onClick={() => onSubmitPile(room.currentMove)}>
                      <div
                        style={{
                          display: "inline-flex",
                          transform: "rotate(5deg)",
                          fontSize: "12px",
                        }}
                      >
                        <div style={{ transform: "translate(0px, 0px)" }}>
                          <BackCard size={10} />
                        </div>
                        <div style={{ transform: "translate(-76px, -5px)" }}>
                          <BackCard size={10} />
                        </div>
                        <div style={{ transform: "translate(-151px, 1px)" }}>
                          <BackCard size={10} />
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="row-start-1 col-span-1 m-6">
                    <button
                      onClick={() => onSubmitPile(room.currentMove)}
                      disabled={true}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          transform: "rotate(5deg)",
                          fontSize: "12px",
                        }}
                      >
                        <div style={{ transform: "translate(0px, 0px)" }}>
                          <BackCard size={10} />
                        </div>
                        <div style={{ transform: "translate(-76px, -5px)" }}>
                          <BackCard size={10} />
                        </div>
                        <div style={{ transform: "translate(-151px, 1px)" }}>
                          <BackCard size={10} />
                        </div>
                      </div>
                    </button>
                  </div>
                )}
                <div className="row-start-3  col-start-1">
                  <div className="m-5 w-1/2 flex">
                    <button
                      onClick={() => onSubmitPaso(room.currentMove)}
                      className=" flex-1 bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                    >
                      {" "}
                      PASO
                    </button>
                  </div>
                  <div className="m-5 w-1/2 flex">
                    <button
                      onClick={() => onSubmitUno(room.currentMove)}
                      className="flex-1 bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded "
                    >
                      UNO
                    </button>
                  </div>
                  {wildCard ? (
                    <div>
                      <button onClick={() => onSubmit(wildCard, "red")}>
                        Red
                      </button>
                      <button onClick={() => onSubmit(wildCard, "yellow")}>
                        Yellow
                      </button>
                      <button onClick={() => onSubmit(wildCard, "green")}>
                        Green
                      </button>
                      <button onClick={() => onSubmit(wildCard, "blue")}>
                        Blue
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}
            <div className="row-start-2 col-start-2 flex flex-col items-center self-center">
              <button>
                <Card size={7} card={room.discardPile} />
              </button>
              {room.discardColor ? `El color es : ${room.discardColor}` : null}
            </div>
            <div>
              {room.yellOne != null
                ? `UNO!! gritó: ${playersActive[room.yellOne].data().name}`
                : null}
            </div>
            <style jsx>{`
              p {
                margin: 1em;
                font-family: sans-serif;
                font-size: 18px;
                display: flex;
                text-align: center;
                align-items: center;
                flex-direction: column;
              }

              // button,
              .backCard {
                // width: 85px;
                font-size: 12px;
                margin: 0px;
                padding: 0px;
                border: 0px;
                cursor: pointer;
                transition: 0.1s ease-in;
              }

              // button:hover {
              //   background-color: palevioletred;
              //   color: white;
              // }
              // .pileButton {
              //   width: 85px;
              //   font-size: 12px;
              //   margin: 2em 0;
              //   padding: 20px;
              //   border: 1px solid black;
              //   border-radius: 8px;
              // }
            `}</style>
          </div>
        </Main>
      </>
    );
  }
}
