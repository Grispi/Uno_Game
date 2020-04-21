import Layout from "../../../../components/MyLayout.js";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import db from "../../../../utils/firebase";

export default function StartGame() {
  const router = useRouter();
  const roomId = router.query.roomId;
  const playerId = router.query.playerId;
  console.log(roomId, playerId);

  // const [roomIsFull, setRoomIsFull] = useState(false);
  // useEffect(() => {
  //   if (roomId) {
  //     const roomRef = db.collection("rooms").doc(roomId);
  //     Promise.all([roomRef.get(), roomRef.collection("players").get()]).then(
  //       ([roomSnapshot, playersSnapshot]) => {
  //         if (roomSnapshot.data().count > playersSnapshot.size) {
  //           roomRef
  //             .collection("players")
  //             .add({ name: "Jugador " + (playersSnapshot.size + 1) })
  //             .then((playerRef) => {
  //               Router.push(
  //                 "/rooms/[roomId]/players/[playerId]",
  //                 `/rooms/${roomSnapshot.id}/players/${playerRef.id}`
  //               );
  //             });
  //         } else {
  //           setRoomIsFull(true);
  //         }
  //       }
  //     );
  //   }
  // }, [roomId]);

  const onSubmit = (e) => {
    alert(
      "La cantidad de jugadores es: " + value + "\n" + "Tu jugador es: " + name
    );
    event.preventDefault();
  };
  return (
    <Layout>
      <h2>Jugadores en espera:</h2>

      <button onSubmit={onSubmit}>Empezar</button>
    </Layout>
  );
}
