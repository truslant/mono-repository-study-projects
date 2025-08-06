import { useRouteLoaderData } from "react-router-dom"
import ProductLineItem from "../components/ProductLineItem"
import AddProductButton from "../components/AddProductButton"

const ProduceDept = () => {
    
    const produceDeptState = useRouteLoaderData('produce')

    const produceFood = produceDeptState.map((food) => (<ProductLineItem key={food.id} food={food} />))

    return (
        <>
            <h3>Produce Department</h3>
            <AddProductButton />
            <ul>
                {produceFood}
            </ul>
        </>
    )
}

export default ProduceDept