import { useContext } from "react"
import { ReactFoodContext } from "../context/ReactFoodContextProvider"

const CartItem = ({ cartItem: { id, name, quantity, price } }) => {

    const {
        handleAddToCart,
        handleReduceCartItemQty } = useContext(ReactFoodContext)

    const handleIncreaseClick = () => {
        handleAddToCart(id)
    }

    const handleReduceClick = () => {
        handleReduceCartItemQty(id)
    }

    return (
        <li>
            <div className="cart-item">
                <p>{`${name} - 1 x $${price}`}</p>
                <div className="cart-item-actions">
                    <button onClick={handleReduceClick}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncreaseClick}>+</button>
                </div>
            </div>
        </li>
    )
}
export default CartItem