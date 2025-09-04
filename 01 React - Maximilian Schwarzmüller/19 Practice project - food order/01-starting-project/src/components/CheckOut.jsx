import { useActionState } from "react"
import { useContext } from "react"
import { ReactFoodContext } from "../context/ReactFoodContextProvider"

import { isEmail, isNotEmpty } from "../utils/validations"

import InputGroup from "./InputGroup"

const CheckOut = ({ handleCloseModal }) => {

    const { cartContent, postFoodOrder, toggleFormMode } = useContext(ReactFoodContext)

    const handleFromSubmit = (prevState, formData) => {
        const customerData = Object.fromEntries(formData.entries())

        const errors = []

        Object.keys(customerData).forEach(key => {
            if (key === 'email' && !isEmail(customerData[key])) {
                errors.push('Please enter valid email')
            }
            if (!isNotEmpty(customerData[key])) {
                errors.push(`${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`)
            }
        })

        if (errors.length) {
            return {
                errors,
                customer: customerData,
            }
        }

        postFoodOrder(customerData)
        toggleFormMode('success')
    }
    const cartTotal = cartContent.reduce((accumulator, curItem) => {
        return accumulator + Number(curItem.price) * Number(curItem.quantity)
    }, 0)


    const initialState = { customer: {}, items: [], errors: [] }

    const [formState, formAction, isFetching] = useActionState(handleFromSubmit, initialState)

    // const order = {
    //     items: [...cartContent],
    //     customer: {
    //         email: '',
    //         name: '',
    //         street: '',
    //         ['postal-code']: '',
    //         city: ''
    //     }
    // }

    const errorList = formState.errors.map(error => {
        return (
            <ul>
                <li>{error}</li>
            </ul>
        )
    })

    return (
        <div >
            <h2>Checkout</h2>
            <p>Total Amount: ${cartTotal}</p>
            <form action={formAction}>
                <InputGroup
                    label='Full Name'
                    type='text'
                    id="name"
                    name="name"
                    defaultValue={formState.customer?.name}
                // required
                />
                <InputGroup
                    label='E-Mail Address'
                    type='email'
                    id="email"
                    name="email"
                    defaultValue={formState.customer?.email}
                // required
                />
                <InputGroup
                    label='Street'
                    type='text'
                    id="street"
                    name="street"
                    defaultValue={formState.customer?.street}
                // required
                />
                <div className="control-row">
                    <InputGroup
                        label='Postal Code'
                        type='text'
                        id="postalCode"
                        name="postal-code"
                        defaultValue={formState.customer['postal-code']}
                    // required
                    />
                    <InputGroup
                        label='City'
                        type='text'
                        id="city"
                        name="city"
                        defaultValue={formState.customer?.city}
                    // required
                    />
                </div>
                {formState.errors.length > 0 && errorList}
                <div className="modal-actions">
                    <button type="button" className="text-button" onClick={handleCloseModal}>Close</button>
                    <button type='submit' className="button" disabled={isFetching}>{isFetching ? 'Submitting...' : 'Submit Order'}</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOut