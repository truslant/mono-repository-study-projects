import { useSelector } from "react-redux"

const MeatDept = () => {
    const meatDeptState = useSelector(state => state.meatSlice)
    const meatProducts = meatDeptState.map((food, index) => {
        return (
            <li key={index}>
                {food.food} - {food.quantity}
            </li>
        )
    })
    return (
        <>
            <h3>Meat Department page</h3>
            <ul>
                {meatProducts}
            </ul>
        </>
    )
}

export default MeatDept