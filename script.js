const texts = [
  "Tudo começou com um simples olhar…",
  "Depois vieram as conversas que duravam horas.",
  "As risadas, os abraços, os silêncios confortáveis.",
  "Os dias difíceis — e mesmo assim, era você.",
  "Cada dia ao seu lado virou escolha.",
  "E agora… tem algo que preciso te mostrar."
];

let step = 0;
const textEl = document.getElementById("text");
const btn = document.getElementById("nextBtn");

/* Criar corações automaticamente */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = ["💖", "💗", "💘", "💞"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

/* Avançar história */
btn.onclick = () => {
  step++;

  if (step < texts.length) {
    textEl.innerText = texts[step];
  } else {
    showLetter();
  }
};

/* Carta misteriosa */
function showLetter() {
  document.getElementById("game").innerHTML = `
    <p>Clique na carta…</p>
    <div class="letter" onclick="openLetter()">💌</div>
  `;
}

/* Abrir carta */
function openLetter() {
  explodeHearts();

  setTimeout(() => {
    document.getElementById("game").innerHTML = `
      <div id="proposal">
        <h1>💍</h1>
        <p>
          Depois de tudo isso…<br><br>
          Quer passar o resto da vida comigo?
        </p>
      </div>
    `;
  }, 1200);
}

/* Explosão de corações */
function explodeHearts() {
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 30);
  }
}
