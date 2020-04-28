import Layout from "../../../../components/MyLayout.js";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import db from "../../../../utils/firebase";
import Player from "../../../../components/Player";
import StartGame from "../../../../components/StartGame";
import { takeACard } from "../../../../utils/game";

export default function Game() {
  const [room, setRoom] = useState(null);
  const [playersActive, setPlayersActive] = useState([]);
  const router = useRouter();
  const roomId = router.query.roomId;
  const playerId = router.query.playerId;

  useEffect(() => {
    if (roomId) {
      const roomRef = db.collection("rooms").doc(roomId);

      roomRef.onSnapshot((roomRef) => {
        setRoom(roomRef.data());
      });

      roomRef.collection("players").onSnapshot(function (querySnapshot) {
        var players = [];

        querySnapshot.forEach(function (doc) {
          players.push(doc);
        });
        setPlayersActive(players);
      });
    }
  }, [roomId]);

  const onSubmit = (e) => {
    event.preventDefault();
    const roomRef = db.collection("rooms").doc(roomId);

    const usedCards = {};
    playersActive.forEach((playerActive) => {
      const cards = [];
      for (var i = 1; i <= 7; i++) {
        const card = takeACard(usedCards);
        cards.push(card);
      }

      playerActive.ref.set(
        {
          cards: cards,
        },
        { merge: true }
      );
    });

    roomRef.set(
      {
        playing: true,
        discardPile: takeACard(usedCards),
        currentMove: 0,
        deckDict: usedCards,
        isReverse: false,
      },
      { merge: true }
    );
  };

  if (!room) {
    return <Layout>Loading...</Layout>;
  }
  if (room.playing) {
    return (
      <Layout>
        <StartGame room={room} roomId={roomId} playersActive={playersActive} />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h2>Jugadores en espera:</h2>
        <p>Cantidad de jugadores a jugar: {room.count}</p>
        <p>
          Cantidad de jugadores Jugando:
          {playersActive.map((player) => player.data().name).join(", ")}
        </p>

        <button onClick={onSubmit}>Empezar</button>
      </Layout>
    );
  }
}
