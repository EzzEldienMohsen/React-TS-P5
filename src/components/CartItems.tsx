import { addToCart, removeFromCart } from '../store/cartSlice';
import { useCartDispatch, useCartSelector } from '../store/hooks';

export default function CartItems() {
  const cartItems = useCartSelector((store) => store.cart.items);
  const dispatch = useCartDispatch();
  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );
  const totalPrice = useCartSelector((state) =>
    state.cart.items.reduce((val, item) => (val + item.price) * cartQuantity, 0)
  );
  const formattedTotalPrice = totalPrice.toFixed(2);
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };
  function handleAddToCart({
    id,
    title,
    price,
  }: {
    id: string;
    title: string;
    price: number;
  }) {
    dispatch(addToCart({ id, title, price }));
  }
  return (
    <div id="cart">
      <p>No items in cart!</p>

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
