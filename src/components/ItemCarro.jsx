/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const ItemCarro = ({ data,deleteFromCart}) => {
    const{id, nombre,precio,imagen,quantity}=data
  return (
    <>
      <div id="items_carro">
        <div id="item">

        <h4 >{nombre}</h4>
        <h5>${precio} x {quantity}=${precio * quantity}</h5>

        <img src={imagen} alt={nombre} id="IMG_MODAL"></img>

        <p className="spam">${precio}</p>

        <button onClick={()=>deleteFromCart(id)}>Eliminar</button>
        </div>
     
      </div>
    </>
  );
};

export default ItemCarro;
