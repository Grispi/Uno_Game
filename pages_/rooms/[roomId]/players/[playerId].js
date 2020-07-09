import Layout from "~/components/Layout.js";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import db from "~/utils/firebase";
import StartGame from "~/components/StartGame";
import { takeACard, isWild, isWildDrawFour, isDrawTwo } from "~/utils/game";
import Button from "~/components/Button";
import Main from "~/components/Main";
import Heading from "~/components/Heading";
import Footer from "~/components/Footer";
import useTranslation from "next-translate/useTranslation";
import getBaseUrl from "~/utils/getBaseUrl";

export default function Game() {
  const { t } = useTranslation();
  const [room, setRoom] = useState(null);
  const [playersActive, setPlayersActive] = useState([]);
  const router = useRouter();
  const roomId = router.query.roomId;
  const playerId = router.query.playerId;
  // const link_jugadores = router.asPath;

  useEffect(() => {
    if (roomId) {
      const roomRef = db.collection("rooms").doc(roomId);

      const roomUnsubscribe = roomRef.onSnapshot((roomRef) => {
        setRoom(roomRef.data());
      });

      const playersUnsubscribe = roomRef
        .collection("players")
        .onSnapshot(function (querySnapshot) {
          var players = [];

          querySnapshot.forEach(function (doc) {
            players.push(doc);
          });
          setPlayersActive(players);
        });

      return () => {
        roomUnsubscribe();
        playersUnsubscribe();
      };
    }
  }, [roomId]);

  const onNewGame = (e) => {
    event.preventDefault();
    const roomRef = db.collection("rooms").doc(roomId);
    let usedCards = {};
    let firstCard = takeACard(usedCards);
    //ver que pasa si la primera carta es reverse
    while (isWild(firstCard)) {
      usedCards = {};
      firstCard = takeACard(usedCards);
    }
    let drawCount = isDrawTwo(firstCard) ? 2 : 0;
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
        discardPile: firstCard,
        currentMove: 0,
        deckDict: usedCards,
        isReverse: false,
        drawPile: false,
        drawCount: drawCount,
        yellOne: null,
        pennalty: null,
      },
      { merge: true }
    );
  };

  if (!room) {
    return (
      <Main color={"gray"}>
        <Layout />
        <Heading type="h1" color="white">
          {t("playerId:loading")}
        </Heading>
      </Main>
    );
  }
  if (room.playing) {
    return (
      <Main color={"gray"}>
        <Layout />
        <StartGame
          room={room}
          roomId={roomId}
          playersActive={playersActive}
          playerId={playerId}
          onNewGame={onNewGame}
        />
      </Main>
    );
  } else {
    const playersSlots = [];
    for (let i = 0; i < room.count; i++) {
      const player = playersActive[i];
      playersSlots.push(
        <li className="py-2 text-gray-700" key={i}>
          <div className="flex">
            <span className="flex-auto">
              {player ? player.data().name : t("playerId:waiting-player")}
              {player && player.id === playerId ? t("playerId:you") : null}
            </span>
            {player ? <span>✅</span> : null}
          </div>
        </li>
      );
    }

    return (
      <Main color="gray">
        <Layout />
        <div className="flex-auto px-4 py-8 px-4 py-8 mx-auto w-full">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg ">
              <div className="bg-white p-4 rounded shadow">
                <div className="my-4">
                  <p className="text-gray-700 font-bold">
                    {t("playerId:link")}
                  </p>
                  <input
                    className="w-full text-gray-700 border-2 border-gray-300 h-12 mt-1 p-2 rounded g-gray-200 my-4"
                    readOnly
                    value={`${getBaseUrl()}/rooms/${roomId}`}
                  ></input>
                  <RoomLinkButton link={`${getBaseUrl()}/rooms/${roomId}`} />
                </div>
                <div className="my-4">
                  <p className="text-gray-700 font-bold">
                    {t("playerId:players")}
                  </p>
                  <ol className="divide-y divide-gray-400 list-decimal pl-5">
                    {playersSlots}
                  </ol>
                </div>
                {playersActive.map((player) => {
                  const isAdmin =
                    player.data().admin == true && player.id == playerId;
                  return isAdmin ? (
                    <Button
                      key={player.id}
                      color={
                        playersActive.length == room.count ? "green" : "red"
                      }
                      onClick={onNewGame}
                      className="w-full"
                      disabled={isAdmin ? false : true}
                    >
                      {t("playerId:start")}
                    </Button>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Main>
    );
  }
}

const RoomLinkButton = ({ link }) => {
  const { t } = useTranslation();
  const [copiedLinkToClipboard, setCopiedLinkToClipboard] = useState(false);

  return (
    <CopyToClipboard
      text={link}
      onCopy={() => {
        setCopiedLinkToClipboard(true);
      }}
    >
      <Button
        onBlur={() => setCopiedLinkToClipboard(false)}
        color={copiedLinkToClipboard ? "gray" : "yellow"}
      >
        {copiedLinkToClipboard ? t("playerId:copied") : t("playerId:copy-link")}
      </Button>
    </CopyToClipboard>
  );
};
