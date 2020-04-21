import Layout from "../components/MyLayout.js";
import React, { useState } from "react";
import Router from "next/router";
import db from "../utils/firebase/index";
import Link from "next/link";

export default function NewGame() {
  const [value, setValue] = useState("2");
  const [name, setName] = useState("");
  const onSubmit = (event) => {
    alert(
      "La cantidad de jugadores es: " + value + "\n" + "Tu jugador es: " + name
    );
    event.preventDefault();

    db.collection("rooms")
      .add({ count: value })
      .then((roomRef) => {
        roomRef
          .collection("players")
          .add({ name })
          .then((playerRef) => {
            Router.push(
              "/rooms/[roomId]/players/[playerId]",
              `/rooms/${roomRef.id}/players/${playerRef.id}`
            );
          });
      });
  };

  return (
    <Layout>
      <h1>New Game</h1>

      <form onSubmit={onSubmit}>
        <label>
          Cuantos jugadores van a jugar:
          <select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>
          Nombre o Nickname del primer jugador:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your nickname o Nombre"
            type="text"
            required
          />
        </label>
        <button type="submit">Aceptar</button>
      </form>
      <style jsx>{`
        p,
        form {
          margin: 1em;
          font-family: sans-serif;
          font-size: 18px;
          display: flex;
          text-align: center;
          align-items: center;
          flex-direction: column;
        }
        label {
          text-align: left;
          align-items: center;
          width: 500px;
        }
        select {
          display: center;
          width: 500px;
          font-size: 20px;
          margin: 1em 0;

          border-radius: 8px;
          border-style: none;
          border: 1px solid #e4e6e8;
          background-color: white;
        }

        input {
          display: center;
          font-size: 15px;
          margin: 1em 0;
          padding: 10px;
          width: 480px;
          border-radius: 8px;
          border-style: none;
          border: 1px solid #e4e6e8;
          transition: 0.1s ease;
        }
        input:hover {
          border-color: palevioletred;
        }
        button {
          width: 500px;
          font-size: 15px;
          margin: 1em 0;
          padding: 10px;
          border: 1px solid #e4e6e8;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.1s ease-in;
        }
        button:hover {
          background-color: palevioletred;
          color: white;
        }
      `}</style>
    </Layout>
  );
}
