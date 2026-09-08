/*
 * Napkin Notes — Científica de la semana
 *
 * Este archivo contiene:
 *
 * 1. NN_SCIENTISTS
 *    Base de datos de científicas disponibles.
 *
 * 2. NN_SCIENTIST_WEEKS
 *    Calendario que indica qué científica corresponde
 *    a cada semana.
 *
 * Cada fecha del calendario debe ser un LUNES.
 * La científica seleccionada permanece activa desde ese
 * lunes hasta el domingo siguiente, ambos incluidos.
 *
 * Para añadir una científica nueva:
 *
 *   1. Añadir una nueva entrada a NN_SCIENTISTS.
 *   2. Asignarle un identificador interno, por ejemplo:
 *        "sci-004"
 *   3. Añadir el lunes correspondiente a
 *      NN_SCIENTIST_WEEKS.
 *
 * Los identificadores sci-001, sci-002, etc. son solamente
 * identificadores internos. No son URLs ni crean páginas.
 */


/* =========================================================
   BASE DE DATOS DE CIENTÍFICAS
   ========================================================= */

window.NN_SCIENTISTS = {
  "sci-001": {
    answer: "PAZ ALBARES",
    fullName: "Paz Albares Vicente",
    image: "/images/paz.jpg",
    bio: "Paz es doctora en Física, especializada en Física Matemática...",
    url: "/autor/paz-albares-vicente",
    pista: "Es alguien del grupo"
  },

  "sci-002": {
    answer: "MARÍA PÉREZ",
    fullName: "María Pérez Garrote",
    image: "/images/maria.jpeg",
    bio: "María es estudiante de doctorado en cosmología...",
    url: "/autor/maria-perez-garrote",
    pista: "Su trabajo está relacionado con la cosmología y el universo oscuro."
  },

  "sci-003": {
    answer: "GRETEL QUINTERO",
    fullName: "Gretel Quintero Angulo",
    image: "/images/gretel.png",
    bio: "Gretel observa el mundo con la precisión...",
    url: "/autor/gretel-quintero-angulo",
    pista: "Edita cosas"
  }
};


/* =========================================================
   CALENDARIO DE CIENTÍFICAS
   =========================================================
 *
 * La fecha indicada es siempre el LUNES.
 *
 * Ejemplo:
 *
 * "2026-09-07": "sci-001"
 *
 * significa:
 *
 * lunes 7  → Paz
 * martes 8 → Paz
 * ...
 * domingo 13 → Paz
 *
 * El lunes siguiente se carga automáticamente la entrada
 * correspondiente a esa nueva semana.
 */

window.NN_SCIENTIST_WEEKS = {

  "2026-09-07": "sci-001",  // Paz Albares
  "2026-09-14": "sci-002",  // María Pérez
  "2026-09-21": "sci-003"   // Gretel Quintero

};
