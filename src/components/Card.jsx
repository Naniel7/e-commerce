/* eslint-disable react/prop-types */

import { useState } from "react";
import ItemCarro from "./ItemCarro";

const Card = ({ item, addToCart, cart, deleteFromCart }) => {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false);
  const { id, nombre, imagen, precio } = item;

  const AbreModal = () => {
    setVisible(true), addToCart(id);
  };
  return (
    <figure key={id} id="FIGURE">
      <div id="div-figure">
        <h3 id="H3">{nombre}</h3>

        <img src={imagen} alt={nombre} id="DIV_IMG"></img>
      </div>
      <figcaption>
        <div>
          <p id="PARRAFO">${precio}</p>
        </div>
        <div id="CONTADOR">
          <button id="BOTON" onClick={AbreModal}>
            Comprar ahora
          </button>
        </div>

        {visible && (
          <div id="MODAL-CONT">
            <div id="MODAL">
              <div id="MODAL-CONTENIDO">
                <button>
                  <svg
                    onClick={() => setVisible(false)}
                    id="BTN"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
                  </svg>
                </button>
                {cart.map((item, i) => (
                  <ItemCarro
                    key={i}
                    data={item}
                    deleteFromCart={deleteFromCart}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {!visible && null}
      </figcaption>
    </figure>
  );
};

export default Card;
