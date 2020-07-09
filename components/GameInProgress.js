import useCardAnimations from "~/hooks/useCardAnimations";
import { useState } from "react";
import { isAllowedToThrow, isWild, sortCards } from "~/utils/game";
import Heading from "~/components/Heading";
import PlayerCards from "~/components/PlayerCards";
import WildCardOptions from "~/components/WildCardOptions";
import CurrentMovePlayerOptions from "~/components/CurrentMovePlayerOptions";
import DrawPile from "~/components/DrawPile";
import DiscardPile from "~/components/DiscardPile";
import BoardLayout from "~/components/BoardLayout";
import {
  yellOne,
  passTurn,
  drawCard,
  discardACard,
} from "~/gameLogic/gameLogic";
import useTranslation from "next-translate/useTranslation";
import HeaderPlayer from "~/components/HeaderPlayer";

export default function GameInProgress({
  room,
  roomId,
  playersActive,
  playerId,
  winner,
  onNewGame,
}) {
  const { t } = useTranslation();
  const [wildCard, setWildCard] = useState(null);
  const { drawPileRef, pileRef, onCardAdd, onCardRemove } = useCardAnimations();
  const currentMovePlayer = playersActive[room.currentMove];

  const onYellOne = (player) => {
    yellOne(player, roomId, playersActive, room);
  };

  const onPassTurn = (player) => {
    passTurn(player, roomId, room, playersActive);
  };

  const onDrawCard = () => {
    drawCard(room, playersActive, roomId);
  };

  const onDiscardACard = (card, color) => {
    if (isWild(card) && !color) {
      setWildCard(card);
      return;
    }
    discardACard(roomId, playersActive, card, color, room);
    setWildCard(null);
  };
  return (
    <div className="flex flex-1">
      <BoardLayout
        players={playersActive}
        currentPlayerId={playerId}
        renderPlayer={(player, isCurrentPlayer) => (
          <>
            <HeaderPlayer color="white" type="h1" margin="0" marginBottom="1">
              <span
                className={
                  currentMovePlayer.id == player.id
                    ? "p-2 rounded text-black font-bold pl-2 animation"
                    : "opacity-50 pl-2"
                }
              >
                {currentMovePlayer.id == player.id ? <span>👉 </span> : null}
                {player.data().name}
              </span>
            </HeaderPlayer>
            <PlayerCards
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
              winner={winner}
            />
          </>
        )}
        drawPile={
          <DrawPile
            onDrawCard={onDrawCard}
            canDrawFromPile={!room.drawPile}
            isCurrentPlayerTurn={currentMovePlayer.id == playerId}
            drawPileRef={drawPileRef}
          />
        }
        discardPile={
          <DiscardPile
            discardPile={room.discardPile}
            discardColor={room.discardColor}
            pileRef={pileRef}
          />
        }
        playerOptions={
          wildCard ? (
            <WildCardOptions
              onChooseColor={(color) => onDiscardACard(wildCard, color)}
            />
          ) : (
            <CurrentMovePlayerOptions
              currentMovePlayer={currentMovePlayer}
              playerId={playerId}
              onPassTurn={onPassTurn}
              room={room}
              onYellOne={onYellOne}
            />
          )
        }
        yellOneMessage={
          room.yellOne != null ? (
            <h1 className="z-10 bg-red-700 text-white m-2 font-medium text-center text-xl md:text-2x p-4 rounded">
              {t("playerId:yell-one")} {playersActive[room.yellOne].data().name}
            </h1>
          ) : null
        }
        winner={winner}
        onNewGame={onNewGame}
      />
    </div>
  );
}
