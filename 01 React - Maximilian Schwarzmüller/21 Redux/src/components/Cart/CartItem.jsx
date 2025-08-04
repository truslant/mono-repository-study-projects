import classes from './CartItem.module.css';
import { cartSliceActions } from '../../reduxStore/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, price } = props.item;
  const quantity = props.item.qty

  const dispatch = useDispatch();

  const handleProductIncrease = () => {
    dispatch(cartSliceActions.increaseProduct(props.item))
  }
  const handleProductDecrease = () => {
    dispatch(cartSliceActions.reduceProduct(props.item))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity * price).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleProductDecrease}>-</button>
          <button onClick={handleProductIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
