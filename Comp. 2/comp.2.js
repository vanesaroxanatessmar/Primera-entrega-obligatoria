const productos = [
    { nombre: "koury", precio: 3000},
    {nombre: "belen", precio:3500},
    {nombre: "andressa", precio:5000},
    {nombre: "body", precio:4000},
];
let carrito = []

let seleccion = prompt("Hola! Deseas comprar alguno de nuestros productos Si o No")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, debes ingresar si o no")
    seleccion = prompt("Deseas comprar algo? si o no")
}

if(seleccion == "si"){
    alert("Genial!! ahora nuestra lista de productos")
    let nuestrosProductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$"); 
    alert(nuestrosProductos.join(" - "))
}   else if (seleccion == "no"){
    alert("Gracias por visitar nuestro sitio, hasta pronto.!")
}

while (seleccion !== "no") {
    let productos = prompt("Agrega productos a tu carrito")
    let precio = 0

    if(productos == "koury" || productos == "belen" || productos == "andressa" || productos == "body"){
       
  switch (productos){
    case "koury":
      precio = 3000;
      break;
    case "belen":
        precio = 3500;
      break;
    case "andressa":
        precio = 5000;
       break;
    case "body":
        precio = 4000;
      break;

    default:
      break;
  }
let cantidad = parseInt(prompt("Cuantas prendas deseas llevar?"))

carrito.push({productos, cantidad, precio})
console.log(carrito)
} 

seleccion = prompt("Deseas seguir comprando?")

while(seleccion === "no"){
    alert("Nos vemos.... Gracias por tu compra")
    carrito.forEach((carritoFinal) => {
        console.log(`productos: ${carritoFinal.productos}, cantidad: ${carritoFinal.cantidad}, total a pagar por productos ${carritoFinal.cantidad * carritoFinal.precio}`)
    })
break;
}



const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`el total a pagar por su compre es de: ${total}`)

//alert("el total de la compra es de: " + total)

const regalo = () => {
    if (total >= 15000) {
      alert("Te ganaste un regalo sorpresa")
    }  
}

regalo()

// regalo si supera 15000

}

