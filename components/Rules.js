import {
  reverseTxt,
  stackFourTxt,
  stackTwoTxt,
  skipReverserTxt,
  objectTxt,
  setUpTxt,
  gamePlayTxt,
  cardsTwoTxt,
  skipTxt,
  wildTxt,
  wildFourTxt,
} from "~/utils/unoRules";
import { cards } from "~/utils/cards";
import { Card } from "~/components/Card";
import React from "react";
import Container from "~/components/Container";
import useTranslation from "next-translate/useTranslation";

const getCardValue = (card) => {
  const value =
    cards.findIndex(
      (c) =>
        c.color === card.color &&
        c.number === card.number &&
        c.special === card.special
    ) + 1;

  return value;
};

export default function Rules() {
  const { t } = useTranslation();
  const skipCard = getCardValue({ color: "green", special: "skip" });
  const reverseCard = getCardValue({ color: "green", special: "reverse" });
  const drawTwoCard = getCardValue({ color: "green", special: "drawTwo" });
  const drawTwoRedCard = getCardValue({ color: "red", special: "drawTwo" });

  const wildCard = getCardValue({ special: "wild" });
  const wildFourCard = getCardValue({ special: "wild-drawFour" });

  return (
    <Container size="large">
      <div className="items-center justify-between">
        <h2 className="text-red-700 text-lg font-bold text-center">
          {t("common:rules-modal.special-rules")}
        </h2>
        <div className="flex">
          <div className="flex items-center">
            <Card sizeSM={8} sizeMD={10} card={drawTwoCard} />
            <p className="px-1">+</p>
            <Card sizeSM={8} sizeMD={10} card={drawTwoRedCard} />
          </div>
          {stackTwoTxt}
        </div>

        <div className="flex py-2">
          <div className="flex items-center">
            <Card sizeSM={8} sizeMD={10} card={wildFourCard} />
            <p className="px-1">+</p>
            <Card sizeSM={8} sizeMD={10} card={wildFourCard} />
          </div>
          {stackFourTxt}
        </div>
        <br />
        <div>
          <h2 className="text-red-700 text-lg font-bold text-center">
            {t("common:rules-modal.special-rules-two")}
          </h2>
          <div className="flex">
            <div className="flex items-center">
              <Card sizeSM={8} sizeMD={10} card={reverseCard} />
              <p className="px-1">=</p>
              <Card sizeSM={8} sizeMD={10} card={skipCard} />
            </div>
            {skipReverserTxt}
          </div>
        </div>
        <br />
        <div>
          <h2 className="text-red-700 text-lg font-bold text-center">
            {t("common:rules-modal.demo")}
          </h2>
          <img src="/game.gif" alt="my image" />
        </div>
        <br />
        {objectTxt()}
        <br />
        {setUpTxt()}
        <br />
        {gamePlayTxt()}
        <br />
        <h2 className="text-red-700 text-lg font-bold text-center">
          {t("common:rules-modal.special-cards")}
        </h2>
        <div className="flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex justify-center p-2">
              <Card sizeSM={10} sizeMD={16} card={skipCard} />
            </div>
            {skipTxt()}
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center p-2">
              <Card sizeSM={10} sizeMD={16} card={reverseCard} />
            </div>
            {reverseTxt()}
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center p-2">
              <Card sizeSM={10} sizeMD={16} card={drawTwoCard} />
            </div>
            {cardsTwoTxt()}
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center p-2">
              <Card sizeSM={10} sizeMD={16} card={wildCard} />
            </div>
            {wildTxt()}
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center p-2">
              <Card sizeSM={10} sizeMD={16} card={wildFourCard} />
            </div>
            {wildFourTxt()}
          </div>
        </div>
      </div>
    </Container>
  );
}
