const SideMenuProjectSelectButtons = ({ task, isActive, handleProjectSelect, taskIndex }) => {

    const handleClick = () => {
        handleProjectSelect(taskIndex)
    }

    return (
        <li >
            <button
                onClick={handleClick}
                className={`w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${isActive ? 'bg-stone-800 text-stone-200' : 'text-stone-50'} `}
            >
                {task}
            </button>
        </li>
    )
}

export default SideMenuProjectSelectButtons