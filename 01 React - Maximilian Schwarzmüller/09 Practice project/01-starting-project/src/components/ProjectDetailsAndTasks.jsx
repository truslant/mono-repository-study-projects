import ProjectDetailsHeader from "./ProjectDetailsHeader"
import ProjectTasksInput from "./ProjectTasksInput"
import ProjectTasksListItem from "./ProjectTasksListItem"

import { dateConversion } from "../utilities/utilities"

const ProjectDetailsAndTasks = ({ project, handleTodoDelete, handleTaskAdd, handleProjectDelete }) => {

    let projectTodos;
    if (project?.tasks.length > 0) {
        projectTodos = project.tasks.map((todo, index) => {
            return (<ProjectTasksListItem
                key={index}
                todo={todo}
                todoIndex={index}
                handleTodoDelete={handleTodoDelete}
            />)
        })
    } else {
        projectTodos = (<li className="flex justify-between">
            <p className="text-stone-800 my-4">No todos for the project...</p>
        </li>)
    }

    return (
        <div className="w-[35rem] mt-16">

            <ProjectDetailsHeader
                title={project.title}
                date={dateConversion(project.date)}
                description={project.description}
                handleProjectDelete={handleProjectDelete}
            />

            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

            <ProjectTasksInput handleTaskAdd={handleTaskAdd} />
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {projectTodos}
            </ul>
        </div>
    )
}

export default ProjectDetailsAndTasks