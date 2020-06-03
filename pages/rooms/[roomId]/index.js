import Layout from "~/components/MyLayout.js";
import db from "~/utils/firebase";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "~/components/Button";
import Main from "~/components/Main";

export default function Room() {
  const router = useRouter();
  const roomId = router.query.roomId;
  const [roomIsFull, setRoomIsFull] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [roomPlaying, setRoomPlaying] = useState(false);
  // useEffect(() => {
  const onCreateRoom = (e) => {
    event.preventDefault();
    if (roomId) {
      const roomRef = db.collection("rooms").doc(roomId);
      Promise.all([roomRef.get(), roomRef.collection("players").get()]).then(
        ([roomSnapshot, playersSnapshot]) => {
          if (
            roomSnapshot.data().count > playersSnapshot.size &&
            !roomSnapshot.data().playing
          ) {
            roomRef
              .collection("players")
              .add({ name: playerName, admin: false })
              .then((playerRef) => {
                Router.push(
                  "/rooms/[roomId]/players/[playerId]",
                  `/rooms/${roomSnapshot.id}/players/${playerRef.id}`
                );
              });
          } else if (roomSnapshot.data().playing) {
            setRoomPlaying(true);
          } else {
            setRoomIsFull(true);
          }
        }
      );
    }
  };

  // , [roomId]);

  if (roomIsFull) {
    return (
      <Main>
        <Layout />
        <p className="text-white">
          No hay más lugar para jugar... Crea un nuevo juego..
        </p>
      </Main>
    );
  } else if (roomPlaying) {
    return (
      <Main>
        <Layout />
        <p className="text-white">Ya esta empezado el juego...</p>
      </Main>
    );
  } else {
    return (
      <Main color="gray" justify="center">
        <Layout />
        <div className="flex-auto px-4 py-8 px-4 py-8 mx-auto w-full">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg ">
              <div className="bg-white p-4 rounded shadow">
                <div className="items-center justify-between ">
                  <h1 className="text-gray-700 text-lg font-bold text-center">
                    Unirse a un Juego
                  </h1>
                </div>
                <form
                  className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={onCreateRoom}
                >
                  <div className="mb-6">
                    <label className="block text-gray-700 text-base font-bold mb-2">
                      <p className="mb-4"> Nickname del jugador:</p>
                      <input
                        className="w-full text-gray-700 border-2 border-gray-300 h-12 mt-1 p-2 rounded g-gray-200 my-4"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Your nickname o Nombre"
                        type="text"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      ></input>
                    </label>
                  </div>
                  <div className="flex items-center justify-between ">
                    <Button color={"green"} type={"submit"} className="w-full">
                      Unirse
                    </Button>
                  </div>
                  {/* ERROR FOR TESTING */}
                  <button
                    onClick={() => {
                      throw new Error("aaaaaaaa!!!!");
                    }}
                  >
                    Break the world
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}
