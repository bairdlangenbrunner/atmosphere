export default function ButtonToBottom() {
  function handleClick() {
    window.scrollTo({
      top: document.body.scrollHeight,
      // behavior: "smooth"
    });
  }
  return (
    <button className="button-to-bottom" onClick={handleClick}>
      return to surface
    </button>
  );
}