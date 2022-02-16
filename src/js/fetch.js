var con_hab = document.getElementById('iconos-habilidades');
var con_pro = document.getElementById('listaproyectos')
function mostrarHabilidades(){
    fetch('habilidades.json')
        .then(respuesta=>respuesta.json()
        .then(habilidades=>{
            habilidades.forEach(habilidad=>{
                icono=habilidad.icono;
                nombre=habilidad.nombre;
                nivel=habilidad.nivel;

                articulo=document.createElement('article');
                html='';
                html+=`<i class="${icono}"onclick="cambiarBarra(${nivel})"></i> 
                        <span>${nombre}</span>`;
                articulo.innerHTML=html;
                con_hab.appendChild(articulo);
            })
        }))
}


function mostrarProyectos(){
    fetch('proyectos.json')
        .then(respuesta=>respuesta.json()
        .then(proyectos=>{
            proyectos.forEach(proyecto=>{
                nombre=proyecto.nombre;
                imagen=proyecto.imagen;
                github=proyecto.github;
                enlace=proyecto.enlace;


                project=document.createElement('div');
                project.classList.add("project");
                html="";
                html+=`<img class="project__image" src="${imagen}" />
                        <p>${nombre}</p>
                        <div class="grid__title">
                        <h3>&nbsp;&nbsp;&nbsp;`
                        for(let i=0;i<proyecto.tecnologias.length;i++){
                            tecnologia=proyecto.tecnologias[i];
                            html+=  `${tecnologia}&nbsp;&nbsp;&nbsp;`
                        }
                html+=`</h3>
                        </div>

                        <div class="grid__overlay">
                            <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>`
                            if(!enlace==""){
                                html+=`<a href="${enlace}" target="_blank"><i class="fas fa-external-link-alt"></i></a>`
                            }
                html+=`</div>`

                project.innerHTML=html;
                con_pro.appendChild(project);
            })
        }))
}

mostrarHabilidades();
mostrarProyectos();

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form =new FormData(this);
    const response = await fetch(this.action,{
        method: this.method,
        body:form,
        headers:{
            'Accept':'application/json'
        }
    })
    if(response.ok){
        this.reset()

    }
}