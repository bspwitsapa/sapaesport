// พิมพ์ชื่อแบบ Typewriter Effect
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
  
    // เริ่มเล่นแบบเสียงเบาและค่อย ๆ ดังขึ้น
    audio.volume = 0;
    audio.muted = false;
    const maxVolume = 0.3;
  
    audio.play().then(() => {
      let vol = 0;
      const interval = setInterval(() => {
        vol += 0.01;
        if (vol >= maxVolume) {
          audio.volume = maxVolume;
          clearInterval(interval);
        } else {
          audio.volume = vol;
        }
      }, 100);
    }).catch(err => {
      console.warn("Autoplay blocked:", err);
    });
  
    // ปุ่ม mute/unmute
    muteBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      icon.className = audio.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
    });
  });
  