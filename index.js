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

// btnSubmit.addEventListener("submit", e => {
//   e.preventDefault();
//   saveLocalStorage()
// })


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
  <p class='parrafo'>${pizza.precio}</p>
  `
}

console.log(createCardTemplate)


const renderPizzaList = () => {
  containerGenerador.innerHTML = pizzasID.map((pizzas) => createCardTemplate(pizzas)).join("")
};


// Funcion que verifica si el input esta vacio
const isEmpty = () => {
  return !input.value.trim().length; 
};

// Funcion que verifica que se ingresa un numero
const numberValid = (input) => {
  const re = /^[0-9]{10}$/;
  //testeamos
  return re.test(input.value.trim());
};

// Funcion que muestra cada ID del array pizza
const idCorrecto = pizzas.filter(pizza => {
  return pizza.id;
})


/**
 * Función para mostrar error al validar un input.
 */
const showError = (message) => {
  errorMessage.textContent = message;
};

 const isValid = () => {
  let valid = false 
   if(isEmpty(inputNumber)) {
     showError("El campo está vacío, ponga un numero")
     return;
   }
   if(!numberValid(inputNumber)) {
     showError("El campo solo acepta numeros")
     return;
   }
   valid = true;
   errorMessage.textContent = "";
   return valid;
 }

// // console.log(idCorrecto)

const submitEvent = (e) => {
  e.preventDefault();
  if(isValid()) {
    let value = inputNumber.value;
    if(value === idCorrecto) {
      renderPizzaList
    } 
    saveLocalStorage()

  }

}




// input.addEventListener("input", () => {
 
// })
 
const init = () => {
  d.addEventListener('DOMContentLoaded', renderPizzaList);
   form.addEventListener("submit", submitEvent)
}