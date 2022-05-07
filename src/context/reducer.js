function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      /**
       * Eğer cartta item varsa qty, ne kadar eklenirse üstüne ekle
       */
      let found = state.cart.find((item) => item.id === action.item.id);
      let copy = [action.item, ...state.cart];

      if (found) {
        copy = state.cart.map((item) => {
          console.log('Item:', item);
          if (item.id === action.item.id) {
            return { ...item, qty: item.qty + action.item.qty };
          } else {
            return item;
          }
        });
      }
      return {
        ...state,
        cart: copy,
      };
    }

    case 'INCREASE_BY_ONE': {
      let found = state.cart.find((item) => item.id === action.item.id);
      let copy = [...state.cart];

      if (found) {
        copy = state.cart.map((item) => {
          if (item.id === found.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
      return {
        ...state,
        cart: copy,
      };
    }

    case 'DECREASE_BY_ONE': {
      let found = state.cart.find((item) => item.id === action.item.id);
      let copy = [...state.cart];

      if (found) {
        copy = state.cart.map((item) => {
          if (item.id === found.id) {
            return { ...item, qty: item.qty > 1 ? item.qty-- : 1 };
          } else {
            return item;
          }
        });
      }
      return {
        ...state,
        cart: copy,
      };
    }

    case 'REMOVE_ALL': {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
}

export default reducer;
