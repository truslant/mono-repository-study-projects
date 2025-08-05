import { useRouteLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"
import ProductLineItem from "../components/ProductLineItem"
import AddProductButton from "../components/AddProductButton"

const MeatDept = () => {
    const meatDeptState = useRouteLoaderData('meat')
    const meatProducts = meatDeptState.map((food) => {
        return (
            <ProductLineItem key={food.id} food={food} />
        )
    })
    return (
        <>
            <h3>Meat Department page</h3>
            <AddProductButton />
            <ul>
                {meatProducts}
            </ul>
        </>
    )
}

export default MeatDept