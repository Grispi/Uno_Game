export default function Winner({ onSubmitNewGame, winner }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="z-10 bg-red-700 text-white m-2 font-medium text-center text-xl md:text-2x p-4 rounded">
        Ganó el jugador: {winner.data().name}
      </h1>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => onSubmitNewGame()}
      >
        Jugar de nuevo
      </button>
    </div>
  );
}
