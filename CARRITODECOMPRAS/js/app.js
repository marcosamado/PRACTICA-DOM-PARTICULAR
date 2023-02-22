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

//**********Decimo  */
items.addEventListener("click", e => {
    btnAccion(e);
})


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
//********Octavo creamos la funcion para agregar los productos al carrito */
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

//*******Noveno Imprimimos el footer del carrito (TOTAL A PAGAR y BORRAR PRODUCTOS)*/
const imprimirFooter = () => {
    footer.innerHTML = "";
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    };

    const sumarCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);

    const sumarTotal = Object.values(carrito).reduce((acc, {cantidad,precio} ) => acc+ (cantidad*precio),0);

    templateFooter.querySelectorAll("td")[0].textContent = sumarCantidad;
    templateFooter.querySelector("span").textContent = sumarTotal;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);

    footer.appendChild(fragment);

    btnVaciar = document.getElementById("vaciar-carrito");
    btnVaciar.addEventListener("click", () => {
        carrito = {};
        imprimirCarrito(); 
    });

};

const btnAccion = (e) => {
    if(e.target.classList.contains("btn-info")){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = {...producto};
        imprimirCarrito();
    };

    if(e.target.classList.contains("btn-danger")){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        // carrito[e.target.dataset.id] = {...producto};
        
         imprimirCarrito();
    };

    e.stopPropagation();
};