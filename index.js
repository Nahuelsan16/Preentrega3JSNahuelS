alert('Bienvenido a pinturas Nahuel!');

let respuesta = parseInt(prompt("¡Ingresa un n° del 1 al 10 para ganar un descuento!"));
if (respuesta === 7) {
   alert("Felicidades! Ganó un %25 de descuento en su compra! PIN de descuento: 25")
} else {
   alert("Pruebe suerte de nuevo mañana ;)")
}


// //----------------------------------------------------------

class Producto {
   constructor(tipo, precio, litros) {
      this.tipo = tipo
      this.precio = precio
      this.litros = litros
   }
   sumaIva() {
      this.precioConIva = this.precio * 1.21;
   }

}
// ---Productos--
const prod1 = new Producto('Pintura al Agua', 700, '4L')
const prod2 = new Producto('Pintura al Agua', 1000, '10L')
const prod3 = new Producto('Pintura al Agua', 2000, '20L')
const prod4 = new Producto('Membrana Liquida', 1500, '10L')
const prod5 = new Producto('Membrana Liquida', 3200, '20L')

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);
prod1.sumaIva();
prod2.sumaIva();
prod3.sumaIva();
prod4.sumaIva();
prod5.sumaIva();


// // --------------------------------------------------------------
const listaDelUsuario = []
alert("Vendemos todo tipo de pinturas y materiales relacionados")
let productosQueBusco = prompt(" ¿Que cantidad de productos desea? ")

for (let i = 0; i < productosQueBusco; i++) {
   const entrada = prompt("Ingrese lo que busca")
   listaDelUsuario.push(entrada.toUpperCase())
}

console.log(listaDelUsuario)
alert(listaDelUsuario.join("\n"))

// ------------------------------------------------------------------
let consulta = prompt('desea un presupuesto de pintura ya?')
if (consulta == 'si') { }
// else {
//    alert('disfrute nuestra web ;)');
// }

// ------------------------------------
function PresupuestoPorMetro(MetrosCuadrados, PrecioPorMetro) {
   const Presupuesto = MetrosCuadrados * PrecioPorMetro
   return Presupuesto
}

function aplicarDescuento(montoInicial, porcentajeDescuento) {
   const montoADescontar = montoInicial / 100 * porcentajeDescuento
   const montoFinal = montoInicial - montoADescontar
   return montoFinal
}
//   ----------------------------------------
const PrecioPorMetro = 350
const MetrosCuadrados = parseFloat(prompt('El precio por metro es $350, Ingrese la cantidad en m² que desea pintar'))

const resultado = PresupuestoPorMetro(MetrosCuadrados, PrecioPorMetro)
let descuento = parseInt(prompt("Ganó usted el descuento del día? Ingrese el pin"))
if (descuento == 25) {
   const desc = aplicarDescuento(resultado, 25);
   alert("Su presupuesto final es $" + desc + " con el descuento aplicado")
} else {
   alert("Su presupuesto final es $" + resultado);
}

alert('gracias, disfuten nuestra web')

const formRegistro = document.querySelector('#formRegistro')
const inputClientes = document.querySelector('#inputClientes')
const inputTel = document.querySelector('#inputTel')
const listaDeClientes = document.querySelector('#listaDeClientes')
const seccionCliente = document.querySelector('#seccionCliente')

const clientes = JSON.parse(localStorage.getItem('clientes')) || []
mostrarClientes()

class Cliente {
  constructor({ nombreYapellido, telefono }) {
    this.nombreYapellido = nombreYapellido
    this.telefono = telefono
  }
}

formRegistro.onsubmit = e => {
  e.preventDefault()

  const nombreYapellido = inputClientes.value
  const telefono = inputTel.value

  const usuario = new Cliente({ nombreYapellido, telefono })

  guardarUsuario(usuario)
}

function guardarUsuario(usuario) {
  clientes.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(clientes))
  mostrarUsuarios()
}

function mostrarClientes() {
  if (clientes.length > 0) {
    seccionCliente.style.display = 'block'
    let listaDeClientesHTML = '<ul>'
    for (const usuario of clientes) {
      listaDeClientesHTML += `<li><a onclick="hacerAlgoConUsuario('${usuario.nombreYapellido}')">${usuario.nombreYapellido}</a></li>`
    }
    listaDeClientes.innerHTML = listaDeClientesHTML + '</ul>'
  }
}

function hacerAlgoConUsuario(Cliente) {
  alert(Cliente)
}