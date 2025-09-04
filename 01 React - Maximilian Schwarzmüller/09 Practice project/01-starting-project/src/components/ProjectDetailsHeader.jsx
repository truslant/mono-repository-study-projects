const ProjectDetailsHeader = ({ title, date, description, handleProjectDelete }) => {

    return (
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
                    <p className="mb-4 text-stone-400">{date}</p>
                </div>
                <button
                    onClick={handleProjectDelete}
                    className="text-stone-700 hover:text-red-500">Delete</button>
            </div>
            <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
        </header>
    )
}
export default ProjectDetailsHeader