export default function Display({ text }) {
  return (
    <p data-testid="display" id="display">
      {text}
    </p>
  );
}
