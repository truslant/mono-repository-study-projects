import { useContext } from "react"
import { ReactFoodContext } from "../context/ReactFoodContextProvider"

const MealItem = ({ foodOption: { id, description, image, name, price } }) => {

    const { handleAddToCart } = useContext(ReactFoodContext)


    const hostUrl = 'http://localhost:3000/'

    const handleClick = () => {
        handleAddToCart(id)
    }

    return (
        <li className="meal-item ">
            <article>
                <img src={hostUrl + image} alt={name} />
                <h3>{name}</h3>
                <div className="meal-item-price ">${price}</div>
                <p className="meal-item-description">{description}</p>
                <div className="meal-item-actions">
                    <button className="button" onClick={handleClick}>Add to Cart</button>
                </div>
            </article>
        </li>
    )
}
export default MealItem