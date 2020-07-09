import useTranslation from "next-translate/useTranslation";

export default function WildCardOptions({ onChooseColor }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row flex-no-wrap md:flex-no-wrap mt-2 px-2 md:px-4 justify-center">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 md:py-2 px-2 rounded mx-2 flex-auto"
        onClick={() => onChooseColor(t("red"))}
      >
        {t("playerId:wild-options.red")}
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 md:py-2 px-2 rounded mr-2 flex-auto"
        onClick={() => onChooseColor("yellow")}
      >
        {t("playerId:wild-options.yellow")}
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 md:py-2 px-2 rounded flex-auto"
        onClick={() => onChooseColor("green")}
      >
        {t("playerId:wild-options.green")}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 rounded mx-2 flex-auto"
        onClick={() => onChooseColor("blue")}
      >
        {t("playerId:wild-options.blue")}
      </button>
    </div>
  );
}
