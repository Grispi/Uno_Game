import Layout from "./MyLayout";
import CardDisplay from "./CardDisplay";
import db from "../utils/firebase/index";
import {
  takeACard,
  isAllowedToThrow,
  isReverse,
  isSkip,
  isWild,
  sortCards,
} from "../utils/game";
import { cards } from "../utils/cards";
import { useState } from "react";
import { Card, BackCard } from "../components/Card";

export default function StartGame({ room, roomId, playersActive, playerId }) {
  const [wildCard, setWildCard] = useState(null);

  const onSubmitUno = (player) => {
    alert("Le falta 1 a: " + playersActive[player].data().name);
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
      },
      { merge: true }
    );
  };
  const onSubmitPile = (player) => {
    const usedCards = room.deckDict;
    console.log("used desde Pile", usedCards);
    const card = takeACard(usedCards);
    //Se le agrega la carta q se saca del pozo
    const playerCards = playersActive[player].data().cards;
    playerCards.push(card);

    playersActive[player].ref.set(
      {
        cards: playerCards,
      },
      { merge: true }
    );
    console.log("used desde Pile antes de sumarlo al db", usedCards);
    const roomRef = db.collection("rooms").doc(roomId);
    roomRef.set(
      {
        deckDict: usedCards,
      },
      { merge: true }
    );
  };

  const onSubmit = (card, color) => {
    if (isWild(card) && !color) {
      setWildCard(card);
      return;
    }

    if (isAllowedToThrow(card, room.discardPile, room.discardColor)) {
      const roomRef = db.collection("rooms").doc(roomId);
      const totalPlayers = playersActive.length;
      const previosPlayer = room.currentMove;
      const currentMove = room.currentMove;
      const roomIsReverse = isReverse(card) ? !room.isReverse : room.isReverse;
      const direction = roomIsReverse ? -1 : 1;
      const moves = isSkip(card) ? 2 : 1;

      const nextPlayer =
        (totalPlayers + (currentMove + moves * direction)) % totalPlayers;

      roomRef.set(
        {
          currentMove: nextPlayer,
          previosMove: previosPlayer,
          discardPile: card,
          discardColor: color || null,
          isReverse: roomIsReverse,
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
    return <Layout>Loading...</Layout>;
  } else {
    const currentMovePlayer = playersActive[room.currentMove];
    return (
      <>
        <p>Es el turno del jugador: {currentMovePlayer.data().name}</p>
        {playersActive.map((player) => {
          const isCurrentPlayer = player.id === playerId;
          if (player.data().cards.length > 0) {
            return (
              <div key={player.id}>
                <h1>{player.data().name}</h1>
                {sortCards(player.data().cards).map((card) => {
                  return isCurrentPlayer ? (
                    <button
                      key={card}
                      onClick={() => onSubmit(card)}
                      disabled={
                        playersActive[room.currentMove].id != player.id ||
                        !isAllowedToThrow(
                          card,
                          room.discardPile,
                          room.discardColor
                        )
                      }
                    >
                      <Card size={10} card={card} />
                    </button>
                  ) : (
                    <button>
                      <BackCard size={10} />
                    </button>
                  );
                })}
              </div>
            );
          } else {
            return (
              <h1>
                Ganó el jugador: {playersActive[room.previosMove].data().name}
              </h1>
            );
          }
        })}
        {currentMovePlayer.id == playerId ? (
          <div>
            <button onClick={() => onSubmitPile(room.currentMove)}>
              DrawPILE
            </button>
            <button onClick={() => onSubmitPaso(room.currentMove)}>PASO</button>
            <button onClick={() => onSubmitUno(room.currentMove)}>UNO</button>

            {wildCard ? (
              <div>
                <button onClick={() => onSubmit(wildCard, "red")}>Red</button>
                <button onClick={() => onSubmit(wildCard, "yellow")}>
                  Yellow
                </button>
                <button onClick={() => onSubmit(wildCard, "green")}>
                  Green
                </button>
                <button onClick={() => onSubmit(wildCard, "blue")}>Blue</button>
              </div>
            ) : null}
          </div>
        ) : null}
        <div>
          <button>
            <Card size={10} card={room.discardPile} />
          </button>
          {room.discardColor ? `El color es : ${room.discardColor}` : null}
        </div>
      </>
    );
  }
}
