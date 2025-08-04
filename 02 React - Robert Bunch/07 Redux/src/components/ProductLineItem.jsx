import { Form } from "react-router-dom"

const ProductLineItem = ({ food }) => {
    return (
        <div>
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