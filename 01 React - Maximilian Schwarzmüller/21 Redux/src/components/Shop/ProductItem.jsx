import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../reduxStore/cartSlice';

const ProductItem = (props) => {

  const dispatch = useDispatch();

  const { title, price, description } = props.product;

  const handleAddProduct = () => {
    dispatch(cartSliceActions.addProduct(props.product))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddProduct}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
