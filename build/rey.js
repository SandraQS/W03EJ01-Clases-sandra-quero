import Personajes from "./personajes.js";

class Rey extends Personajes {
  tiempoReinado;
  comunicado;

  constructor(nombre, familia, edad, estado, tiempoReinado) {
    super(nombre, familia, edad, estado);
    this.tiempoReinado = tiempoReinado;
    this.comunicado = "Vais a morir todos";
  }
}

export default Rey;
