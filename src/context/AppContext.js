import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import initialState from './state';

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  function addToCart(item, qty) {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        price: item.price,
        id: item.id,
        name: item.name,
        qty,
        img: item.image,
      },
    });
  }

  function increaseByOne(item) {
    dispatch({ type: 'INCREASE_BY_ONE', item });
  }

  function decreaseByOne(item) {
    dispatch({ type: 'DECREASE_BY_ONE', item });
  }

  function removeAll() {
    dispatch({ type: 'REMOVE_ALL' });
  }

  const value = {
    data: state.data,
    cart: state.cart,
    addToCart,
    removeAll,
    increaseByOne,
    decreaseByOne,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
