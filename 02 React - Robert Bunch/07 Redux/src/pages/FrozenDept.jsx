import { useRouteLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import ProductLineItem from "../components/ProductLineItem";
import AddProductButton from "../components/AddProductButton";

const FrozenDepartment = () => {

    const frozenFood = useRouteLoaderData('frozenFood');

    const frozenFoodInventory = frozenFood.map((food) => <ProductLineItem key={food.id} food={food} />)

    return (
        <>
            <h3>The frozen food department</h3>
            <AddProductButton />
            <ul>
                {frozenFoodInventory}
            </ul>
        </>
    )
}

export default FrozenDepartment;

