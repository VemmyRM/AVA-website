const pictures = ["flowers.jpg", "kitty.jpg", "puppy.png", "squishmallow.jpg"];
const colorButton = document.getElementById("ves-color-picker");
const vesButton = document.getElementById("ves-box");
const submitButton = document.getElementById("submit1");
vesButton.style.color = colorButton.value;
const body = document.getElementsByTagName("body")[0];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
colorButton.addEventListener(
  "change",
  (ev) => (vesButton.style.color = ev.target.value)
);
submitButton.addEventListener("click", (ev) => {
  const randomNumber = getRandomInt(pictures.length);

  body.style.backgroundImage = `url('${pictures[randomNumber]}')`;
});
