class Personaje {
  serie = "Juego de Tronos";
  nombre;
  familia;
  edad;
  estado = "vivo";
  comunicado = "hola";

  constructor(nombre, familia, edad, estado, comunicado) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
    this.comunicado = comunicado;
  }

  comunicar() {
    return `Hola soy el ${this.nombe} ${this.comunicado}`;
  }

  morir() {}
}

export default Personaje;
