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

const inputNumber = d.querySelector(".input-number");
const form = d.querySelector(".form");
const errorMessage = d.querySelector(".form-error");
const containerGenerador = d.querySelector(".container-generador");

console.log(inputNumber)


const pizzasID = JSON.parse(localStorage.getItem('pizza')) || [];

const saveLocalStorage = () => {
  localStorage.setItem("pizza", JSON.stringify(pizzas)); 
};

saveLocalStorage()

// Funcion generadora
const createCardTemplate = pizza => {
  return `
  <img src='${pizza.imagen}' class='img'>
  <p class='parrafo'>${pizza.nombre}</p>
  <p class='parrafo'>$${pizza.precio}</p>
  `
}

console.log(createCardTemplate)


const renderPizzaList = () => {
  containerGenerador.innerHTML = pizzasID.map((pizzas) => createCardTemplate(pizzas)).join("")
};



// Funcion que muestra cada ID del array pizza
 const idCorrecto = pizzas.filter(pizza => {
  return pizza.id;
})


const idPizza = pizzas.map((pizza) => pizza.id);
console.log(idPizza);

const submitEvent = (e) => {
  e.preventDefault();
   if(inputNumber){
    errorMessage.textContent = `Ingresaste un numero`;
   }

  
}


 form.addEventListener("submit", submitEvent)
 
const init = () => {
  d.addEventListener('DOMContentLoaded', renderPizzaList);
  
}