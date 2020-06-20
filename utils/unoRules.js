import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export const stackTwoTxt = (
  <p className="px-2">
    <Trans i18nKey="common:rules-modal.stackTwoTxt" components={[<b />]} />
  </p>
);

export const stackFourTxt = (
  <p className="px-2">
    <Trans i18nKey="common:rules-modal.stackFourTxt" components={[<b />]} />
  </p>
);
export const skipReverserTxt = (
  <p className="px-2">
    <Trans
      i18nKey="common:rules-modal.skipReverserTxt"
      components={[<b />, <b />]}
    />
  </p>
);

export const objectTxt = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-red-700 text-lg font-bold text-center">
        {t("common:rules-modal.objectTxt-title")}
      </h2>
      <p>
        <Trans
          i18nKey="common:rules-modal.objectTxt"
          components={[<b />, <b />]}
        />
      </p>
    </div>
  );
};

export const setUpTxt = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-red-700 text-lg font-bold text-center">
        {t("common:rules-modal.setUpTxt-title")}
      </h2>
      <p>
        <Trans
          i18nKey="common:rules-modal.setUpTxt"
          components={[<b />, <b />]}
        />
      </p>
    </div>
  );
};

export const gamePlayTxt = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-red-700 text-lg font-bold text-center">
        {t("common:rules-modal.gamePlayTxt-title")}
      </h2>
      <p>
        <Trans
          i18nKey="common:rules-modal.gamePlayTxt"
          components={[
            <b />,
            <b />,
            <b />,
            <em className="text-red-700 font-bold" />,
            <em />,
            <b />,
            <br />,
            <em className="text-red-700 font-bold" />,
            <b />,
            <b />,
            <br />,
          ]}
        />
      </p>
    </div>
  );
};

export const skipTxt = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-col p-2">
      <p className="text-red-700 font-bold ">
        {t("common:rules-modal.skipTxt-title")}
      </p>
      <p>{t("common:rules-modal.skipTxt")}</p>
    </div>
  );
};
export const reverseTxt = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-col p-2">
      <p className="text-red-700 font-bold ">
        {t("common:rules-modal.reverseTxt-title")}
      </p>
      <p>{t("common:rules-modal.reverseTxt")}</p>
    </div>
  );
};
export const cardsTwoTxt = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-col p-2">
      <p className="text-red-700 font-bold ">
        {t("common:rules-modal.cardsTwoTxt-title")}
      </p>
      <p>
        <Trans
          i18nKey="common:rules-modal.cardsTwoTxt"
          components={[<b />, <em className="text-red-700 font-bold" />]}
        />
      </p>
    </div>
  );
};
export const wildTxt = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-col p-2">
      <p className="text-red-700 font-bold ">
        {t("common:rules-modal.wildTxt-title")}
      </p>
      <p>{t("common:rules-modal.wildTxt")}</p>
    </div>
  );
};
export const wildFourTxt = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-col p-2">
      <p className="text-red-700 font-bold ">
        {t("common:rules-modal.wildFourTxt-title")}
      </p>
      <p>{t("common:rules-modal.wildFourTxt")}</p>
    </div>
  );
};

export const cardsToTxt = {
  /* <h3>Puntos</h3>
    <p>
      El jugador que ha puesto todas sus cartas primeramente, recibe los
      siguientes puntos por las cartas de sus jugadores que tienen todavía en la
      mano:
      <ol>
        <li>Todas las cartas de números Valor</li>
        <li>Carta toma dos 20 puntos</li>
        <li>Carta de retorno 20 puntos</li>
        <li>Carta de intermisión 20 puntos</li>
        <li>Carta de elección de colores 50 puntos</li>
        <li>Carta de tomar cuatro colores 50 puntos</li>
      </ol>
      Quién llega a 500 puntos al primero gana el juego. Además de las reglas
      estándar de UNO, todavía hay muchas modificaciones y variantes. Una visión
      general se puede encontrar en el siguiente enlace: Variantes del juego UNO
    </p> */
};
