import React from 'react';

const DetallesProducto = ({ match }) => {
  const productId = match.params.id;

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID del Producto: {productId}</p>
      {/* Renderiza los detalles del producto según tu lógica */}
    </div>
  );
}

export default DetallesProducto;