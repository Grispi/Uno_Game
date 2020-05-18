import Layout from "../components/MyLayout.js";
import React, { useState } from "react";
import Router from "next/router";
import db from "../utils/firebase/index";
import Button from "../components/Button";
import Main from "../components/Main";

export default function NewGame() {
  const [value, setValue] = useState("2");
  const [name, setName] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    db.collection("rooms")
      .add({ count: value, deckDict: {} })
      .then(
        (roomRef) => {
          roomRef
            .collection("players")
            .add({ name, admin: true })
            .then(
              (playerRef) => {
                Router.push(
                  "/rooms/[roomId]/players/[playerId]",
                  `/rooms/${roomRef.id}/players/${playerRef.id}`
                );
              },
              (err) => {
                throw err;
              }
            );
        },
        (err) => {
          throw err;
        }
      );
  };

  return (
    <Main color="gray">
      <Layout />
      <div className="flex-auto px-4 py-8 px-4 py-8 mx-auto w-full">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg ">
            <div className="bg-white p-4 rounded shadow">
              <div className="items-center justify-between ">
                <h1 className="text-gray-700 text-lg font-bold text-center">
                  New Game
                </h1>
              </div>
              <form
                onSubmit={onSubmit}
                className="bg-white rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-6">
                    <p className="mb-2">Cuantos jugadores van a jugar:</p>
                    <select
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    >
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-base font-bold mb-2">
                    <p className="mb-4"> Nickname del jugador:</p>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your nickname o Nombre"
                      type="text"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </label>
                </div>
                <div className="flex items-center justify-between ">
                  <Button type={"submit"} color={"red"}>
                    Aceptar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
