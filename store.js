import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'product/add':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'product/remove':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
      case "INCREMENT_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
