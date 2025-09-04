import { useContext } from "react"
import { ReactFoodContext } from "../context/ReactFoodContextProvider"

import CartItem from "./CartItem"

const Cart = ({ handleCloseModal }) => {

    const { cartContent, toggleFormMode } = useContext(ReactFoodContext)

    let cartTotal = 0;
    const cartItems = cartContent.map(cartItem => {
        cartTotal += Number(cartItem.price) * Number(cartItem.quantity)
        return <CartItem key={cartItem.id} cartItem={cartItem} />
    })

    const handleCheckout = () => {
        toggleFormMode('address')
    }

    return (
        <>
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {cartItems}
                </ul>
            </div>
            <div className="cart-total">${cartTotal}</div>
            <div className="modal-actions">
                <button
                    className="text-button"
                    onClick={handleCloseModal}
                >Close</button>

                <button
                    className="button"
                    disabled={!cartTotal}
                    onClick={handleCheckout}
                >Go to Checkout</button>
            </div>
        </>
    )
}

export default Cart