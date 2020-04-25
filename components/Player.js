export default function Player(props) {
  return (
    <div>
      <p>Jugador listo para jugar:</p>
      {props.children}
    </div>
  );
}
