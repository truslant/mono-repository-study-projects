import { Form } from "react-router-dom";
const DecreaseQtyButton = ({ food }) => {
    return (
        <Form method="PATCH">
            <input type="hidden" name="actionType" value='decrementProduct' />
            <input type="hidden" name="productId" value={food.id} />
            <input type="hidden" name="quantity" value={food.quantity} />
            <button type="submit">-</button>
        </Form>
    )
}

export default DecreaseQtyButton;