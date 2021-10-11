import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";

/*constructor(nombre, familia, edad, estado, comunicado, tiempoReinado) {
    super(nombre, familia, edad, estado, comunicado); */
const general = new Personaje("Nombre", "nose", 50);
const joffreyBaratheon = new Rey("joffrey Baratheon", 80, 20);
const jaimeLannister = new Luchador("Jaime Lannister", 30, "espada", 10);

console.log(general);
console.log(joffreyBaratheon);
console.log(jaimeLannister);
console.log(joffreyBaratheon.comunicar());
