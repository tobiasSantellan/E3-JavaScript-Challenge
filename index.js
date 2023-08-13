const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const d = document;

const inputNumber = d.getElementById("input");
const form = d.querySelector(".form");
const errorMessage = d.querySelector(".form-error");
const containerGenerador = d.querySelector(".container-generador");

const pizzasID = JSON.parse(localStorage.getItem('pizza')) || [];

const saveLocalStorage = () => {
  localStorage.setItem("pizza", JSON.stringify(pizzas)); 
};

saveLocalStorage()

// Funcion generadora
// const createCardTemplate = pizza => {
//   return `
//   <img src='${pizza.imagen}' class='img'>
//   <p class='parrafo'>${pizza.nombre}</p>
//   <p class='parrafo'>$${pizza.precio}</p>
//   `
// }

// const renderPizzaList = () => {
//   containerGenerador.innerHTML = pizzasID.map((pizzas) => createCardTemplate(pizzas)).join("")
// };


const submitEvent = (e) => {
  e.preventDefault();
  // Funcion que muestra cada ID del array pizza
 const idCorrecto = pizzas.filter(pizza => {
  return pizza.id;
})
console.log(idCorrecto)
if (inputNumber === idCorrecto) {
  containerGenerador.innerHTML = `  <img src='${pizzas.imagen}' class='img'>
<p class='parrafo'>${pizzas.nombre}</p>
<p class='parrafo'>$${pizzas.precio}</p>` 
} else {
  errorMessage.textContent = `No ingresaste un numero valido`
} 
}
console.log(inputNumber)
const init = () => {
  form.addEventListener("submit", submitEvent)
}

init();