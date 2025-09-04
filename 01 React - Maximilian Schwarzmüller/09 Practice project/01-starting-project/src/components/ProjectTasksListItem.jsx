const ProjectTasksListItem = ({ todo, handleTodoDelete, todoIndex }) => {

    const handleClick = () => {
        handleTodoDelete(todoIndex)
    }

    return (
        <li className="flex justify-between">
            <p className="text-stone-800 my-4">{todo}</p>
            <button
                onClick={handleClick}
                className="text-stone-700 hover:text-red-500"
            >Clear</button>
        </li>

    )
}

export default ProjectTasksListItem