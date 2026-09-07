Title: Científica del mes
Slug: cientifica-nn-prueba-4f7c2a
Status: hidden
Summary: Prueba privada del minijuego Científica del mes de Napkin Notes.

<script src="/code/cientifica-del-mes/cientifica-data.js"></script>

<style>
  /* Esta página es solo el juego: ocultamos los comentarios heredados de page.html */
.nn-comments {
  display: none !important;
}
.nn-scientist-game {
  --nn-red: #b81424;
  --nn-text: #1f2937;
  --nn-muted: #64748b;
  --nn-border: #d7dce2;
  --nn-correct: #6aaa64;
  --nn-present: #c9b458;
  --nn-absent: #787c7e;
  --nn-soft: #f7f7f5;
  width: 100%;
  max-width: 780px;
  margin: 10px auto 40px;
  color: var(--nn-text);
  box-sizing: border-box;
}

.nn-scientist-game * {
  box-sizing: border-box;
}

.nn-scientist-intro {
  max-width: 640px;
  margin: 0 auto 22px;
  text-align: center;
}

.nn-scientist-kicker {
  margin: 0 0 7px;
  color: var(--nn-red);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.nn-scientist-intro p {
  margin: 7px 0;
}

.nn-scientist-rules {
  color: var(--nn-muted);
  font-size: .94rem;
}

.nn-scientist-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 18px;
  margin: 18px 0 22px;
  color: var(--nn-muted);
  font-size: .82rem;
}

.nn-scientist-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.nn-scientist-legend-box {
  width: 20px;
  height: 20px;
  border-radius: 3px;
}

.nn-scientist-legend-box.correct {
  background: var(--nn-correct);
}

.nn-scientist-legend-box.present {
  background: var(--nn-present);
}

.nn-scientist-legend-box.absent {
  background: var(--nn-absent);
}

.nn-scientist-napkin {
  position: relative;
  width: min(100%, 720px);
  margin: 4px auto 28px;
  padding: 34px 26px;

  /* Papel ligeramente marfil */
  background-color: #faf8f0;

  /* Textura muy suave de papel */
  background-image:
    radial-gradient(circle at 18% 22%, rgba(70, 60, 40, .035) 0 1px, transparent 1.5px),
    radial-gradient(circle at 73% 61%, rgba(70, 60, 40, .025) 0 1px, transparent 1.5px),
    linear-gradient(96deg, transparent 48%, rgba(120, 110, 90, .025) 50%, transparent 52%),
    linear-gradient(4deg, transparent 48%, rgba(120, 110, 90, .02) 50%, transparent 52%);

  background-size:
    19px 17px,
    23px 21px,
    160px 140px,
    190px 170px;

  border: 1px solid rgba(110, 100, 80, .15);

  box-shadow:
    0 10px 24px rgba(0, 0, 0, .08),
    0 2px 5px rgba(0, 0, 0, .05);

  transform: rotate(-0.18deg);
}

.nn-scientist-napkin::after {
  content: "";
  position: absolute;
  inset: 7px;
  pointer-events: none;
  border: 1px solid rgba(100, 90, 70, .055);
  transform: rotate(.22deg);
}

.nn-scientist-board {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
}

.nn-scientist-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-width: 0;
}

.nn-scientist-word {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.nn-scientist-space {
  width: 10px;
  flex: 0 0 10px;
  color: #a5adb8;
  font-weight: 700;
  text-align: center;
  user-select: none;
}

.nn-scientist-cell {
  position: relative;

  width: var(--cell-size, 44px);
  height: var(--cell-size, 44px);
  min-width: 0;

  border: 0;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* La servilleta se ve a través */
  background: transparent;

  /* Azul de boli */
  color: #244b78;

  font-size: clamp(.82rem, 3vw, 1.25rem);
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;

  transition:
    transform .15s ease,
    background .2s ease,
    color .2s ease;
}

/*
 * Contorno irregular dibujado a boli.
 * No es un simple border:dashed: el trazado del SVG
 * tiene pequeñas irregularidades.
 */
.nn-scientist-cell::before {
  content: "";
  position: absolute;
  inset: -2px;
  pointer-events: none;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M7 8 C29 5 67 8 94 6 M94 6 C97 31 92 66 94 94 M94 94 C66 97 32 92 6 95 M6 95 C4 68 9 34 7 8' fill='none' stroke='%23244b78' stroke-width='3' stroke-linecap='round' stroke-dasharray='9 5 4 6 7 4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  opacity: .88;
}

/* Cada cuadrado está un poquito distinto */
.nn-scientist-cell:nth-child(4n + 1) {
  transform: rotate(-0.65deg);
}

.nn-scientist-cell:nth-child(4n + 2) {
  transform: rotate(0.45deg);
}

.nn-scientist-cell:nth-child(4n + 3) {
  transform: rotate(-0.25deg);
}

.nn-scientist-cell:nth-child(4n) {
  transform: rotate(0.7deg);
}

.nn-scientist-cell.filled {
  color: #18395f;
}

.nn-scientist-cell.correct,
.nn-scientist-cell.present,
.nn-scientist-cell.absent {
  color: #fff;
  border-color: transparent;
}

.nn-scientist-cell.correct {
  background: var(--nn-correct);
}

.nn-scientist-cell.present {
  background: var(--nn-present);
}

.nn-scientist-cell.absent {
  background: var(--nn-absent);
}
.nn-scientist-cell.correct::before,
.nn-scientist-cell.present::before,
.nn-scientist-cell.absent::before {
  opacity: .25;
}
.nn-scientist-cell.reveal {
  animation: nnScientistFlip .36s ease;
}

@keyframes nnScientistFlip {
  0% { transform: rotateX(0deg); }
  50% { transform: rotateX(90deg); }
  100% { transform: rotateX(0deg); }
}

.nn-scientist-form {
  max-width: 580px;
  margin: 0 auto;
}

.nn-scientist-label {
  display: block;
  margin-bottom: 7px;
  font-weight: 700;
}

.nn-scientist-input-row {
  display: flex;
  gap: 8px;
}

.nn-scientist-input {
  width: 100%;
  min-width: 0;
  height: 44px;
  padding: 0 12px;
  border: 2px solid var(--nn-border);
  border-radius: 6px;
  background: #fff;
  font: inherit;
  font-size: 1rem;
  text-transform: uppercase;
}

.nn-scientist-input:focus {
  outline: none;
  border-color: var(--nn-red);
  box-shadow: 0 0 0 3px rgba(184, 20, 36, .08);
}

.nn-scientist-submit {
  min-width: 104px;
  height: 44px;
  padding: 0 17px;
  border: 2px solid var(--nn-red);
  border-radius: 6px;
  background: var(--nn-red);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.nn-scientist-submit:hover {
  filter: brightness(.96);
}

.nn-scientist-submit:disabled,
.nn-scientist-input:disabled {
  cursor: not-allowed;
  opacity: .62;
}

.nn-scientist-message {
  min-height: 1.4em;
  margin: 9px 0 0;
  color: var(--nn-red);
  text-align: center;
  font-size: .9rem;
  font-weight: 600;
}

.nn-scientist-counter {
  margin: 10px 0 0;
  color: var(--nn-muted);
  text-align: center;
  font-size: .86rem;
}

.nn-scientist-result {
  max-width: 640px;
  margin: 26px auto 0;
  padding: 22px;
  border: 1px solid #e2e5e9;
  border-radius: 12px;
  background: var(--nn-soft);
}

.nn-scientist-result[hidden] {
  display: none;
}

.nn-scientist-result-heading {
  margin: 0 0 16px;
  text-align: center;
}

.nn-scientist-result-heading strong {
  color: var(--nn-red);
}

.nn-scientist-profile {
  display: grid;
  grid-template-columns: 118px 1fr;
  gap: 18px;
  align-items: start;
}

.nn-scientist-photo {
  width: 118px;
  height: 118px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

.nn-scientist-profile h3 {
  margin: 0 0 7px;
}

.nn-scientist-profile p {
  margin: 0 0 12px;
  line-height: 1.55;
}

.nn-scientist-more {
  display: inline-block;
  color: var(--nn-red);
  font-weight: 700;
  text-decoration: none;
}

.nn-scientist-more:hover {
  text-decoration: underline;
}



.nn-scientist-unavailable {
  max-width: 580px;
  margin: 30px auto;
  padding: 18px;
  border: 1px solid #e2e5e9;
  border-radius: 10px;
  background: var(--nn-soft);
  text-align: center;
}

@media (max-width: 620px) {
  .nn-scientist-row {
    gap: 5px;
  }
.nn-scientist-napkin {
  padding: 26px 10px;
}
  .nn-scientist-word {
    gap: 2px;
  }

  .nn-scientist-space {
    width: 5px;
    flex-basis: 5px;
    font-size: .72rem;
  }

  .nn-scientist-cell {
    border-width: 1.5px;
    font-size: clamp(.72rem, 3.7vw, 1rem);
  }

  .nn-scientist-input-row {
    flex-direction: column;
  }

  .nn-scientist-submit {
    width: 100%;
  }

  .nn-scientist-profile {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .nn-scientist-photo {
    margin: 0 auto;
  }
}
</style>

<div class="nn-scientist-game" id="nnScientistGame">
  <div class="nn-scientist-intro">
    <p class="nn-scientist-kicker">Prototipo · Científica del mes</p>
    <p><strong>Adivina el nombre de la científica.</strong></p>
    <p class="nn-scientist-rules" id="nnScientistRules"></p>
  </div>

  <div class="nn-scientist-legend" aria-label="Leyenda de colores">
    <span class="nn-scientist-legend-item">
      <span class="nn-scientist-legend-box correct" aria-hidden="true"></span>
      letra y posición correctas
    </span>
    <span class="nn-scientist-legend-item">
      <span class="nn-scientist-legend-box present" aria-hidden="true"></span>
      letra en otra posición
    </span>
    <span class="nn-scientist-legend-item">
      <span class="nn-scientist-legend-box absent" aria-hidden="true"></span>
      letra ausente
    </span>
  </div>

<div class="nn-scientist-napkin">
  <div
    class="nn-scientist-board"
    id="nnScientistBoard"
    aria-label="Tablero de cinco intentos">
  </div>
</div>
  <form class="nn-scientist-form" id="nnScientistForm" novalidate>
    <label class="nn-scientist-label" for="nnScientistGuess">Escribe tu intento</label>
    <div class="nn-scientist-input-row">
      <input
        class="nn-scientist-input"
        id="nnScientistGuess"
        name="guess"
        type="text"
        autocomplete="off"
        autocapitalize="characters"
        spellcheck="false"
        maxlength="60"
        aria-describedby="nnScientistMessage"
      >
      <button class="nn-scientist-submit" id="nnScientistSubmit" type="submit">Probar</button>
    </div>
    <p class="nn-scientist-message" id="nnScientistMessage" aria-live="polite"></p>
    <p class="nn-scientist-counter" id="nnScientistCounter">Intento 1 de 5</p>
  </form>

  <section class="nn-scientist-result" id="nnScientistResult" hidden aria-live="polite">
    <p class="nn-scientist-result-heading" id="nnScientistResultHeading"></p>
    <div class="nn-scientist-profile">
      <img class="nn-scientist-photo" id="nnScientistPhoto" src="" alt="">
      <div>
        <h3 id="nnScientistName"></h3>
        <p id="nnScientistBio"></p>
        <a class="nn-scientist-more" id="nnScientistMore" href="">Conoce más →</a>
      </div>
    </div>
  </section>

  
</div>

<script>
(function () {
  "use strict";

  const MAX_ATTEMPTS = 5;

  const game = document.getElementById("nnScientistGame");
  const board = document.getElementById("nnScientistBoard");
  const form = document.getElementById("nnScientistForm");
  const input = document.getElementById("nnScientistGuess");
  const submit = document.getElementById("nnScientistSubmit");
  const message = document.getElementById("nnScientistMessage");
  const counter = document.getElementById("nnScientistCounter");
  const rules = document.getElementById("nnScientistRules");
  const result = document.getElementById("nnScientistResult");
  const resultHeading = document.getElementById("nnScientistResultHeading");
  const photo = document.getElementById("nnScientistPhoto");
  const scientistName = document.getElementById("nnScientistName");
  const bio = document.getElementById("nnScientistBio");
  const more = document.getElementById("nnScientistMore");

  function currentSlug() {
    const path = window.location.pathname.replace(/\/+$/, "");
    return path.substring(path.lastIndexOf("/") + 1);
  }

  const slug = currentSlug();
  const scientist =
    window.NN_SCIENTISTS &&
    window.NN_SCIENTISTS[slug];

  if (!scientist) {
    game.innerHTML =
      '<div class="nn-scientist-unavailable">' +
      "<strong>No hay una científica configurada para este enlace.</strong><br>" +
      "Slug buscado: " + slug +
      "</div>";
    return;
  }

  function normalizeName(value) {
    return String(value)
      .trim()
      .replace(/\s+/g, " ")
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  const answer = normalizeName(scientist.answer);
  const answerWords = answer.split(" ");
  const wordLengths = answerWords.map(function (word) {
    return word.length;
  });
  const answerLetters = answerWords.join("");
  const storageKey = "nn_scientist_" + slug + "_" + answerLetters.toLowerCase();

  function formatStructure() {
    return wordLengths
      .map(function (length) {
        return "<strong>" + length + " letras</strong>";
      })
      .join(" + ");
  }

  rules.innerHTML =
    "Tienes " +
    MAX_ATTEMPTS +
    " intentos. El nombre tiene " +
    answerWords.length +
    (answerWords.length === 1 ? " palabra: " : " palabras: ") +
    formatStructure() +
    ". Las tildes no cuentan.";

  input.placeholder = wordLengths
    .map(function (length) {
      return "_".repeat(length);
    })
    .join(" ");

  function calculateCellSize() {
    const totalLetters = wordLengths.reduce(function (sum, value) {
      return sum + value;
    }, 0);

    const viewport = Math.min(window.innerWidth || 800, 780);
    const spacesWidth = Math.max(0, answerWords.length - 1) * 15;
    const gapsWidth = Math.max(0, totalLetters - answerWords.length) * 4;
    const available = Math.max(220, viewport - 70 - spacesWidth - gapsWidth);

    return Math.max(22, Math.min(46, Math.floor(available / totalLetters)));
  }

  function applyCellSize() {
    game.style.setProperty("--cell-size", calculateCellSize() + "px");
  }

  function createBoard() {
    board.innerHTML = "";

    for (let rowIndex = 0; rowIndex < MAX_ATTEMPTS; rowIndex++) {
      const row = document.createElement("div");
      row.className = "nn-scientist-row";
      row.dataset.row = String(rowIndex);

      wordLengths.forEach(function (wordLength, wordIndex) {
        const group = document.createElement("div");
        group.className = "nn-scientist-word";
        group.style.gridTemplateColumns =
          "repeat(" + wordLength + ", var(--cell-size))";

        for (let i = 0; i < wordLength; i++) {
          const cell = document.createElement("div");
          cell.className = "nn-scientist-cell";
          group.appendChild(cell);
        }

        row.appendChild(group);

        if (wordIndex < wordLengths.length - 1) {
          const spacer = document.createElement("div");
          spacer.className = "nn-scientist-space";
          spacer.textContent = "·";
          spacer.title = "Espacio";
          spacer.setAttribute("aria-label", "espacio");
          row.appendChild(spacer);
        }
      });

      board.appendChild(row);
    }
  }

  function readState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));

      if (
        saved &&
        Array.isArray(saved.guesses) &&
        ["playing", "won", "lost"].includes(saved.status)
      ) {
        return {
          guesses: saved.guesses.slice(0, MAX_ATTEMPTS),
          status: saved.status
        };
      }
    } catch (error) {}

    return {
      guesses: [],
      status: "playing"
    };
  }

  function saveState(state) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {}
  }

  function validateGuess(rawValue) {
    const guess = normalizeName(rawValue);

    if (!guess) {
      return {
        ok: false,
        error: "Escribe un nombre antes de probar."
      };
    }

    if (!/^[A-ZÑ ]+$/.test(guess)) {
      return {
        ok: false,
        error: "Usa solo letras y espacios."
      };
    }

    const words = guess.split(" ");

    if (
      words.length !== wordLengths.length ||
      words.some(function (word, index) {
        return word.length !== wordLengths[index];
      })
    ) {
      return {
        ok: false,
        error:
          "El nombre debe tener la forma " +
          wordLengths.join(" + ") +
          " letras."
      };
    }

    return {
      ok: true,
      normalized: guess,
      letters: words.join("")
    };
  }

  function scoreGuess(guessLetters) {
    const states = new Array(answerLetters.length).fill("absent");
    const remaining = Object.create(null);

    for (let i = 0; i < answerLetters.length; i++) {
      if (guessLetters[i] === answerLetters[i]) {
        states[i] = "correct";
      } else {
        const letter = answerLetters[i];
        remaining[letter] = (remaining[letter] || 0) + 1;
      }
    }

    for (let i = 0; i < guessLetters.length; i++) {
      if (states[i] === "correct") {
        continue;
      }

      const letter = guessLetters[i];

      if (remaining[letter] > 0) {
        states[i] = "present";
        remaining[letter] -= 1;
      }
    }

    return states;
  }

  function paintRow(rowIndex, guess, animate) {
    const row = board.querySelector('[data-row="' + rowIndex + '"]');

    if (!row) {
      return;
    }

    const letters = guess.replace(/ /g, "");
    const scores = scoreGuess(letters);
    const cells = row.querySelectorAll(".nn-scientist-cell");

    cells.forEach(function (cell, index) {
      cell.textContent = letters[index] || "";
      cell.classList.add("filled", scores[index]);

      if (animate) {
        window.setTimeout(function () {
          cell.classList.add("reveal");
        }, index * 35);
      }
    });
  }

  function fillProfile() {
    photo.src = scientist.image;
    photo.alt = scientist.fullName;
    scientistName.textContent = scientist.fullName;
    bio.textContent = scientist.bio;
    more.href = scientist.url;
  }

  function showResult(status, attempts) {
    fillProfile();
    result.hidden = false;

    if (status === "won") {
      resultHeading.innerHTML =
        "¡La encontraste! Era <strong>" +
        scientist.answer +
        "</strong>. La has acertado en " +
        attempts +
        (attempts === 1 ? " intento." : " intentos.");
    } else {
      resultHeading.innerHTML =
        "Esta vez no pudo ser. La científica era <strong>" +
        scientist.answer +
        "</strong>.";
    }
  }

  function updateControls(state) {
    const finished = state.status !== "playing";

    input.disabled = finished;
    submit.disabled = finished;

    if (finished) {
      counter.textContent =
        state.status === "won"
          ? "Partida completada"
          : MAX_ATTEMPTS + " de " + MAX_ATTEMPTS + " intentos";
    } else {
      counter.textContent =
        "Intento " +
        (state.guesses.length + 1) +
        " de " +
        MAX_ATTEMPTS;
    }
  }

  function renderState(state) {
    applyCellSize();
    createBoard();

    state.guesses.forEach(function (guess, index) {
      paintRow(index, guess, false);
    });

    if (state.status === "won" || state.status === "lost") {
      showResult(state.status, state.guesses.length);
    } else {
      result.hidden = true;
      resultHeading.textContent = "";
    }

    updateControls(state);
  }

  let state = readState();
  renderState(state);

  window.addEventListener("resize", function () {
    applyCellSize();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (state.status !== "playing") {
      return;
    }

    message.textContent = "";

    const validation = validateGuess(input.value);

    if (!validation.ok) {
      message.textContent = validation.error;
      return;
    }

    const rowIndex = state.guesses.length;

    state.guesses.push(validation.normalized);
    paintRow(rowIndex, validation.normalized, true);

    if (validation.normalized === answer) {
      state.status = "won";
    } else if (state.guesses.length >= MAX_ATTEMPTS) {
      state.status = "lost";
    }

    saveState(state);
    updateControls(state);

    if (state.status !== "playing") {
      window.setTimeout(function () {
        showResult(state.status, state.guesses.length);
        result.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }, 430);

      return;
    }

    input.value = "";
    input.focus();
  });


})();
</script>
