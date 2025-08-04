import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartSliceActions } from '../../reduxStore/cartSlice';

const CartButton = (props) => {

  const items = useSelector(state => state.cartSlice.items)
  const itemsQty = items.length
  const dispatch = useDispatch()
  
  const handleCartShow = () => {
    dispatch(cartSliceActions.setVisibility())
  }

  return (
    <button className={classes.button} onClick={handleCartShow}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQty}</span>
    </button>
  );
};

export default CartButton;
