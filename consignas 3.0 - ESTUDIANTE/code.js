/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
      datosPersona.nombre = prompt("Ingresa tu nombre: ");
      datosPersona.edad = 2023 - parseInt(prompt("Ingresa tu año de nacimiento: "));
      datosPersona.ciudad = prompt("Ingresa tu ciudad de Nacimiento: ") 
      datosPersona.interesPorJs = prompt("Te interesa JS?: ")
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
      
      const nombre = document.getElementById("nombre");
      nombre.innerText = datosPersona.nombre;
      const edad = document.getElementById("edad");
      edad.innerText = datosPersona.edad;
      const ciudad = document.getElementById("ciudad");
      ciudad.innerText = datosPersona.ciudad;
      const interesJs = document.getElementById("javascript");
      interesJs.textContent = datosPersona.interesPorJs;
      
  
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
      const fila = document.getElementById("fila");
      
      if(!fila.innerHTML.includes("div")){
        listado.forEach( element => {
            fila.innerHTML += `<div class= "caja">
                                <img src = "${element.imgUrl}" alt= "${element.lenguajes}">
                                <p class = "lenguajes"> ${element.lenguajes}</p>
                                <p class = "bimestre"> ${element.bimestre}</p>
                              </div> `
        });
      }


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

