const productos = [
    {
        nombre: "Coca-cola",
        precio: 180,
    },
    {
        nombre: "Doritos",
        precio: 500,
    },
    {
        nombre: "Red Bull",
        precio: 200,
    },
    {
        nombre: "Agua",
        precio: 150,
    },
];

let shop = [];

let elegir = prompt("Hola como estas? Queres comprar algo? Si o No");

while (elegir != "Si" && elegir != "No") {
    alert("Ingresar Si o No");
    elegir = prompt("Hola como estas? Queres comprar algo? Si o No");
}

if (elegir == "Si") {
    alert("Tenemos estos productos");
    let todosLosProductos = productos.map((producto) => producto.precio + "$ " + producto.nombre + "");
    alert(todosLosProductos.join(" / "));
} else if (elegir == "No") {
    alert("Nos vemos!");
}

while (elegir != "No") {
    let producto = prompt("Suma tu producto a la bolsa.");
    let precio = 0;

    if (
        producto == "Coca-cola" ||
        producto == "Doritos" ||
        producto == "Red Bull" ||
        producto == "Agua"
    ) {
        switch (producto) {
            case "Coca-cola":
                precio = 180;
                break;
            case "Doritos":
                precio = 500;
                break;
            case "Red Bull":
                precio = 200;
                break;
            case "Agua":
                precio = 150;
                break;
            default:
                break;
        }
        let cantidad = parseInt(prompt("Cuantas unidades desea llevar?"));
        shop.push({ producto, cantidad, precio });
    } else {
        alert("No tenemos ese producto");
    }

    elegir = prompt("Queres seguir comprando? Si o No");
    while (elegir == "No") {
        alert("Gracias por la compra!!")
        
        shop.forEach((shopFinal) => {
            console.log(
                `producto ${shopFinal.producto}, unidades: ${shopFinal.cantidad}, total a pagar por producto es: ${shopFinal.cantidad * shopFinal.precio}`
            );
        });
        break;
    }
}

const total = shop.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
console.log(`El total a pagar por su compra es de ${total}`);