const revealButton = document.getElementById("revealButton");
const loveLetter = document.getElementById("loveLetter");
const heartBurst = document.getElementById("heartBurst");

function createHeartBurst() {
  const count = 18;

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.style.left = `${45 + Math.random() * 10}%`;
    heart.style.bottom = `${20 + Math.random() * 8}%`;
    heart.style.animationDelay = `${i * 45}ms`;
    heart.style.background = `hsla(${330 + Math.random() * 25}, 72%, ${55 + Math.random() * 12}%, 0.85)`;
    heartBurst.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1600);
  }
}

revealButton.addEventListener("click", () => {
  loveLetter.scrollIntoView({ behavior: "smooth", block: "center" });
  createHeartBurst();
});
