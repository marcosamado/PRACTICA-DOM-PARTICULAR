//*****Tercero Capturamos los elementos ID, TEMPLATE y creamos Fragments  */
const items = document.getElementById("items");
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

//******Primero capturamos la data de la API o JSON en la funcion fechtData*/

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
    items.appendChild(fragment);
};
//*****Quinto-2 funcion para capturar los targets (elementos HTML) en una funcion (setCarrito)*/
const addCarrito = capturar => {
    if(capturar.target.classList.contains("btn-dark")){
        setCarrito(capturar.target.parentElement);
    }
    capturar.stopPropagation();
}

//***Septimo */
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
    console.log(carrito);
};