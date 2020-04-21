import Layout from "../../../components/MyLayout.js";
import db from "../../../utils/firebase";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Room() {
  const router = useRouter();
  const roomId = router.query.roomId;
  const [roomIsFull, setRoomIsFull] = useState(false);
  useEffect(() => {
    if (roomId) {
      const roomRef = db.collection("rooms").doc(roomId);
      Promise.all([roomRef.get(), roomRef.collection("players").get()]).then(
        ([roomSnapshot, playersSnapshot]) => {
          if (roomSnapshot.data().count > playersSnapshot.size) {
            roomRef
              .collection("players")
              .add({ name: "Jugador " + (playersSnapshot.size + 1) })
              .then((playerRef) => {
                Router.push(
                  "/rooms/[roomId]/players/[playerId]",
                  `/rooms/${roomSnapshot.id}/players/${playerRef.id}`
                );
              });
          } else {
            setRoomIsFull(true);
          }
        }
      );
    }
  }, [roomId]);

  if (roomIsFull) {
    return (
      <Layout>No hay más lugar para jugar... Crea un nuevo juego..</Layout>
    );
  } else {
    return <Layout>Redirigiendo al juego...</Layout>;
  }
}
