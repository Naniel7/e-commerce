import { useReducer, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../data.json';
import Card from './Card';
import { carritoInitialState, carritoReducer } from './CarritoReducer';
import { TYPES } from './acciones';

const CardList = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const navigate = useNavigate();

  const { cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
  };

  useEffect(() => {
    const handleImageClick = (id) => {
      navigate(`/product/${id}`);
    };

    const cleanup = () => {
      const cards = document.querySelectorAll('.card-image');
      cards.forEach((card) => {
        card.removeEventListener('click', handleImageClick);
      });
    };

    const cards = document.querySelectorAll('.card-image');
    cards.forEach((card) => {
      const id = card.getAttribute('data-id');
      card.addEventListener('click', () => handleImageClick(id));
    });

    return cleanup;
  }, [navigate]);

  return (
    <>
      <section id="items-container">
        <div id='CARDLIST_CONT'>
          {products.map((item) => (
            <div key={item.id}>
              <Card
                item={item}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                cart={cart}
                className="card-image"
                data-id={item.id}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CardList;
