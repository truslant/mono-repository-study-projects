import { Form } from "react-router-dom"
import DecreaseQtyButton from "./DecreaseQtyButton"
import IncreaseQtyButton from "./IncreaseQtyButton"

const ProductLineItem = ({ food }) => {
    return (
        <div>
            <DecreaseQtyButton food={food} />
            <IncreaseQtyButton food={food} />
            <li>{food.food}: {food.quantity}ea
                <Form method="DELETE">
                    <input type="hidden" name="actionType" value="deleteProduct" />
                    <input type="hidden" name="productId" value={food.id} />
                    <button type="submit">X</button>
                </Form>
            </li>
        </div>
    )
}

export default ProductLineItem