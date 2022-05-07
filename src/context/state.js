import data from '../data.json';

const initialState = {
  data,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

export default initialState;
