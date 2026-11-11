const registro =
  "Café:35.50; té verde:28; Pan Dulce:18.5; CAFÉ:35.5; " +
  "galleta de avena:22.10; Té Verde:28; Jugo de naranja:40; " +
  "pan dulce:18.50; Café Americano:abc; galleta de avena:22.1; " +
  "Jugo de Naranja:40; Sándwich:55.75; té verde:-10; " +
  "; Pan dulce:18.5; Café:35.5; Sándwich:55.75; galleta de avena:";

// simpia el registro y guarda las ventas válidas
function limpiarRegistro(texto) {
  const partes = texto.split(/[;,]/);
  const ventas = [];

  for (const parte of partes) {
    const datos = parte.split(":");

    if (datos.length !== 2) {
      continue;
    }

    const nombreOriginal = datos[0].trim();
    const precioTexto = datos[1].trim();
    const precio = Number(precioTexto);

    if (
      nombreOriginal === "" ||
      precioTexto === "" ||
      isNaN(precio) ||
      precio <= 0
    ) {
      continue;
    }

    let producto = nombreOriginal.toLowerCase();
    producto = producto.replace(/ +/g, " ");
    producto = producto.trim();

    ventas.push({ producto, precio });
  }

  return ventas;
}

// suma los precios y redondea a dos decimales
function sumar(...precios) {
  const total = precios.reduce(
    (acumulado, precio) => acumulado + precio,
    0
  );

  return Math.round(total * 100) / 100;
}

// cuenta las ventas y suma el ingreso de cada producto
function resumenPorProducto(ventas) {
  const resumen = {};

  for (const venta of ventas) {
    const producto = venta.producto;

    if (resumen[producto] === undefined) {
      resumen[producto] = {
        veces: 0,
        ingreso: 0,
      };
    }

    resumen[producto].veces += 1;
    resumen[producto].ingreso += venta.precio;
  }

  const productos = [];

  for (const producto in resumen) {
    productos.push({
      producto: producto,
      veces: resumen[producto].veces,
      ingreso: sumar(resumen[producto].ingreso),
    });
  }

  productos.sort((a, b) => {
    if (a.ingreso > b.ingreso) return -1;
    if (a.ingreso < b.ingreso) return 1;

    return a.producto.localeCompare(b.producto, "es");
  });

  return productos;
}

// calcula un descuento del 15 % por defecto
function descuento(precio, porcentaje = 15) {
  const precioFinal = precio - precio * (porcentaje / 100);
  return Math.round(precioFinal * 100) / 100;
}

// aplica una función a cada elemento de una lista
function aplicarATodos(lista, funcion) {
  const nuevaLista = [];

  for (const elemento of lista) {
    nuevaLista.push(funcion(elemento));
  }

  return nuevaLista;
}


// elige al azar un producto vendido
function productoAlAzar(ventas) {
  if (ventas.length === 0) {
    return "No hay productos";
  }

  const numeroAlAzar = Math.floor(Math.random() * ventas.length);
  return ventas[numeroAlAzar].producto;
}

// me muestra el reporte en la consola
function reporteFinal(ventas) {
  const resumen = resumenPorProducto(ventas);
  let total = 0;

  console.log("Reporte de ventas:");

  for (const elemento of resumen) {
    console.log(
      `${elemento.producto}: ${elemento.veces} ventas, ingreso $${elemento.ingreso.toFixed(2)}`
    );
  }

  for (const venta of ventas) {
    total += venta.precio;
  }

  total = Math.round(total * 100) / 100;

  console.log(`Total del día: $${total.toFixed(2)}`);
  console.log(`Producto de la promoción: ${productoAlAzar(ventas)}`);
}

// ejecuta las funciones con el registro de prueba
const ventas = limpiarRegistro(registro);

console.log("Ventas válidas:", ventas);
console.log("Resumen:", resumenPorProducto(ventas));

reporteFinal(ventas);