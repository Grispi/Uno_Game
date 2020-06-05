export default function WildCardOptions({ onChooseColor }) {
  return (
    <div className="flex flex-row  flex-wrap md:flex-no-wrap px-4">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => onChooseColor("red")}
      >
        Red
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2"
        onClick={() => onChooseColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
        onClick={() => onChooseColor("green")}
      >
        Green
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={() => onChooseColor("blue")}
      >
        Blue
      </button>
    </div>
  );
}
