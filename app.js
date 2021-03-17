let size = prompt(
  "How please enter a number -- This will be your side length of your square"
);

const container = document.querySelector("#container");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.width = "960px";
container.style.height = "800px";
container.style.padding = "10px";
let numOfDivs = 0;
let gridDiv = "";
const button = document.querySelector("#button-container");
button.style.textAlign = "center";

function containerSize(size) {
  if (size < 0 || size > 90) {
    alert("Please enter a valid number");
    location.reload();
  } else {
    numOfDivs = size * size;
  }
}
containerSize(size);

function changeColor(e) {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let color = `rgb(${c1}, ${c2}, ${c3})`;

  e.target.style.backgroundColor = color;
}

function createGrid(numOfDivs) {
  for (let i = 0; i < numOfDivs; i++) {
    gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", "box");
    container.appendChild(gridDiv);
    gridDiv.addEventListener("mouseover", changeColor);
    container.appendChild(gridDiv);
  }
}

createGrid(numOfDivs);

const reset = document.createElement("button");
let resetText = document.createTextNode("");
reset.setAttribute("id", "reset");
button.appendChild(reset);
reset.addEventListener("mouseover", changeColor);
reset.addEventListener("click", () => {
  location.reload();
});

reset.style.display = "box";
reset.style.margin = "0 auto";
reset.style.width = "200px";
reset.style.height = "25px";
reset.style.borderRadius = "10px";
reset.textContent = "RESET BOARD";
