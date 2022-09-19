// Variables
const libros = [
    {
        id:1,
        name : "Carrie",
        img : '../images/carrie.jpg',
        price : 2300
    },
    {
        id:2,
        name : "IT",
        img : '../images/it.jpg',
        price : 3200
        
    },
    {
        id:3,
        name : "Harry potter y la orden del fenix",
        img : '../images/harry-potter-y-la-orden-del-fenix.jpg',
        price : 1500
    },
    {
        id:4,
        name : "Harry potter y la pierdra filosofal",
        img : '../images/harry-potter-piedra-filosofal.jpg',
        price : 3000
    },
    {
        id:5,
        name : "moby dick",
        img : '../images/moby-dick.jpg',
        price : 550
    },

]

const contenedor_libros = document.querySelector("#contenedor_libros");
const contenedor_favoritos = document.querySelector(".listado_favoritos");
const listado_favoritos = [];

// Eventos
document.addEventListener("DOMContentLoaded", function() {
    
    
    mostrar_libros();
})

// Funciones
function mostrar_libros() {
   
    libros.forEach(function(libro) {
        const div_libro = document.createElement("div");
        div_libro.classList.add("card");

        const imagen_libro= document.createElement("img");
        imagen_libro.src = libro.img;
        imagen_libro.className = "imagen_libro";

        const titulo_libro= document.createElement("h2");
        titulo_libro.textContent = libro.name;
        titulo_libro.classList.add("titulo_libro");

        const btnFavorito = document.createElement("button");
        btnFavorito.textContent = "Agregar a Favorito";
        btnFavorito.classList.add("btn-favorito");
       
        btnFavorito.onclick = function() {
            agregarFavorito(libro.id);
        }

        
        div_libro.appendChild(imagen_libro);
        div_libro.appendChild(titulo_libro);
        div_libro.appendChild(btnFavorito);

       
        contenedor_libros.appendChild(div_libro);
    })
}

function agregarFavorito(id) {
    const libro_encontrado = libros.find( function(libro) {
        return libro.id === id;
    });
    const libro_filtrados = libros.filter(function(libro) {
        return libro.price > 100;
    })
    console.log(libro_filtrados);
    listado_favoritos.push(libro_encontrado);
    mostrar_libro_favoritos(listado_favoritos);
}

function mostrar_libro_favoritos(favoritos) {

    contenedor_favoritos.innerHTML = "";

    favoritos.forEach(function(libros) {
        const div_libro = document.createElement("div");
        div_libro.classList.add("card");

        const imagen_libro = document.createElement("img");
        imagen_libro.src = libros.img;
        imagen_libro.className = "imagen_libro";

        const titulo_libro = document.createElement("h2");
        titulo_libro.textContent = libros.name;
        titulo_libro.classList.add("titulo_libro");

        const btnFavorito = document.createElement("button");
        btnFavorito.textContent = "Agregar a Favorito";
        btnFavorito.classList.add("btn-favorito");

       const btnBorrar = document.createElement("button");
       btnBorrar.textContent = "Quitar del Carrito";
       btnBorrar.classList.remove("remove");

       
         btnFavorito.onclick = function() {
             agregarFavorito(libros.id);
        }
        
        
        
        div_libro.appendChild(imagen_libro);
        div_libro.appendChild(titulo_libro);
        div_libro.appendChild(btnFavorito);

       
        contenedor_favoritos.appendChild(div_libro);
    })
}






libros.push(libros);

let arreglo_JSON = JSON.stringify( libros);
localStorage.setItem(" libros", arreglo_JSON);
console.log(libros);




function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}



let btn_carrito = document.getElementById("agregarFavorito ");

btn_carrito.addEventListener("click" , function(){

    let libros = document.getElementById("libro");

    if(carrito.style.display != "none"){
        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "flex";   
     }


})



Toastify({

    text: "Se Elimino del Carrito",
    duration: 3000,
    gravity: `button`,
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },

    }).showToast();
            
let hijo = e.target;
let padre = hijo.parentNode;
let abuelo = padre.parentNode;

console.log(hijo);
console.log(padre);
console.log(abuelo);

padre.remove();



localStorage.clear(agregarFavorito);





