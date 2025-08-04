import { productsSliceActions } from "./productsSlice"
import { cartSliceActions } from "./cartSlice";

export const sendCartData = (cart) => {
    return async (dispatch, getState) => {
        dispatch(productsSliceActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));
        console.log('Saving data to DB via sendCartData thunk!')
        try {
            const response = await fetch('https://test-project-8eddb-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if (!response.ok) {
                throw new Error('Cart Data sending failed')
            }
            dispatch(productsSliceActions.showNotification({
                status: 'success',
                title: 'Succsess!',
                message: 'Sent cart data successfully!'
            }))
            console.log('Saved data to DB via sendCartData thunk successfully!')
            console.log('CartSlice data:',getState().cartSlice)
        } catch (error) {
            dispatch(productsSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}



export const fetchCartData = () => {
    return async (dispatch, getState) => {
        dispatch(productsSliceActions.showNotification({
            status: 'Pending',
            message: 'Fetching data',
            title: 'Retreiving data from Server',
        }))

        const fetchingDBdata = async () => {
            const response = await fetch('https://test-project-8eddb-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

            if (!response.ok) {
                throw new Error('Failed fetchin data from Server!')
            }
            dispatch(productsSliceActions.showNotification({
                status: 'success',
                title: 'Succsess!',
                message: 'Cart data retreived successfully!'
            }))
            return response.json();
        }
        try {
            const fetchedCart = await fetchingDBdata()
            console.log('Data from fetching Thunk retreived:', fetchedCart);
            
            dispatch(cartSliceActions.fetchData(fetchedCart));

            const reduxCartData = getState().cartSlice
            console.log('Redux Store cart data:', reduxCartData);
        } catch (error) {
            dispatch(productsSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message,
            }))
        }
    }
}