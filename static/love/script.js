const revealButton = document.getElementById("revealButton");
const blessingLetter = document.getElementById("loveLetter");
const blessingBurst = document.getElementById("blessingBurst");
const galleryImages = document.querySelectorAll(".memory-card img");

function createBlessingBurst() {
  const count = 18;

  for (let i = 0; i < count; i += 1) {
    const leaf = document.createElement("span");
    leaf.className = "burst-leaf";
    leaf.style.left = `${44 + Math.random() * 12}%`;
    leaf.style.bottom = `${20 + Math.random() * 10}%`;
    leaf.style.animationDelay = `${i * 45}ms`;
    leaf.style.transform = `rotate(${Math.random() * 140}deg)`;
    leaf.style.background = `linear-gradient(180deg, hsla(${72 + Math.random() * 12}, 62%, 70%, 0.96), hsla(${86 + Math.random() * 14}, 48%, 34%, 0.96))`;
    blessingBurst.appendChild(leaf);

    setTimeout(() => {
      leaf.remove();
    }, 1700);
  }
}

if (revealButton && blessingLetter) {
  revealButton.addEventListener("click", () => {
    blessingLetter.scrollIntoView({ behavior: "smooth", block: "center" });
    createBlessingBurst();
  });
}

galleryImages.forEach((image) => {
  image.addEventListener("error", () => {
    const fallback = image.dataset.fallback;

    if (fallback && image.src !== fallback) {
      image.src = fallback;
    }
  });
});
