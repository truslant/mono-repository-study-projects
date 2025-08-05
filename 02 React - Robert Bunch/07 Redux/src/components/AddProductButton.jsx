import { Form } from "react-router-dom"

const AddProductButton = () => {
    return (
        <Form method="POST">
            <input type="hidden" name="actionType" value="addProduct" />
            <button type="submit">+Add product</button>
        </Form>
    )
}

export default AddProductButton