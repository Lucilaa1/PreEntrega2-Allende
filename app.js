class Objetos {
    constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.imagen = imagen
    }
}
const objeto1 = new Objetos("Alimento Balanceado", 800, "Alimento-balanceado.png");
const objeto2 = new Objetos("Latita de Atún", 500, "Latita-atun.png");
const objeto3 = new Objetos("Botella de Leche", 350, "Botella-leche.png");
const objeto4 = new Objetos("Comedero", 300, "Comedero.png");
const objeto5 = new Objetos("Collar", 250, "Collar.png");
const objeto6 = new Objetos("Cama Moises", 2000, "Cama-moises.png");
const objeto7 = new Objetos("Bandeja Sanitaria", 300, "Bandeja-sanitaria.png");
const objeto8 = new Objetos("Cepillo", 250, "Cepillo.png");
const objeto9 = new Objetos("Transportadora", 3000, "Transportadora.png");
const objeto10 = new Objetos("Rascador Torre", 1500, "Rascador-torre.png");
const objeto11 = new Objetos("Juguete de Ratón", 500, "Juguete-raton.png");
const objeto12 = new Objetos("Juguete Interactivo", 400, "Juguete-interactivo.png");
const objeto13 = new Objetos("Ovillo de Lana", 200, "Ovillo-lana.png");
const objeto14 = new Objetos("Caja", 0, "Caja.png");


const inventario = [];

 let monedas = 5500;
  
 const elementoMonedas = document.querySelector("#monedas span");
 const elementoInventario = document.querySelector("#inventario");
 elementoMonedas.innerText = monedas;

function comprar(Objetos) {
    if (monedas - Objetos.precio <= 0) {
      alert("No ténes suficientes monedas para comprar " + item.nombre + ".");
    } else if (inventario.length > 7) {
      alert("No ténes más espacio en el inventario.");
    } else {
      inventario.push(Objetos);
      monedas = monedas - Objetos.precio;  
      actualizarHTML();
    }
  }
  
  function vender(indice) {
   
    const Objetos = inventario[indice];
    
    monedas = monedas + Objetos.precio;
  
    inventario.splice(indice, 1);
    actualizarHTML(); 
  }

  function actualizarHTML() {
    
    elementoInventario.innerHTML = "";
    
    for (const Objetos of inventario) {
      let indiceObjetos = inventario.indexOf(Objetos);
      let elementoObjetos = `
          <li class="Objetos" onclick="vender(${indiceObjetos})">
              <img src="img/${Objetos.imagen}" />
          </li>`;
      elementoInventario.innerHTML += elementoObjetos;
    }
    
    elementoMonedas.innerText = monedas;
  }