let con_hab = document.getElementById("iconos-habilidades");
let con_pro = document.getElementById("listaproyectos");
function mostrarHabilidades() {
  fetch("habilidades.json").then((respuesta) =>
    respuesta.json().then((habilidades) => {
      habilidades.forEach((habilidad) => {
        let icono = habilidad.icono;
        let nombre = habilidad.nombre;
        let nivel = habilidad.nivel;

        let articulo = document.createElement("article");
        let html = "";
        console.log(nombre);
        if (nombre === "Sql") {
          html += `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="cambiarBarra(${nivel})">
                        <path d="M4 4H20V6H4V4Z" fill="currentColor"/>
                        <path d="M4 10H20V12H4V10Z" fill="currentColor"/>
                        <path d="M4 16H20V18H4V16Z" fill="currentColor"/>
                    </svg>`;
        } else {
          html += `<i class="${icono}" onclick="cambiarBarra(${nivel})"></i>`;
        }

        html += `<span>${nombre}</span>`;
        articulo.innerHTML = html;
        con_hab.appendChild(articulo);
      });
    })
  );
}

function mostrarProyectos() {
  fetch("proyectos.json").then((respuesta) =>
    respuesta.json().then((proyectos) => {
      proyectos.forEach((proyecto) => {
        let nombre = proyecto.nombre;
        let imagen = proyecto.imagen;
        let github = proyecto.github;
        let enlace = proyecto.enlace;

        let project = document.createElement("div");
        project.classList.add("project");
        let html = "";
        html += `<img class="project__image" src="${imagen}" />
                        <p>${nombre}</p>
                        <div class="grid__title">
                        <h3>&nbsp;&nbsp;&nbsp;`;
        for (const element of proyecto.tecnologias) {
          let tecnologia = element;
          html += `${tecnologia}&nbsp;&nbsp;&nbsp;`;
        }
        html += `</h3>
                        </div>

                        <div class="grid__overlay">
                            <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>`;
        if (!enlace == "") {
          html += `<a href="${enlace}" target="_blank"><i class="fas fa-external-link-alt"></i></a>`;
        }
        html += `</div>`;

        project.innerHTML = html;
        con_pro.appendChild(project);
      });
    })
  );
}

mostrarHabilidades();
mostrarProyectos();

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
  }
}
