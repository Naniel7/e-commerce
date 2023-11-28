/* eslint-disable no-unused-vars */
import { useReducer } from 'react'
import {products} from '../../data.json'
import Card from './Card'
import { carritoInitialState,carritoReducer } from './CarritoReducer'
import { TYPES } from './acciones'

const CardList = () => {
    const [state, dispatch]=useReducer(carritoReducer,carritoInitialState)
  
    const {productos,cart}=state

    const addToCart=(id)=>{
    dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    
    const deleteFromCart=(id)=>{
      dispatch({type:TYPES.REMOVE_ALL_PRODUCTS, payload:id})
    }
    
  
    return (
    <>
    <section id="excursiones"> 
    
      <div id='CARDLIST_CONT'>
       
       {products.map((item) => (
          <Card
            key={item.id}
            item={item}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
            cart={cart}
          >          
          </Card>
          
        ))}
      </div>
      </section>

    </>)
}

export default CardList