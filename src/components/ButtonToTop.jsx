export default function ButtonToTop() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      // behavior: "smooth"
    });
  }
  return (
    <button className="button-to-top" onClick={handleClick}>
      jump to top
    </button>
  );
}