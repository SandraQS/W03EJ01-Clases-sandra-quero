import Personaje from "./Personaje.js";

class Rey extends Personaje {
  tiempoReinado;
  comunicado;
  familia;

  constructor(nombre, familia, edad, estado, tiempoReinado) {
    super(nombre, familia, edad, estado);
    this.tiempoReinado = tiempoReinado;
    this.comunicado = "Vais a morir todos";
    this.familia = "Rey";
  }
}

export default Rey;
