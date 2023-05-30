import { getCookie } from 'app/util/cookies.js';
import { parseJson } from 'app/util/json.js';

export default function CartQuantity() {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantity = productQuantities.map((item) => item.quantity);
  console.log(quantity);
  const total = quantity.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );
  return <div>{total}</div>;
}
