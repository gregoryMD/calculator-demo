export default function Button({
  handleClick,
  id,
  value,
  setText,
  text,
  classID,
  datatestid,
}) {
  return (
    <div
      className={classID}
      id={id}
      data-testid={id}
      onClick={() => handleClick(value)}
    >
      <span>{value}</span>
    </div>
  );
}
