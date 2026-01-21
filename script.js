const texts = [
  "Tudo começou com um simples olhar… mas naquele momento eu ainda não fazia ideia de que ali estava começando a melhor parte da minha vida.",

  "Vieram as conversas que atravessavam a madrugada, os risos sem motivo, as mensagens que faziam o coração bater mais rápido só de aparecer na tela.",

  "Com você, os dias comuns ganharam cor, e até o silêncio se tornou confortável. Era como se o mundo desacelerasse só para nos ouvir.",

  "Nem tudo foi fácil. Houve dias difíceis, inseguranças, medos… mas mesmo assim, em todos eles, era você que eu escolhia.",

  "Cada abraço virou abrigo. Cada palavra, um cuidado. Cada momento, uma certeza crescendo aos poucos dentro de mim.",

  "E hoje, depois de 365 dias, eu entendo: não foi sorte. Foi destino construído. Foi amor escolhido.",
];

let step = 0;
const textEl = document.getElementById("text");
const btn = document.getElementById("nextBtn");

/* Criar corações */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = ["💖", "💗", "💘", "💞", "💓"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  heart.style.animationDuration = 4 + Math.random() * 5 + "s";

  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 280);

/* Avançar história */
btn.onclick = () => {
  step++;

  if (step < texts.length) {
    textEl.innerText = texts[step];
  } else {
    showLetter();
  }
};

/* Mostrar carta */
function showLetter() {
  document.getElementById("game").innerHTML = `
    <p>Existe uma carta que eu escrevi pensando em nós…</p>
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
          Depois de tudo que vivemos,<br>
          de tudo que construímos,<br><br>
          você aceita passar o resto da vida comigo?
        </p>
      </div>
    `;
  }, 1400);
}

/* Explosão de corações */
function explodeHearts() {
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 25);
  }
}
