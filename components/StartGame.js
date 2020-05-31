import Heading from "~/components/Heading";
import GameInProgress from "~/components/GameInProgress";
import Winner from "~/components/Winner";

export default function StartGame({
  room,
  roomId,
  playersActive,
  playerId,
  onSubmitNewGame,
}) {
  if (!playersActive || playersActive.length === 0) {
    return (
      <Heading type="h1" color="white">
        Loading...
      </Heading>
    );
  } else {
    const winner = playersActive.find(
      (player) => player.data().cards.length == 0
    );
    if (winner) {
      return <Winner onSubmitNewGame={onSubmitNewGame} winner={winner} />;
    } else {
      return (
        <GameInProgress
          room={room}
          roomId={roomId}
          playersActive={playersActive}
          playerId={playerId}
        />
      );
    }
  }
}
