/* eslint-disable no-fallthrough */
/* eslint-disable no-empty */
/* eslint-disable no-extra-semi */

import { TYPES } from "./acciones";

export const carritoInitialState = {
  productos: [
    {
      imagen: "/src/assets/triangular.jpg",
      id: 1,
      nombre: "Almohada Triangular",
      precio: 7500,
    },
    {
      imagen: "/src/assets/viscoelastica.jpg",
      id: 2,
      nombre: "Almohada Viscoelastica",
      precio: 10000,
    },
    {
      imagen: "/src/assets/bebe.jpg",
      id: 3,
      nombre: "Almohada Bebe",
      precio: 5000,
    },
    {
      imagen: "/src/assets/vellon.jpg",
      id: 4,
      nombre: "Almohada Vellon",
      precio: 6500,
    },
    {
      imagen: "/src/assets/cervical.jpg",
      id: 5,
      nombre: "Almohada Cervical",
      precio: 9000,
    },
    {
      imagen: "/src/assets/viajera.jpg",
      id: 6,
      nombre: "Almohada Viaje",
      precio: 5500,
    },
    {
      imagen: "/src/assets/fundas.jpg",
      id: 7,
      nombre: "Funda Almohada",
      precio: 4800,
    },
    {
      imagen: "/src/assets/almohadones.jpg",
      id: 8,
      nombre: "Almohadones",
      precio: 3500,
    },
  ],
  cart: [],
};

export function carritoReducer(state, accion) {
  switch (accion.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.find(
        (producto) => producto.id === accion.payload
      );

      let ItemEnCaro = state.cart.find((item) => item.id === newItem.id);

      return ItemEnCaro
        ? {
          ...state,
          cart:state.cart.map(item=>
           item.id===newItem.id
            ?  {...item,
            quantity:item.quantity +1}
            : item 
            )
        }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== accion.payload),
      };
    }
   

    default:
      return state;
  }
}
