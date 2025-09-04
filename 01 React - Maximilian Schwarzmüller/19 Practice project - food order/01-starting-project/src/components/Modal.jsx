import { useRef, useImperativeHandle, useContext } from "react"

import { ReactFoodContext } from "../context/ReactFoodContextProvider";

import Cart from "./Cart";
import CheckOut from "./CheckOut";
import OrderSuccess from "./OrderSuccess";
import ErrorPage from "./ErrorPage";

const Modal = ({ ref }) => {

    const { formMode, toggleFormMode, error } = useContext(ReactFoodContext)

    const refToModal = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                refToModal.current.showModal()
            }
        }
    })

    const handleCloseModal = () => {
        toggleFormMode('cart')
        refToModal.current.close()
    }
    if (error) {
        refToModal.current.showModal()
    }
    console.log('error:', error)

    return (
        <dialog ref={refToModal} className="modal" onCancel={handleCloseModal} >
            {!error && formMode === 'cart' && <Cart handleCloseModal={handleCloseModal} />}
            {!error && formMode === 'address' && <CheckOut handleCloseModal={handleCloseModal} />}
            {!error && formMode === 'success' && <OrderSuccess onClick={handleCloseModal} />}
            {error && <ErrorPage error={error} onClick={handleCloseModal} />}
        </dialog>
    )
}
export default Modal