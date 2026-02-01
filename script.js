const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const box = document.querySelector(".box");
const result = document.querySelector(".result");

// Yes button dodge only on tap / hover
yesBtn.addEventListener("mouseover", dodgeYes);
yesBtn.addEventListener("touchstart", dodgeYes);

function dodgeYes(e) {
  e.preventDefault();

  const boxRect = box.getBoundingClientRect();
  const btnRect = yesBtn.getBoundingClientRect();

  // Safe random positions inside the box
  const maxX = boxRect.width - btnRect.width - 10;
  const maxY = boxRect.height - btnRect.height - 10;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.position = "absolute";
  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
}

// No button click → show message
noBtn.addEventListener("click", () => {
  result.innerHTML =
    "🎊 congratulations aap mere maya jaal mein fas chuke ho 🎊🙈";
});
