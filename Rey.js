import Personaje from "./Personaje.js";

class Rey extends Personaje {
  tiempoREinado;

  constructor(nombre, familia, edad, anosReinado) {
    super(nombre, familia, edad);
    this.tiempoREinado = anosReinado;
    this.comunicado = "Vais a morir todos! ";
  }
}

export default Rey;
