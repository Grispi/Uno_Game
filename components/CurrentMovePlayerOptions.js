export default function CurrentMovePlayerOptiones({
  currentMovePlayer,
  playerId,
  onPassTurn,
  room,
  onYellOne,
}) {
  return (
    <div
      className={`px-8 sm:px-0 flex flex-1 flex-row ${
        currentMovePlayer.id == playerId ? "" : "invisible"
      }`}
    >
      <button
        onClick={() => onPassTurn(room.currentMove)}
        className={`flex-1 text-white font-bold py-2 px-2 rounded bg-${
          room.drawPile == false ? "gray-500" : "green-700"
        } hover:bg-${room.drawPile == false ? "gray-500" : "green"}-500 mr-2`}
        disabled={room.drawPile == false ? true : false}
      >
        PASO
      </button>
      <button
        onClick={() => onYellOne(room.currentMove)}
        className={`bg-red-700 hover:bg-red-500 text-white font-bold p-2 rounded ml-2`}
      >
        UNO!
      </button>
    </div>
  );
}
