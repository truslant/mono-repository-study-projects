import { useRef } from "react"

import InputGroup from "./InputGroup"
import ButtonsBar from "./ButtonsBar"

const ProjectDetailsForm = ({ handleProjectAdd, handleProjectSelect }) => {

    const refToTitleInput = useRef()
    const refToDescriptionInput = useRef()
    const refToDateInput = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const title = refToTitleInput.current.value
        const description = refToDescriptionInput.current.value
        const date = refToDateInput.current.value
        handleProjectAdd({ title, description, date })
    }

    return (
        <div className="w-[35rem] mt-16">
            <form
                onSubmit={handleSubmit}
                className="mt-4 text-left">
                <ButtonsBar inputs={{ refToTitleInput, refToDescriptionInput, refToDateInput }} handleProjectSelect={handleProjectSelect} />
                <InputGroup label='title'>
                    <input
                        ref={refToTitleInput}
                        required
                        type="text"

                        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    />
                </InputGroup>
                <InputGroup label='description'>
                    <textarea
                        ref={refToDescriptionInput}
                        required

                        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    />
                </InputGroup>
                <InputGroup label='date'>
                    <input
                        ref={refToDateInput}
                        type="date"
                        required

                        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    />
                </InputGroup>
            </form>
        </div>
    )
}

export default ProjectDetailsForm