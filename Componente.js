class Componente {
  elemento;
  elementoPadre;
  className;
  etiquetaHtml;
  constructor(elementoPadre, className, etiquetaHtml) {
    this.etiquetaHtml = etiquetaHtml;
    this.elemento = document.createElement(etiquetaHtml);
    this.elementoPadre = elementoPadre;
    this.elemento.className = className;

    this.elementoPadre.append(this.elemento);
  }
}

export default Componente;
/* 
class Componente {
  constructor(arrayPersonajes) {
    if (Array.isArray(arrayPersonajes)) {
      const contenedorLista = document.getElementsByClassName(
        "characters-list row list-unstyled"
      );
      arrayPersonajes.forEach((personaje, index) => {
        const listaItems = document.createElement("li");
        listaItems.className = "character col";
        listaItems.innerHTML = `
        <div class="card character__card">
            <img
              src="img/${personaje.nombre.toLowerCase()}.jpeg"
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
                  <button class="character__action btn boton-habla">habla</button>
                  <button class="character__action btn boton-muere">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        
        `;
        contenedorLista[0].appendChild(listaItems);
        //const divHabla
        const botonHablar = document.querySelectorAll("button.boton-habla");
        botonHablar[index].addEventListener("click", () => {
          console.log("hola");
        });

        const botonMorir = document.querySelectorAll("button.boton-muere");
        botonMorir[index].addEventListener("click", () => {
          console.log("muere");
        });

        console.log(botonMorir[index]);
        /* const i = personajeindexOf();
        document.querySelectorAll("character__action btn").
        addEventListener("click", (personaje) => {
          console.log("hola");
        });
      }
    }
  } 
}); */
