import { useReducer } from 'react';
import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom
import { products } from '../../data.json';
import Card from './Card';
import { carritoInitialState, carritoReducer } from './CarritoReducer';
import { TYPES } from './acciones';

const CardList = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

  const { productos, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
  };

  return (
    <>
      <section id="items-container">
        <div id='CARDLIST_CONT'>
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Card
                item={item}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                cart={cart}
              >
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default CardList;
