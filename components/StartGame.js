import Heading from "~/components/Heading";
import GameInProgress from "~/components/GameInProgress";
import Winner from "~/components/Winner";
import useTranslation from "next-translate/useTranslation";

export default function StartGame({
  room,
  roomId,
  playersActive,
  playerId,
  onNewGame,
}) {
  const { t } = useTranslation();

  if (!playersActive || playersActive.length === 0) {
    return (
      <Heading type="h1" color="white">
        {t("common:loading")}
      </Heading>
    );
  } else {
    const winner = playersActive.find(
      (player) => player.data().cards.length == 0
    );
    return (
      <GameInProgress
        room={room}
        roomId={roomId}
        playersActive={playersActive}
        playerId={playerId}
        winner={winner}
        onNewGame={onNewGame}
      />
    );
  }
}
