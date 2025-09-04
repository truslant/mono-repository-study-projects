import headerImg from '../assets/logo.jpg'
import { useContext } from 'react'
import { ReactFoodContext } from '../context/ReactFoodContextProvider'

const Header = ({ openDialog }) => {
    const { cartContent } = useContext(ReactFoodContext)
    const cartItemsQty = cartContent.reduce((accumulator, curValue) => {
        return accumulator + Number(curValue.quantity)
    }, 0)
    return (
        <div id="main-header">
            <div id="title">
                <img src={headerImg} alt="Logo with dining set" />
                <h1>ReactFood</h1>
            </div>
            <button
                className='text-button'
                onClick={openDialog}
                disabled={!cartItemsQty}
            >Cart{cartItemsQty > 0 && `(${cartItemsQty})`}</button>
        </div>
    )
}
export default Header