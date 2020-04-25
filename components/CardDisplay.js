import { cards } from "../utils/cards";
console.log(cards.length);
export default function CardDisplay({ card }) {
  const index = card - 1;
  if (typeof cards[index].color == "undefined") {
    console.log("carta sin color " + cards[index].special);
    return <p>{cards[index].special}</p>;
  } else {
    if (typeof cards[index].number == "undefined") {
      return (
        <p>
          {cards[index].color} {cards[index].special}
        </p>
      );
    } else {
      return (
        <p>
          {cards[index].color} {cards[index].number}
        </p>
      );
    }
  }
}