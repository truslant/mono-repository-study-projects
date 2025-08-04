import { useRouteLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import ProductLineItem from "../components/ProductLineItem";

const FrozenDepartment = () => {

    const frozenFood = useRouteLoaderData('frozenFood');

    const frozenFoodInventory = frozenFood.map((food) => <ProductLineItem key={food.id} food={food} />)

    return (
        <>
            <h3>The frozen food department</h3>
            <Form method="POST">
                <input type="hidden" name="actionType" value="addProduct" />
                <button type="submit">+ Add Product </button>
            </Form>
            <ul>
                {frozenFoodInventory}
            </ul>
        </>
    )
}

export default FrozenDepartment;

