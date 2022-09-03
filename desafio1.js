alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let  seleccionarProductos  =  Number(prompt( "1-Kaury $3000 2-Belen $3500 3-Andressa $5000 4-Body $4000"));
let seleccionarCantidad;
let total = 0 ;

const cantidad = (cantidad, precio) => {
    return cantidad * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Kaury, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
      break;
    case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Belen, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 3500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Andressa, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Body, indique la"))
      total += cantidad(seleccionarCantidad, 4000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt("1-Kaury $3000 2-Belen $3500 3-Andressa $5000 4-Body $4000"))
}

//alert("el total de la compra es de: " + total)




const regalo = () => {
    if (total >= 15000) {
      alert("Te ganaste un regalo sorpresa")
    }  
}

regalo()

// regalo si supera 15000

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
  if (metodo == "tarjeta") {
    total *= 1.15
    console.log("el monto a abonar es: " +total);
  }else if (metodo == "efectivo") {
    total-=  1000
    alert("tenes un descuento de 1000, el total es: "  +  total)
  }


}

metodoDePago ()