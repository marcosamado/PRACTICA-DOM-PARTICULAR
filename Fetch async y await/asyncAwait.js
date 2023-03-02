

// fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then ( res => res.json())
//     .then(data => {
//         let arrayNombres = []
//         data.results.forEach(element => {
//             arrayNombres.push(element.name)
//         });
//         // console.log(arrayNombres);
//     })
//     .catch(error => console.log(error));


// const obtenerPokemones = async() => {
//     try {
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
//         const data = await res.json()
//         console.log(data.results)
//         const arrayNombres = data.results.map(poke => poke.name)
//         const arrayNombresFiltrado = data.results.filter(poke => poke.name !== "bulbasaclur")
//         console.log(arrayNombresFiltrado)

//     } catch (error) {
//         console.log(error);
//     }
// };

// obtenerPokemones();
    


let carrito = {
    
    
};



// if(carrito.hasOwnProperty(producto.id)){
//     producto.cantidad = carrito[producto.id].cantidad + 1;
// };

let rosita = {  edad: 26,
                profesion: "estudiante"
}
let marquitos = {
    edad: 33,
    profesion: "programador"
}
carrito[1] = {...rosita};
carrito[0] = {...marquitos};
console.log(carrito);