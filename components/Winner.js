import WinnerBoardLayout from "~/components/WinnerBoardLayout";
import Heading from "~/components/Heading";
import PlayerCards from "~/components/PlayerCards";
import { isAllowedToThrow, isWild, sortCards } from "~/utils/game";
import useCardAnimations from "~/hooks/useCardAnimations";
import WinnerPlayersCards from "~/components/WinnerPlayersCards";

export default function Winner({
  onNewGame,
  winner,
  room,
  roomId,
  playersActive,
  playerId,
}) {
  const { drawPileRef, pileRef, onCardAdd, onCardRemove } = useCardAnimations();
  const onDiscardACard = (card, color) => {
    if (isWild(card) && !color) {
      setWildCard(card);
      return;
    }
    discardACard(roomId, playersActive, card, color, room);
    setWildCard(null);
  };
  const currentMovePlayer = playersActive[room.currentMove];
  return (
    <>
      <WinnerBoardLayout
        winner={winner}
        onNewGame={onNewGame}
        players={playersActive}
        currentPlayerId={playerId}
        renderPlayer={(player, isCurrentPlayer) => (
          <>
            <Heading color="white" type="h1" margin="2">
              <span
                className={
                  currentMovePlayer.id == player.id
                    ? "bg-yellow-500 p-2 rounded text-black font-bold pl-2"
                    : "opacity-50 pl-2"
                }
              >
                {player.data().name}
              </span>
            </Heading>
            <WinnerPlayersCards
              cards={sortCards(player.data().cards)}
              isCurrentPlayer={isCurrentPlayer}
              onDiscardACard={onDiscardACard}
              isCardDisabled={(card) =>
                currentMovePlayer.id != player.id ||
                !isAllowedToThrow(
                  card,
                  room.discardPile,
                  room.discardColor,
                  room.drawCount,
                  player.data().cards
                )
              }
              onCardAdd={onCardAdd}
              onCardRemove={onCardRemove}
            />
          </>
        )}
      />
      {/* <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="z-10 bg-red-700 text-white m-2 font-medium text-center text-xl md:text-2x p-4 rounded">
          Ganó el jugador: {winner.data().name}
        </h1>
        tendria que aparecer las cartas de los oponentes 
      dadas vuelta y en cada jugador el total de puntos 
      de cada uno  y luego sumarlo al jugador que Ganó
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => onNewGame()}
        >
          Jugar de nuevo
        </button>
      </div> */}
    </>
  );
}
