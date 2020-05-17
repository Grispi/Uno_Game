import { test, expect } from "@jest/globals";
import { isAllowedToThrow } from "../game";
import { cards } from "../cards";

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

test("Cards with same color than pile is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ color: "green", number: 0 }),
      getCardValue({ color: "green", number: 1 }),
      null,
      0,
      []
    )
  );
  expect(
    isAllowedToThrow(
      getCardValue({ color: "green", special: "skip" }),
      getCardValue({ color: "green", number: 1 }),
      null,
      0,
      []
    )
  ).toBe(true);
});

test("Cards with different color and value than pile is not allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ color: "green", number: 0 }),
      getCardValue({ color: "red", number: 1 }),
      null,
      0,
      []
    )
  ).toBe(false);
});

test("Cards with same number than pile is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ color: "red", number: 1 }),
      getCardValue({ color: "green", number: 1 }),
      null,
      0,
      []
    )
  ).toBe(true);
});

test("Cards with same special than pile is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ color: "red", special: "reverse" }),
      getCardValue({ color: "green", special: "reverse" }),
      null,
      0,
      []
    )
  ).toBe(true);
});

test("Cards with same special than pile and with drawCount +2 is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ color: "red", special: "drawTwo" }),
      getCardValue({ color: "green", special: "drawTwo" }),
      null,
      2,
      []
    )
  ).toBe(true);
});

test("Cards with same special than pile and with drawCount +4 is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild-drawFour" }),
      getCardValue({ special: "wild-drawFour" }),
      "red",
      4,
      []
    )
  ).toBe(true);
});

test("Cards with wild-drawFour special equal to the pile and with drawCount 0 and no same color in the playersCard is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild-drawFour" }),
      getCardValue({ special: "wild-drawFour" }),
      "red",
      0,
      [
        getCardValue({ special: "wild" }),
        getCardValue({ number: 1, color: "yellow" }),
        getCardValue({ number: 1, color: "green" }),
        getCardValue({ special: "wild-drawFour" }),
      ]
    )
  ).toBe(true);
});

test("Cards with wild-drawFour special equal to the pile and with drawCount 0 and same color in the playersCard is Not allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild-drawFour" }),
      getCardValue({ special: "wild-drawFour" }),
      "red",
      0,
      [
        getCardValue({ special: "wild" }),
        getCardValue({ number: 1, color: "red" }),
        getCardValue({ number: 1, color: "green" }),
        getCardValue({ special: "wild-drawFour" }),
      ]
    )
  ).toBe(false);
});

test("Cards with wild-drawFour special equal to the pile and with drawCount +4 and same color in the playersCard is allowed", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild-drawFour" }),
      getCardValue({ special: "wild-drawFour" }),
      "red",
      4,
      [
        getCardValue({ special: "wild" }),
        getCardValue({ number: 1, color: "red" }),
        getCardValue({ number: 1, color: "green" }),
        getCardValue({ special: "wild-drawFour" }),
      ]
    )
  ).toBe(true);
});

test("The wild-drawFour card when the player has another card with same color is Not allow ", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild-drawFour" }),
      getCardValue({ number: 4, color: "red" }),
      null,
      0,
      [
        getCardValue({ special: "wild" }),
        getCardValue({ number: 1, color: "red" }),
        getCardValue({ number: 1, color: "green" }),
        getCardValue({ special: "wild-drawFour" }),
      ]
    )
  ).toBe(false);
});

test("The wild card is allow never mind the card in the pile ", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild" }),
      getCardValue({ number: 4, color: "red" }),
      null,
      0,
      [
        getCardValue({ special: "wild" }),
        getCardValue({ number: 1, color: "red" }),
        getCardValue({ number: 1, color: "green" }),
        getCardValue({ special: "wild-drawFour" }),
      ]
    )
  );
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild" }),
      getCardValue({ special: "wild-drawFour" }),
      "red",
      0,
      []
    )
  );
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild" }),
      getCardValue({ special: "skip", color: "yellow" }),
      null,
      0,
      []
    )
  ).toBe(true);
});

test("The wild card is Not allow when drawCount is more than 0 ", () => {
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild" }),
      getCardValue({ special: "wild-drawFour" }),
      "red",
      4,
      []
    )
  );
  expect(
    isAllowedToThrow(
      getCardValue({ special: "wild" }),
      getCardValue({ special: "drawTwo", color: "yellow" }),
      null,
      2,
      []
    )
  ).toBe(false);
});
