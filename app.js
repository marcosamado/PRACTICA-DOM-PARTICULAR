
// *********** QUERYSELECTOR y geTElementById y getElementbYClassName

const tituloP = document.querySelector("h1");

tituloP.classList.add("titulo");

// console.log(tituloP);

const parrafoUno = document.getElementById("parrafo1");

// console.log(parrafoUno);

let tituloDos = document.getElementsByClassName("titulo2")
 let tituloDoss = document.querySelector(".titulo2")

// console.log(tituloDos)
// console.log(tituloDoss)

// *********** textContent innerHTML y createDocument

tituloP.textContent = "Cambio de titulo";

tituloP.innerHTML = "<b> Cambio de titulo con negrita </b>";

const lista = document.getElementById("lista");

console.log(lista);

// const li = document.createElement("li");

// li.textContent = "Primer Elemento";

// lista.appendChild(li);

const PRODUCTOS = ["pan", "galletas", "bizcochos", "facturas"];

// PRODUCTOS.forEach(producto => {
//     const li = document.createElement("li");
//     li.textContent = producto;
//     lista.appendChild(li);
// });

// PRODUCTOS.forEach(producto => {
//     lista.innerHTML += `<li>${producto}</li>`;
// })
 
// *********** FRAGMENT 

// const fragmento = document.createDocumentFragment();
// const fragm = new DocumentFragment();

// PRODUCTOS.forEach(producto => {
//     const li = document.createElement("li");
//     li.textContent = producto;
//     fragmento.appendChild(li);
// })

// lista.appendChild(fragmento);


// PRODUCTOS.forEach(producto => {
//     const li = document.createElement("li");
//     li.textContent = producto;
    
//     const childNode = fragmento.firstChild;

//     fragmento.insertBefore(li, childNode);
// })

// lista.appendChild(fragmento);

// *********** TEMPLATE HTML

const template = document.querySelector("#template-li").content;
const fragment = document.createDocumentFragment();

PRODUCTOS.forEach( producto => {
    template.querySelector("span").textContent = producto;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);



