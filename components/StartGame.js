import CardDisplay from "../components/CardDisplay";

export default function StartGame({ room, playersActive }) {
  if (!playersActive) {
    return <Layout>Loading...</Layout>;
  } else {
    return (
      <>
        {playersActive.map((player) => {
          return (
            <>
              <h1 key={player.id}>{player.data().name}</h1>
              {player.data().cards.map((card) => {
                return (
                  <button key={card}>
                    <CardDisplay card={card} />
                  </button>
                );
              })}
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
