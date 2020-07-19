import useTranslation from "next-translate/useTranslation";

export default function CurrentMovePlayerOptiones({
  currentMovePlayer,
  playerId,
  onPassTurn,
  room,
  onYellOne,
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`px-8 sm:px-0 flex flex-1 flex-row mt-1 justify-center ${
        currentMovePlayer.id == playerId ? "" : "invisible"
      }`}
    >
      <button
        onClick={() => onPassTurn(room.currentMove)}
        className={`text-2xl md:text-xl flex-initial text-white font-bold py-1 md:py-2 px-4 rounded bg-${
          room.drawPile == false ? "gray-500" : "green-700"
        } hover:bg-${room.drawPile == false ? "gray-500" : "green"}-500 mr-2`}
        disabled={room.drawPile == false ? true : false}
      >
        {t("playerId:player-options.pass")}
      </button>
      <button
        onClick={() => onYellOne(room.currentMove)}
        className={`text-2xl md:text-xl bg-red-700 hover:bg-red-500 text-white font-bold py-1 px-2 md:p-2 rounded ml-2`}
      >
        UNO!
      </button>
    </div>
  );
}
