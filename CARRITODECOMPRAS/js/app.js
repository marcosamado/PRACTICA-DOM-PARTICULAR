//*****Tercero Capturamos los elementos ID, TEMPLATE y creamos Fragments  */
const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");

const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const templateCard = document.getElementById("template-card").content;

const fragment = document.createDocumentFragment();

//*****Sexto Declaramos el objeto carrito*/
let carrito = {};

//*****Segundo inciamos el evento Para Obtener los datos ejecutando la funcion fetchData */
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})

//******Quinto iniciamos los eventos Click en los botones */
document.addEventListener("click", e => {
    addCarrito(e);
} )

//******Primero capturamos la data de la API o JSON en la funcion fechtData*/}

const fetchData = async() => {
    try {
        const res = await fetch("api.json");
        const data = await res.json();
        imprimirCards(data);
    } catch (error) {

        console.log(error);
    };
};

//********Cuarto Empezamos a clonar e Imprimir las tarjetas del Template con sus respectivos datos */
const imprimirCards = data => {
    data.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.title;
        templateCard.querySelector("p").textContent = producto.precio;
        templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector(".btn-dark").dataset.id = producto.id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};
//*****Quinto-2 funcion para capturar los targets (elementos HTML) en una funcion (setCarrito)*/
const addCarrito = capturar => {
    if(capturar.target.classList.contains("btn-dark")){
        setCarrito(capturar.target.parentElement);
    }
    capturar.stopPropagation();
}

//***Septimo Creamos una funcion para crear y agregar los productos al carrito*/
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    };

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    };

    carrito[producto.id] = {...producto};
    imprimirCarrito();
};

const imprimirCarrito = () => {
    items.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id;
        templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
        templateCarrito.querySelector("span").textContent = producto.precio * producto.cantidad;

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);

    imprimirFooter();
};

const imprimirFooter = () => {
    footer.innerHTML = "";
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    }
}