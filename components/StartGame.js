import CardDisplay from "../components/CardDisplay";
import next from "next";
import db from "../utils/firebase/index";
import {
  takeACard,
  range,
  deck,
  isAllowToThrowIt,
  isReverse,
  isSkip,
  isWild,
} from "../utils/game";
import { useState, Fragment } from "react";

export default function StartGame({ room, roomId, playersActive }) {
  const [wildCard, setWildCard] = useState(null);
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

    if (isAllowToThrowIt(card, room.discardPile, room.discardColor)) {
      const roomRef = db.collection("rooms").doc(roomId);
      const totalPlayers = playersActive.length;
      const currentMove = room.currentMove;
      const roomIsReverse = isReverse(card) ? !room.isReverse : room.isReverse;
      const direction = roomIsReverse ? -1 : 1;
      const moves = isSkip(card) ? 2 : 1;

      const nextPlayer =
        (totalPlayers + (currentMove + moves * direction)) % totalPlayers;

      roomRef.set(
        {
          currentMove: nextPlayer,
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

  if (!playersActive) {
    return <Layout>Loading...</Layout>;
  } else {
    return (
      <>
        {playersActive.map((player) => {
          return (
            <Fragment key={player.id}>
              {playersActive[room.currentMove].id == player.id ? (
                <div>
                  <p>Es el turno del jugador: {player.data().name}</p>
                  <h1>{player.data().name}</h1>
                  {player.data().cards.map((card) => {
                    return (
                      <button
                        key={card}
                        onClick={() => onSubmit(card)}
                        disabled={
                          !isAllowToThrowIt(
                            card,
                            room.discardPile,
                            room.discardColor
                          )
                        }
                      >
                        <CardDisplay card={card} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <h1 key={player.id}>{player.data().name}</h1>
                  {player.data().cards.map((card) => {
                    return (
                      <button key={card} onClick={onSubmit} disabled>
                        <CardDisplay card={card} />
                      </button>
                    );
                  })}
                </div>
              )}
            </Fragment>
          );
        })}
        <div>
          <button onClick={() => onSubmitPile(room.currentMove)}>
            DrawPILE
          </button>
          <button>
            <CardDisplay card={room.discardPile} />
          </button>
          {wildCard ? (
            <div>
              <button onClick={() => onSubmit(wildCard, "red")}>Red</button>
              <button onClick={() => onSubmit(wildCard, "yellow")}>
                Yellow
              </button>
              <button onClick={() => onSubmit(wildCard, "green")}>Green</button>
              <button onClick={() => onSubmit(wildCard, "blue")}>Blue</button>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
