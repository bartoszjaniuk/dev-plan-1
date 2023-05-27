function createEmoji() {
  const emoji = document.createElement("span");
  emoji.className = "emoji";
  emoji.innerHTML = "🚀";

  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 5 + 3;

  emoji.style.left = startX + "px";
  emoji.style.animationDuration = duration + "s";

  emoji.addEventListener("animationend", () => {
    emoji.remove();
  });

  document.body.appendChild(emoji);
}

function removeEmoji() {
  const emoji = document.querySelector(".emoji");
  if (!emoji) return;
  emoji.remove();
}

setTimeout(createEmoji, 1000);
setTimeout(removeEmoji, 2000);
