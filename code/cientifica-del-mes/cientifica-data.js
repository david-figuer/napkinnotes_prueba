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
    bio: "Paz es doctora en Física, especializada en Física Matemática, exploradora de ecuaciones no lineales y de los patrones que de ellas emergen donde menos se esperan. Modeliza fenómenos complejos e intenta descubrir y entender qué estructuras se esconden detrás, combinando la física con herramientas y el lenguaje de las matemáticas. De mente curiosa, está convencida de que tan importante es hacerse preguntas como buscar sus respuestas. Y a veces, todo comienza con una idea escrita en la cara de una servilleta.",
    url: "/autor/paz-albares-vicente"
  },

  "sci-002": {
    answer: "MARÍA PÉREZ",
    fullName: "María Pérez Garrote",
    image: "/images/maria.jpeg",
    bio: "María es estudiante de doctorado en cosmología, y le apasiona intentar desentrañar los misterios del cosmos y de la vida en general. Su trabajo consiste en estudiar los ingredientes fundamentales que conforman el universo, y de qué manera interactúan para dar lugar a las formaciones de galaxias que observamos hoy en día. Sus textos aspiran a arrojar un poco de luz sobre ese sector todavía oscuro del universo, despertando la curiosidad y el pensamiento crítico en quienes se acercan a explorarlo.",
    url: "/autor/maria-perez-garrote"
  },

  "sci-003": {
    answer: "GRETEL QUINTERO",
    fullName: "Gretel Quintero Angulo",
    image: "/images/gretel.png",
    bio: "Gretel observa el mundo con la precisión de quien ha sido educada en el método científico y la sensibilidad de quien encuentra en la escritura una forma de interpretar lo cotidiano. Es doctora en física, pero su curiosidad no se restringe a la ciencia: aspira a un conocimiento más amplio, construido desde la complementariedad y las relaciones entre distintas ramas del saber, donde las disciplinas no se excluyen, sino que se iluminan entre sí. Su trabajo combina pensamiento crítico y voz propia, explorando las estructuras —visibles e invisibles— que moldean nuestras vidas.",
    url: "/autor/gretel-quintero-angulo"
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
