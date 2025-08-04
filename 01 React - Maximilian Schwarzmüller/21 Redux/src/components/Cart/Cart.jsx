import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';



const Cart = () => {
  const cartItems = useSelector(state => state.cartSlice.items)
  const cartVisibility = useSelector(state => state.cartSlice.isVisible)
  const cartItemsComponent = cartItems.map((item, index) => {
    return (
      <CartItem key={index} item={item} />
    )
  })

  if (cartVisibility) {
    return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItemsComponent}
        </ul>
      </Card>
    );
  }
};

export default Cart;
