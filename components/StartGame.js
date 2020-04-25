import CardDisplay from "../components/CardDisplay";
import next from "next";
import db from "../utils/firebase/index";

export default function StartGame({ room, roomId, playersActive }) {
  const onSubmit = (card) => {
    console.log(card);
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
          <button>DrawPILE</button>
          <CardDisplay card={room.discardPile} />
        </div>
      </>
    );
  }
}
