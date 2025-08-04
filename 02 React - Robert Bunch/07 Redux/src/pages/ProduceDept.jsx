import { useSelector } from "react-redux"

const ProduceDept = () => {
    const produceDeptState = useSelector(state => state.produceSlice)

    const produceFood = produceDeptState.map((food, index) => <li key={index}>{food.food} - {food.quantity}</li>)

    return (
        <>
            <h3>Produce Department</h3>
            <ul>
                {produceFood}
            </ul>
        </>
    )
}

export default ProduceDept