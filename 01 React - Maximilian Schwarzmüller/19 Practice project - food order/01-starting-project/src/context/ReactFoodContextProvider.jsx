import { createContext, useState, useEffect } from "react"

export const ReactFoodContext = createContext({
    foodOptions: [],
    cartContent: [],
    isFetching: false,
    error: '',
    formMode: 'cart',
    handleAddToCart: () => { },
    handleReduceCartItemQty: () => { },
    toggleFormMode: () => { },
    postFoodOrder: () => { }
})

const baseUrl = 'http://localhost:3000'

const ReactFoodContextProvider = ({ children }) => {

    const [foodOptions, setFoodOptions] = useState([]);
    const [cartContent, setCartContent] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState()
    const [formMode, setFormMode] = useState('cart')

    useEffect(() => {
        (async () => {
            setIsFetching(true)
            try {
                const result = await fetch(baseUrl + '/meals')
                if (!result.ok) {
                    throw new Error('Failed data fetch from server')
                }

                const resData = await result.json();
                setFoodOptions(resData)
                setIsFetching(false)
            } catch (error) {
                setError(error.message)
                setIsFetching(false)
            }
        })()
    }, [])

    const handleAddToCart = (id) => {
        const cartItemIndex = cartContent.findIndex(foodItem => foodItem.id === id)
        if (cartItemIndex < 0) {
            const newFoodItem = foodOptions.find(foodItem => foodItem.id === id)
            setCartContent(prevFoodOptions => {
                return [...prevFoodOptions, { ...newFoodItem, quantity: 1 }]
            })
        } else {
            const newFoodOptions = cartContent.map(foodItem => {
                if (foodItem.id === id) {
                    return {
                        ...foodItem,
                        quantity: Number(foodItem.quantity) + 1
                    }
                } else {
                    return foodItem
                }
            })
            setCartContent(newFoodOptions)
        }
    }

    const handleReduceCartItemQty = (id) => {
        const newCartContent = cartContent.map(cartItem => {
            if (cartItem.id === id) {
                if (cartItem.quantity > 1) {
                    return {
                        ...cartItem,
                        quantity: Number(cartItem.quantity) - 1
                    }
                } else {
                    return undefined
                }
            }
            return cartItem
        }).filter(cartItem => cartItem !== undefined)
        setCartContent(newCartContent)
    }

    const toggleFormMode = (mode) => {
        setFormMode(mode)
        if (mode === 'success') {
            setCartContent([])
        }
    }

    const postFoodOrder = async (customerData) => {
        try {
            const submitData = {
                order: {
                    items: cartContent,
                    customer: customerData
                }
            }
            const response = await fetch(baseUrl + '/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitData)
            })

            if (!response.ok) {
                throw new Error(response.json().message || 'Error saving data to server')
            }
        } catch (error) {
            setError(error)
        }
    }

    const contextValue = {
        foodOptions,
        cartContent,
        isFetching,
        error,
        handleAddToCart,
        handleReduceCartItemQty,
        formMode,
        toggleFormMode,
        postFoodOrder
    }

    return (
        <ReactFoodContext value={contextValue}>
            {children}
        </ReactFoodContext>
    )
}

export default ReactFoodContextProvider