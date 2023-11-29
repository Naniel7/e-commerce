import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data.json';

const ItemDetail = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.nombre}</h2>
      <p>{product.description}</p> <div className='item-image'>
        <img src={product.imagen} alt="" />
       </div>
      <p>Precio: ${product.precio}</p>
    </div>
  );
}

export default ItemDetail;
