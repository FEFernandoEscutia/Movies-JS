class CarritoCompras {
  constructor() {
    this.compras = [];
  }

  agregarProducto(producto) {
    this.compras.push(...producto);
  }

  calcularTotal(producto) {
    if (producto.length === 0) {
      throw new Error("El carrito está vacío. No se puede calcular el total.");
    } 
    return producto.reduce(
      (total, articulo) => total + articulo.cantidad * articulo.precio,
      0
    );
  }

  aplicarDescuento(porcentaje) {
    if (this.compras.length === 0) {
      throw new Error("El carrito está vacío. No se puede calcular el total.");
    }
    const total = this.compras.reduce(
      (total, articulo) => total + articulo.cantidad * articulo.precio,
      0
    );
    const descuento = (total * porcentaje) / 100;
    return total - descuento;
  }
}

module.exports = CarritoCompras;
