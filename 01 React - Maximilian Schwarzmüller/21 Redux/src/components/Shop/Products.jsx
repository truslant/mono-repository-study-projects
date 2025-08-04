import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = () => {

  const products = useSelector(state => state.productsSlice.products)

  const productItems = products.map((product, index) => {
    return (
      // <li >
      <ProductItem key={index}
        product={product}
        // id={product.id}
        // title={product.title}
        // price={product.price}
        // description={product.description}
      />
      // {/* </li> */}
    )
  })


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems}
      </ul>
    </section>
  );
};

export default Products;
