export default function Ruler() {
  const ruler = document.querySelector('.ruler-div');
  const spacing = 50; // space between ruler marks in pixels

  for (let i = 0; i < ruler.offsetWidth; i += spacing) {
    const mark = document.createElement("div");
    mark.classList.add("ruler-mark");
    mark.style.left = i + "px";
    ruler.appendChild(mark);

    const label = document.createElement("div");
    label.classList.add("ruler-label");
    label.style.left = i + "px";
    label.textContent = i;
    ruler.appendChild(label);
  }
}
