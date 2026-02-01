const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const box = document.querySelector(".box");
const result = document.querySelector(".result");

let step = 0;

// Yes automatic dodge on click attempt (tap)
function dodgeYes(e) {
  e.preventDefault(); // yes par click nahi hone denge
  const boxRect = box.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();

  yesBtn.style.position = "absolute";

  switch (step) {
    case 0: // LEFT
      yesBtn.style.left = "10px";
      yesBtn.style.top = "20px";
      break;

    case 1: // RIGHT
      yesBtn.style.left = boxRect.width - yesBtn.offsetWidth - 10 + "px";
      yesBtn.style.top = "20px";
      break;

    case 2: // CENTRE
      yesBtn.style.left = boxRect.width / 2 - yesBtn.offsetWidth / 2 + "px";
      yesBtn.style.top = boxRect.height / 2 - yesBtn.offsetHeight / 2 + "px";
      break;

    case 3: // OUT OF BOX
      yesBtn.style.left = bodyRect.width - yesBtn.offsetWidth - 30 + "px";
      yesBtn.style.top = bodyRect.height - yesBtn.offsetHeight - 30 + "px";
      break;

    case 4: // BACK TO LEFT
      yesBtn.style.left = "10px";
      yesBtn.style.top = boxRect.height - yesBtn.offsetHeight - 10 + "px";
      break;

    case 5: // INVISIBLE
      yesBtn.style.display = "none";
      break;
  }

  step++;
}

// Yes button dodge on click/tap
yesBtn.addEventListener("click", dodgeYes);

// No button click → show message
noBtn.addEventListener("click", () => {
  result.innerHTML =
    "🎊 congratulations aap mere maya jaal mein fas chuke ho 🎊🙈";
});
