// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Quiz logic
let score = 0;
let total = 0;
function jawabQuiz(poin) {
  score += poin;
  total++;
  document.getElementById("quiz-score").textContent = score;
}

// Kalkulator jejak karbon
function hitungKarbon() {
  const km = parseFloat(document.getElementById("km").value) || 0;
  const daging = parseFloat(document.getElementById("daging").value) || 0;
  const hasil = (km * 0.2 + daging * 2).toFixed(2);
  document.getElementById("hasil-karbon").textContent = `Jejak karbon mingguanmu sekitar ${hasil} kg CO₂.`;
}

// Fade in animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-fill").style.width = `${scrollPercent}%`;
});

document.getElementById("dukung-btn").addEventListener("click", () => {
  document.getElementById("dukung-feedback").classList.remove("hidden");
});

let kontribusiCount = 0;

document.getElementById("dukung-btn").addEventListener("click", () => {
  kontribusiCount++;
  document.getElementById("counter").textContent = kontribusiCount;
  document.getElementById("dukung-feedback").classList.remove("hidden");
});
