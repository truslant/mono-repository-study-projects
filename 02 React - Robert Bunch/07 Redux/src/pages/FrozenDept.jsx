import { useRouteLoaderData } from "react-router-dom";

const FrozenDepartment = () => {

    const frozenFood = useRouteLoaderData('frozenFood');
    console.log(frozenFood)

    const frozenFoodInventory = frozenFood.map((food, index) => <li key={index}>{food.food}: {food.quantity}ea</li>)

    return (
        <>
            <h3>The frozen food department</h3>
            <ul>
                {frozenFoodInventory}
            </ul>
        </>
    )
}

export default FrozenDepartment;

