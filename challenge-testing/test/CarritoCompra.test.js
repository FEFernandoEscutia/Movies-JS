const CarritoCompras = require("../index");

// Tareas
//** 1.-constructor(): Inicializa el carrito como un array vacío. */
//** 2.-agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito. */
//** 3.-calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
//** 4.-aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado. */

// 1.-constructor():

const miCarrito = new CarritoCompras();

describe("El constructor ", () => {
  it("Debe inicializa el 'carrito' como un array vacío", () => {
    expect(miCarrito.compras).toHaveLength(0);
  });
});

// 2.-agregarProducto(producto):

describe("El método agregarProducto", () => {
  it("Debe recibir un objeto representando un producto y lo agrega al carrito.", () => {
    // Verifica que el método agregarProducto exista antes de llamarlo
    if ("agregarProducto" in miCarrito && typeof miCarrito.agregarProducto === "function"){
      const producto = { cantidad: 1, nombre: "producto1", precio: 10};
      miCarrito.agregarProducto([producto]);
      expect(miCarrito.compras).toEqual([producto]);
    } else {
      throw Error("La función agregarProducto no existe");
    }
  });
});

//3.-calcularTotal():
describe("La funcion calcularTotal", () => {
  it("Debe calcular el total de la compra sumando los precios de todos los productos en el carrito y si el carrito esta vacio", () => {

    if ("calcularTotal" in miCarrito && typeof miCarrito.calcularTotal === "function"){
    const compritas = [
      { cantidad: 1, nombre: "producto1", precio: 10},
      { cantidad: 2, nombre: "producto2", precio: 15 },
      { cantidad: 5, nombre: "producto3", precio: 10 },
    ];
    expect(miCarrito.calcularTotal(compritas)).toBe(90);

    const compras2 = [{ cantidad: 1, nombre: "producto1", precio: 50}];
    expect(miCarrito.calcularTotal(compras2)).toBe(50);

    const compras3 = [];
    expect(() => miCarrito.calcularTotal(compras3)).toThrowError(
      "El carrito está vacío. No se puede calcular el total"
    );
    }else {
      throw Error("La función calcularTotal no existe");
    }
  });
});


// 4.-aplicarDescuento(porcentaje):
describe("La funcion aplicarDescuento", () => {
  it("Debe aplicar un descuento al total de la compra según el porcentaje especificado", () => {
  
    if ("aplicarDescuento" in miCarrito && typeof miCarrito.calcularTotal === "function"){

    // Agregar productos al carrito
    miCarrito.agregarProducto([{ cantidad: 1, nombre: "producto1", precio: 10 }]);
    miCarrito.agregarProducto([{ cantidad: 2, nombre: "producto2", precio: 15 }]);
    miCarrito.agregarProducto([{ cantidad: 5, nombre: "producto3", precio: 10 }]);

    const porcentaje = 20;
    const totalConDes = miCarrito.calcularTotal(miCarrito.compras) * (1 - porcentaje / 100);

    expect(miCarrito.aplicarDescuento(porcentaje)).toBe(totalConDes);

    miCarrito.agregarProducto([{ cantidad: 1, nombre: "producto1", precio: 10 }]);

    const porcentaje2 = 10;
    const totalConDes2 = miCarrito.calcularTotal(miCarrito.compras) * (1 - porcentaje2 / 100);
    expect(miCarrito.aplicarDescuento(porcentaje2)).toBe(totalConDes2);
    
    miCarrito.compras = [];
    const porcentaje3 = 10;
    expect(() => miCarrito.aplicarDescuento(porcentaje3)).toThrowError("El carrito está vacío. No se puede calcular el total.");

    } else {
      throw Error ("La función calcularTotal no existe")
    }
  });
});

