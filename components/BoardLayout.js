import useTranslation from "next-translate/useTranslation";

export default function BoardLayout({
  players,
  currentPlayerId,
  renderPlayer,
  drawPile,
  discardPile,
  playerOptions,
  yellOneMessage,
  winner,
  onNewGame,
}) {
  const { t } = useTranslation();
  const currentPlayer = players.find((player) => player.id == currentPlayerId);
  const indexCurrentPlayer = players.indexOf(currentPlayer);

  return (
    <div
      className="grid-cols-3"
      style={{
        display: "grid",
        alignContent: "center",
        gridTemplateRows: "auto auto 1fr auto",
        width: "100%",
      }}
    >
      {players.map((player, index) => {
        const isCurrentPlayer = player.id === currentPlayerId;
        let positionPlayer;
        players.length == 2
          ? (positionPlayer = {
              0: {
                grid: "row-start-4 col-start-1 col-span-3",
              },
              1: {
                grid: "row-start-1 col-start-2 col-span-1",
              },
            })
          : (positionPlayer = {
              0: {
                grid: "row-start-4 col-start-1 col-span-3",
              },
              1: {
                grid: "row-start-2 col-start-1 col-span-1",
              },
              2: {
                grid: "row-start-1 col-start-2 col-span-1",
              },
              3: {
                grid: "row-start-2 col-start-3 col-span-1",
              },
            });
        const posPlayer =
          (players.length - indexCurrentPlayer + index) % players.length;

        return (
          <div
            key={player.id}
            className={`${positionPlayer[posPlayer].grid} flex flex-col items-center `}
          >
            {renderPlayer(player, isCurrentPlayer)}
          </div>
        );
      })}
      <div
        className={`row-start-3 col-span-3 md:row-start-2 md:col-start-2 md:col-span-1 lg:px-20 py-4 flex flex-col justify-center items-center`}
      >
        {winner ? (
          <div className="flex flex-no-wrap">
            <h1 className="z-10 bg-red-700 text-white m-2 font-medium text-center text-xl md:text-2x p-4 rounded">
              {t("playerId:winner-board.winner")} {winner.data().name}
            </h1>
            {discardPile}
          </div>
        ) : (
          <div className="flex flex-no-wrap">
            {drawPile}
            {discardPile}
          </div>
        )}

        <div className="m-4 md:m-4 w-full sm:w-1/2 flex justify-center flex-col">
          {winner ? (
            <button
              className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => onNewGame()}
            >
              {t("playerId:winner-board.replay")}
            </button>
          ) : (
            playerOptions
          )}
        </div>
      </div>
      <div className="row-start-1 col-start-1 col-span-3 flex flex-col items-center justify-center">
        {winner ? null : yellOneMessage}
      </div>
    </div>
  );
}
