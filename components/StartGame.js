import CardDisplay from "../components/CardDisplay";
import next from "next";
import db from "../utils/firebase/index";
import { takeACard, range, deck, isAllowToThrowIt } from "../utils/game";

export default function StartGame({ room, roomId, playersActive }) {
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

  const onSubmit = (card) => {
    if (isAllowToThrowIt(card, room.discardPile)) {
      const roomRef = db.collection("rooms").doc(roomId);
      const totalPlayers = playersActive.length;
      const currentMove = room.currentMove;
      let nextPlayer = currentMove + 1;
      if (currentMove + 1 >= totalPlayers) {
        nextPlayer = 0;
      }
      roomRef.set(
        {
          currentMove: nextPlayer,
          discardPile: card,
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
            <>
              {playersActive[room.currentMove].id == player.id ? (
                <div>
                  <p>Es el turno del jugador: {player.data().name}</p>
                  <h1 key={player.id}>{player.data().name}</h1>
                  {player.data().cards.map((card) => {
                    return (
                      <button key={card} onClick={() => onSubmit(card)}>
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
            </>
          );
        })}
        <div>
          <button onClick={() => onSubmitPile(room.currentMove)}>
            DrawPILE
          </button>
          <button>
            <CardDisplay card={room.discardPile} />
          </button>
        </div>
      </>
    );
  }
}
