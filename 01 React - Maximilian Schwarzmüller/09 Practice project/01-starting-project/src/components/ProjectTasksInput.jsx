import { useRef } from "react"

const ProjectTasksInput = ({ handleTaskAdd }) => {
    const refToProjectTaskInput = useRef()

    const handleClick = () => {
        handleTaskAdd(refToProjectTaskInput.current.value)
        refToProjectTaskInput.current.value = ''
    }

    return (
        <div className="flex items-center gap-4 mb-4">
            <input
                ref={refToProjectTaskInput}
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                placeholder="Add Task"
            />
            <button onClick={handleClick} className="text-stone-700 hover:text-red-500">Add</button>
        </div>
    )
}

export default ProjectTasksInput