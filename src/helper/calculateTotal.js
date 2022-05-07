/**
 *
 * @param {Object[]} cart
 * @returns {number} Sum of the prices
 */
export default function calculateTotal(cart) {
  let sum = 0;

  if (!cart || cart.length === 0) return sum;

  cart.forEach((item) => {
    sum += item.price * item.qty;
  });

  return sum;
}
