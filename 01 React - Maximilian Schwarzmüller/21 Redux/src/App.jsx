import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './reduxStore/cartActions';

let isInitial = true;

function App() {
  console.log('App component initializing...')
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartSlice)
  const notification = useSelector(state => state.productsSlice.notification);

  useEffect(() => {
    console.log('Fetchind DB data useEffect triggered!')
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    console.log('Writing data to DB via useEffect triggered!')
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (<Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />)}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

