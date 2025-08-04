import { useSelector } from "react-redux";

const FrozenDepartment = () => {

    const frozenFoodState = useSelector(state => state.frozenFoodSlice)

    const frozenFoodInventory = frozenFoodState.map((food, index) => <li key={index}>{food.food}: {food.quantity}</li>)

    return (
        <>
            <h1>The frozen food department</h1>
            <ul>
                {frozenFoodInventory}
            </ul>
        </>
    )
}

export default FrozenDepartment;

