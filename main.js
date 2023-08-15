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

const saveLocalStorage = () => {
  localStorage.setItem("pizza", JSON.stringify(pizzas)); 
};


const submitEvent = (e) => {
  e.preventDefault();
  // Funcion que muestra cada ID del array pizza
 const idCorrecto = pizzas.find(pizza => {
  return pizza.id === parseInt(inputNumber.value);
})
console.log(idCorrecto)

if (idCorrecto) {
  containerGenerador.innerHTML = `  <img src='${idCorrecto.imagen}' class='img'>
 <p class='parrafo'>${idCorrecto.nombre}</p>
 <p class='parrafo'>$${idCorrecto.precio}</p>
 <p class='parrafo'>${idCorrecto.ingredientes.join(', ')}</p>` 
 errorMessage.textContent = ''
 saveLocalStorage(idCorrecto);
} else {
  errorMessage.textContent = `No ingresaste un numero valido`
  containerGenerador.innerHTML = ''
}
form.reset();
}


const init = () => {
  form.addEventListener("submit", submitEvent)
}

init();