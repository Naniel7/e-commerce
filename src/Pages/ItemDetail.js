import React from 'react';

const DetallesProducto = ({ match }) => {
  const productId = match.params.id;

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID del Producto: {productId}</p>
       <p>Nombre del Producto: {producto.nombre}</p>
    <p>Precio del Producto: {producto.precio}</p>
    </div>
  );
}

export default DetallesProducto;