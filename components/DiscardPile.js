import { Card } from "~/components/Card";

export default function DiscardPile({ discardPile, discardColor, pileRef }) {
  return (
    <button ref={pileRef}>
      <Card
        sizeSM={16}
        sizeMD={20}
        card={discardPile}
        wildColor={discardColor}
      />
    </button>
  );
}
