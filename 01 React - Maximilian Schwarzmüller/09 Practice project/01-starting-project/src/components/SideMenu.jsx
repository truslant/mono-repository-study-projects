import SideMenuProjectSelectButtons from "./SideMenuProjectSelectButtons"

const SideMenu = ({ tasks, handleProjectSelect }) => {

    const projectTitles = tasks.map((task, index) => {
        return (
            <SideMenuProjectSelectButtons
                key={index}
                task={task.title}
                taskIndex={index}
                handleProjectSelect={handleProjectSelect}
                isActive={task.isActive}
            />
        )
    })

    const handleClick = () => {
        handleProjectSelect(-1)
    }


    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">

            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>

            <button
                onClick={handleClick}
                className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add project</button>

            <ul className="mt-8">
                {projectTitles}
            </ul>

        </aside>
    )
}

export default SideMenu
