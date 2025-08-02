const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

const keys = ["w", "a", "s", "d", "j", "k", "l"];

document.addEventListener("keypress", (event) => {
  let key = event.key;
  if (!keys.includes(key)) {
    return;
  }
  playSound(key);
  buttonAnimation(key);
});

function playSound(key) {
  switch (key) {
    case "w":
      audioPlay("sounds/tom-1.mp3");
      break;
    case "a":
      audioPlay("sounds/tom-2.mp3");
      break;
    case "s":
      audioPlay("sounds/tom-3.mp3");
      break;
    case "d":
      audioPlay("sounds/tom-4.mp3");
      break;
    case "j":
      audioPlay("sounds/snare.mp3");
      break;
    case "k":
      audioPlay("sounds/crash.mp3");
      break;
    case "l":
      audioPlay("sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
}

function audioPlay(path) {
  let audio = new Audio(path);
  audio.play();
}

function buttonAnimation(key) {
  let activeKey = document.querySelector("." + key);

  activeKey.classList.add("pressed");

  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 100);
}
