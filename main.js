// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector('#current-color')

const colorPalette = document.querySelectorAll('#palette .color')

colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    // console.log(color);
    currentColor.style.background = color.style.background;
  })
});

const cell = document.querySelectorAll(".cell")

cell.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  })
});
