import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";

const joffrey = new Rey("Joffrey", Personaje.familia.arryn, 17, 2);
const jaime = new Luchador("Jaime", Personaje.familia.stark, 30, "AK-47", 7);
const daenerys = new Luchador("Daenerys", Personaje.familia.stark, 20, "AK", 7);
const tyrion = new Asesor("Tyirion", Personaje.familia.stark, 28, daenerys);
const bronn = new Escudero("Bronn", Personaje.familia.stark, 28, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];
console.log(personajes);

const comunicados = personajes
  .filter((personaje) => personaje instanceof Luchador)
  .map((personaje) => personaje.comunicar());

console.log(joffrey.serie);
comunicados.forEach((mensaje) => console.log(mensaje));
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
jaime.morir();
tyrion.morir();
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);

console.log(personajes);

class Componente {
  constructor(arrayPersonajes) {
    if (Array.isArray(arrayPersonajes)) {
      const contenedorLista = document.getElementsByClassName(
        "characters-list row list-unstyled"
      );
      arrayPersonajes.forEach((personaje) => {
        const listaItems = document.createElement("li");
        listaItems.className = "character col";
        listaItems.innerHTML = `
        <div class="card character__card">
            <img
              src="img/no-one.jpeg"
              alt="${personaje.nombre} de la familia ${personaje.familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                personaje.nombre
              }  y ${personaje.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.edad}</li>
                  <li>
                    Estado:
                    ${
                      personaje.vivo
                        ? `<i class="fas fa-thumbs-down"></i>`
                        : `<i class="fas fa-thumbs-up"></i>`
                    }
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                ${
                  personaje instanceof Luchador
                    ? `<li>Destreza: ${personaje.destreza}</li>
                      <li>Arma: ${personaje.arma}</li>`
                    : ``
                }

                ${
                  personaje instanceof Rey
                    ? `<li>Años de reinado: ${personaje.tiempoREinado}</li>`
                    : ``
                }
                ${
                  personaje instanceof Asesor
                    ? `<li>Asesora a: ${personaje.asesorado.nombre}</li>`
                    : ``
                }

                ${
                  personaje instanceof Escudero
                    ? `<li>Sirve a: ${personaje.luchador}</li>`
                    : ``
                }

            
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        
        
        
        
        
        `;
        contenedorLista[0].appendChild(listaItems);
      });
    }
  }
}

const tarjeta = new Componente(personajes);
