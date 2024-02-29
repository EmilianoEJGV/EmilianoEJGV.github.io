// Obtén el elemento del párrafo
var parrafo = document.querySelector('.cambioContenido');

// Define el contenido que deseas cambiar
var contenidos = [
  'Nuevo contenido cada práctica',
  'Los amo tonotos',
  'Desarrollo web',
  'Ingeniería la vida'
];

// Inicializa el índice del contenido
var indice = 0;

// Función para cambiar el contenido con animación cada cierto tiempo
function cambiarContenido() {
  parrafo.innerHTML = contenidos[indice];
  indice = (indice + 1) % contenidos.length;
}

// Cambia el contenido cada 3 segundos (3000 milisegundos)
setInterval(cambiarContenido, 5000);
