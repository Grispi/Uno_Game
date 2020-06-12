export const stackTwoTxt = (
  <p className="px-2">
    Esta permitido <b>APILAR</b> cartas especiales de TOMA DOS sobre otra carta
    TOMA DOS, acumulándose las cartas a tomar para al próximo jugador.
  </p>
);

export const stackFourTxt = (
  <p className="px-2">
    También se podrá <b>APILAR</b> cartas TOMA CUATRO COLORES sobre otra carta
    TOMA CUATRO COLORES , acumulándose las cartas a tomar para al próximo
    jugador.
  </p>
);
export const skipReverserTxt = (
  <p className="px-2">
    La carta <b>RETORNO</b>, funcionará igual que la de <b>"SALTEAR"</b>, se
    saltea el turno del próximo jugador, debiendo jugar nuevamente el jugador
    que descarte este carta.
  </p>
);

export const objectTxt = (
  <div>
    <h2 className="text-red-700 text-lg font-bold text-center">
      Objetivo del juego
    </h2>
    <p>
      El objetivo del <b>juego UNO</b> es deshacerse de todas las cartas que se
      vaya teniendo en la mano, para ello debe coincidir{" "}
      <b>el número, el color o el símbolo/Acción</b> de la carta que vayamos a
      descartar con la que se encuentre en el mazo de descarte. Gana el juego el
      primero que se queda sin cartas.
    </p>
  </div>
);

export const preparacionTxt = (
  <div>
    <h2 className="text-red-700 text-lg font-bold text-center">
      Preparación del juego
    </h2>
    <p>
      Cada jugador recibe siete cartas. Las cartas restantes se ponen boca abajo
      en el centro y forman el <b>mazo</b>. La primera carta se da vuelta,
      formando el <b>mazo de descarte</b> y ...el juego comienza!
    </p>
  </div>
);

export const decursoTxt = (
  <div>
    <h2 className="text-red-700 text-lg font-bold text-center">
      Desarrollo del juego
    </h2>
    <p>
      El primer jugador tratará de igualar la carta del <b>mazo de Descarte </b>
      con alguna de las suyas debiendo coincidir con
      <b> el número, el color o el símbolo/Acción</b>. Si el jugador no tiene
      coincidencias o elige no jugar ninguna de sus cartas aunque tenga una
      coincidencia, debe robar una <b>carta del mazo</b>,{" "}
      <em className="text-red-700 font-bold">
        clickeando en las cartas que se encuentran dadas vueltas en el centro de
        la mesa de juego
      </em>
      . Si esa carta puede ser jugada… juégala. De lo contrario,{" "}
      <em>
        clickea el boton que dice <b>Paso</b>
      </em>{" "}
      y el juego pasa al siguiente jugador por turno.
      <br />
      Quién pone la penúltima carta, debe{" "}
      <em className="text-red-700 font-bold">
        clickear el botón <b>“UNO!”</b>
      </em>{" "}
      y tirar al mazo de descarte la anteúltima carta que tenga, señalando que
      tiene sólo una última carta en la mano. Si un jugador lo olvida se lo
      penalizará con cuatros cartas, como también será penalizado si clickea el
      botón <b>"UNO!"</b> en algún momento que no sea el apropiado. <br />
      El ganador de la ronda es el que tira la última carta. Los puntos se suman
      y se comienza una nueva ronda.
    </p>
  </div>
);

export const skipTxt = (
  <div className="flex-col p-2">
    <p className="text-red-700 font-bold ">CARTA DE SALTEAR</p>
    <p>
      Después de poner esta carta, el siguiente jugador será “saltado”. La carta
      sólo se puede superponer en una carta con color correspondiente o con otra
      carta de Saltear.
    </p>
  </div>
);
export const reverseTxt = (
  <div className="flex-col p-2">
    <p className="text-red-700 font-bold ">CARTA DE RETORNO</p>
    <p>
      Con esta carta se cambia la dirección. Si se ha jugado por la izquierda,
      ahora se juega por la derecha y por la inversa. La carta sólo se puede
      superponer en una carta con color correspondiente o con otra carta de
      retorno.
    </p>
  </div>
);
export const cardsTwoTxt = (
  <div className="flex-col p-2">
    <p className="text-red-700 font-bold ">CARTA TOMA DOS</p>
    <p>
      Cuando se pone esta carta, el siguiente jugador si no tiene otra carta de{" "}
      <b>TOMA DOS</b> ,aunque sea de otro color, debe "Tomar" -->{" "}
      <em className="text-red-700 font-bold">
        clickear en el mazo de cartas la cual te dará la cantidad de cartas que
        se hayan ido acumulando en el pozo{" "}
      </em>{" "}
      y no puede descartarse de ninguna carta en esta ronda. Esta carta sólo
      puede ser superpuesta en una carta con el color apropiado u otras cartas
      “toma dos”. Si se revela al principio del juego, las mismas reglas
      aplican.
    </p>
  </div>
);
export const wildTxt = (
  <div className="flex-col p-2">
    <p className="text-red-700 font-bold ">CARTA ELECCIÓN DE COLORES</p>
    <p>
      Esta carta representa los cuatro colores y puede ser colocada en cualquier
      carta. El jugador tiene que indicar qué color representará para el
      siguiente jugador. Se puede jugar independientemente de si hay otra carta
      disponible.
    </p>
  </div>
);
export const wildFourTxt = (
  <div className="flex-col p-2">
    <p className="text-red-700 font-bold ">
      CARTA TOMAR CUATRO Y ELECCION DE COLORES
    </p>
    <p>
      Actúa igual que el comodín - CARTA ELECCIÓN DE COLORES, excepto que el
      siguiente jugador también tiene que robar cuatro cartas y perder su turno.
      Salvo que también tenga otra carta igual para aplilar, pasando el pozo
      acumulado para el siguiente jugador que no tenga una carta igual que
      apilar. Para poder jugar esta carta, no se debe tener ninguna otra carta
      alternativa para jugar que coincida con el color de la carta jugada
      previamente.
    </p>
  </div>
);

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
