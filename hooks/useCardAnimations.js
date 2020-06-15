import { useState, useRef, useEffect } from "react";

const useCardAnimations = () => {
  const isMountedRef = useRef();
  const pileRef = useRef();
  const drawPileRef = useRef();

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const onCardRemove = (el) => {
    if (isMountedRef.current) {
      animateCardTransition(el, pileRef.current);
    }
  };

  const onCardAdd = (el) => {
    if (isMountedRef.current) {
      animateCardTransition(drawPileRef.current, el);
    }
  };

  return { drawPileRef, pileRef, onCardAdd, onCardRemove };
};

const animateCardTransition = (cardElement, toElement) => {
  if (!cardElement || !toElement) {
    console.log(
      "Cannot animate card: cardElement: ",
      cardElement,
      "toElement:",
      toElement
    );
    return;
  }
  const coords = cardElement.getBoundingClientRect();
  const pileCoords = toElement.getBoundingClientRect();

  if (pileCoords.height == 0 || coords.height == 0) {
    console.log(
      "Cannot animate card: pile height:",
      pileCoords.height,
      "card height:",
      coords.height
    );
    return;
  }

  const scale = pileCoords.height / coords.height;

  const cardClone = cardElement.cloneNode(true);
  const toClone = toElement.cloneNode(true);

  toElement.style.display = "none";

  toElement.parentNode.appendChild(toClone);
  document.body.appendChild(cardClone);
  cardClone.style.position = "absolute";
  cardClone.style.top = 0;
  cardClone.style.left = 0;

  const duration = 300;
  cardClone.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translate(${coords.left}px, ${coords.top}px)`,
      },
      {
        transformOrigin: "top left",
        transform: `translate(${pileCoords.left}px, ${pileCoords.top}px) scale(${scale})`,
      },
    ],
    {
      duration,
      easing: "ease-in-out",
      fill: "both",
    }
  );
  setTimeout(() => {
    cardClone.remove();
    toElement.style.display = "initial";
    toClone.remove();
  }, duration);
};

export default useCardAnimations;
