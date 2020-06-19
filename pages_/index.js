import Layout from "~/components/Layout.js";
import React, { useState } from "react";
// import Router from "next/router";
import db from "~/utils/firebase/index";
import Button from "~/components/Button";
import Main from "~/components/Main";
import Footer from "~/components/Footer";
import { Timestamp } from "~/utils/firebase/index";
import useTranslation from "next-translate/useTranslation";
import Router from "next-translate/Router";

export default function NewGame() {
  const { t } = useTranslation();
  const [value, setValue] = useState("2");
  const [name, setName] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    db.collection("rooms")
      .add({ count: value, deckDict: {}, date: Timestamp.fromDate(new Date()) })
      .then(
        (roomRef) => {
          roomRef
            .collection("players")
            .add({ name, admin: true })
            .then(
              (playerRef) => {
                Router.pushI18n(
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
                  <p>{t("common:new-game")}</p>
                </h1>
              </div>
              <form
                onSubmit={onSubmit}
                className="bg-white rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-6">
                    <p className="mb-2">{t("index:players-number")}</p>
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
                    <p className="mb-4">{t("common:nickname")} </p>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("common:nickname-holder")}
                      type="text"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </label>
                </div>
                <div className="flex items-center justify-between ">
                  <Button type={"submit"} color={"red"}>
                    {t("index:submit")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
}
