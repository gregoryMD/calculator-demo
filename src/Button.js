export default function Button({ handleClick, id, value, setText, text }) {
  return (
    <div id={id} onClick={() => handleClick(value)}>
      <span>{value}</span>
    </div>
  );
}
