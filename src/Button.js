export default function Button({
  handleClick,
  id,
  value,
  setText,
  text,
  classID,
}) {
  return (
    <div className={classID} id={id} onClick={() => handleClick(value)}>
      <span>{value}</span>
    </div>
  );
}
