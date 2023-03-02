//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
const tarjeta = document.getElementById("tarjeta");
const imagen = document.getElementById("logo");
const titulo = document.querySelector("h1");
const linkYouTube = document.getElementById("link_youtube");
const linkWidipedia = document.getElementById("link_wikipedia");
// tarjeta.classList.add("card");
tarjeta.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
imagen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo
titulo.removeAttribute("class", "titulo-feo");

//4- Chequear si el link a youtube posee o no el atributo href
linkYouTube.hasAttribute("href");


//5- Obtener el href del link a wikipedia y mostrarlo por consola
console.log(linkWidipedia.getAttribute("href"));
