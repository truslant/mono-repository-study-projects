import { useContext } from "react"

import { ReactFoodContext } from "../context/ReactFoodContextProvider"
import MealItem from "./MealItem"

const Meals = () => {

    const { foodOptions, isFetching } = useContext(ReactFoodContext)

    const mealItems = foodOptions.map((foodOption) => {
        const { id } = foodOption
        return (
            <MealItem key={id} foodOption={foodOption} />
        )
    })

    return (
        <div id="meals">
            {isFetching && <p>Loading ...</p>}
            {!isFetching && mealItems}
        </div>
    )

}

export default Meals