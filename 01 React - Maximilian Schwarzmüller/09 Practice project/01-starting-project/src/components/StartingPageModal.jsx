import { useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom'
import image from '../assets/no-projects.png'

const StartingPageModal = ({ reference }) => {

    const dialog = useRef()

    useImperativeHandle(reference, () => {
        return {
            open() {
                dialog.current.show()
            },
            close() {
                dialog.current.close()
            }
        }
    })

    const handleClick = () => {
        dialog.current.close()
    }

    return createPortal(
        <div>
            <dialog
                open
                ref={dialog}
                className="backdrop:bg-transparent fixed top-0 left-1/3 right-0 bottom-0 m-0 p-0 overflow-y-auto bg-stone-50 md:left-72 w-[40rem] h-full"
            >
                <div className="mt-24 text-center w-2/3 mx-auto">
                    <img
                        className="w-16 h-16 object-contain mx-auto"
                        src={image}
                        alt="No Project"
                    />
                    <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
                    <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
                    <p className="mt-8">
                        <button
                            onClick={handleClick}
                            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                        >
                            Create new project
                        </button>
                    </p>
                </div>
            </dialog>
        </div>,
        document.getElementById('modal-root')
    )
}

export default StartingPageModal