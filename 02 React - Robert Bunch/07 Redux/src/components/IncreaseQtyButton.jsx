import { Form } from "react-router-dom";
const IncreaseQtyButton = ({ food }) => {
    return (
        <Form method="PATCH">
            <input type="hidden" name="actionType" value='incrementProduct' />
            <input type="hidden" name="productId" value={food.id} />
            <input type="hidden" name="quantity" value={food.quantity} />
            <button type="submit">+</button>
        </Form>
    )
}

export default IncreaseQtyButton;