const dynamicText = document.querySelector("h1 span");
const words = ["MiiNova", "Siwat", "m.mii.kub", "SAPA67", "IT SAPA"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const updatedText = currentWord.slice(0, charIndex);
  dynamicText.textContent = updatedText;

  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 80);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, 1200);
  }
}

typeEffect();

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  const muteBtn = document.getElementById("muteBtn");
  const icon = muteBtn.querySelector("i");

  audio.volume = 0.3;
  audio.muted = true;

  muteBtn.addEventListener("click", () => {
    if (audio.muted || audio.paused) {
      audio.muted = false;
      audio.play().then(() => {
        icon.className = "fa-solid fa-volume-high fa-beat-fade";
        muteBtn.title = "ปิดเสียง";
      }).catch(err => {
        console.warn("⛔ Autoplay error:", err);
      });
    } else {
      audio.muted = true;
      icon.className = "fa-solid fa-volume-xmark";
      muteBtn.title = "เปิดเสียง";
    }
  });
});
