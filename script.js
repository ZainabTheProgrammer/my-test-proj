const bank1 = {
  Q: { name: "Heater 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  W: { name: "Heater 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  E: { name: "Heater 3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  A: { name: "Heater 4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  S: { name: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  D: { name: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  Z: { name: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  X: { name: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  C: { name: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
};

const powerSwitch = document.getElementById("power-switch");
const display = document.getElementById("display");
const volumeSlider = document.getElementById("volume-slider");

function playSound(letter) {
  if (!powerSwitch.checked) return;

  const sound = bank1[letter];
  const audio = new Audio(sound.url);
  audio.volume = volumeSlider.value;
  audio.play();
  display.textContent = sound.name;
}

document.querySelectorAll(".drum-pad").forEach(button => {
  button.addEventListener("click", () => playSound(button.id));
});

document.addEventListener("keydown", event => {
  const key = event.key.toUpperCase();
  if (bank1[key]) {
    document.getElementById(key)?.click();
  }
});

volumeSlider.addEventListener("input", () => {
  if (powerSwitch.checked) {
    display.textContent = "Volume: " + Math.round(volumeSlider.value * 100);
  }
});
