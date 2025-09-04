import { useRef, useState } from "react";

import SideMenu from "./components/SideMenu";
import ProjectDetailsForm from "./components/ProjectDetailsForm";
import ProjectDetailsAndTasks from "./components/ProjectDetailsAndTasks";
import StartingPageModal from "./components/StartingPageModal";

const initialState =
  [
    {
      title: 'Learn React',
      description: 'Learn React from the group up',
      date: '2024-12-29',
      tasks: [
        "Practice, Practice, Practice",
        "Learn advnaced concepts"
      ],
      isActive: false,
    },
    {
      title: 'Master React',
      description: 'Muster React by every day exposure of yourself',
      date: '2025-01-01',
      tasks: [
        "Keep looking for new and comprehensive ways to solve existing problems",
        "Break complex concepts into actionable simple steps"
      ],
      isActive: false,
    }
  ]


function App() {
  const [tasks, setTasks] = useState(initialState)
  const refToStartPageDialog = useRef()


  const handleProjectSelect = (projectIndex) => {
    refToStartPageDialog.current.close();
    setTasks(prevTasks => {
      return (
        prevTasks.map((task, index) => {
          if (projectIndex !== index) {
            return {
              ...task,
              tasks: [...task.tasks],
              isActive: false
            }
          } else {
            return {
              ...task,
              tasks: [...task.tasks],
              isActive: true
            }
          }
        })
      )
    })
  }

  const handleTodoDelete = (todoIndex) => {
    setTasks(prevTasks => {
      return (
        prevTasks.map((prevTask) => {
          if (!prevTask.isActive) {
            return {
              ...prevTask,
              tasks: [...prevTask.tasks]
            }
          } else {
            const newTasks = prevTask.tasks.filter((prevTodo, prevTodoIndex) => { return (prevTodoIndex !== todoIndex) })
            return {
              ...prevTask,
              tasks: newTasks
            }
          }
        }))
    })
  }

  const handleTaskAdd = (newTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((prevTask) => {
        if (!prevTask.isActive) {
          return {
            ...prevTask,
            tasks: [...prevTask.tasks]
          }
        } else {
          return {
            ...prevTask,
            tasks: [...prevTask.tasks, newTask]
          }
        }
      })
    })
  }

  const handleProjectDelete = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((prevTask) => {
        return !prevTask.isActive
      })
    })
    refToStartPageDialog.current.open()
  }

  const handleProjectAdd = ({ title, description, date }) => {
    setTasks(prevTasks => {
      const newTasksSet = prevTasks.map(prevTask => {
        return {
          ...prevTask,
          tasks: [...prevTask.tasks],
          isActive: false
        }
      })
      newTasksSet.push({ title, description, date, tasks: [], isActive: true })
      return newTasksSet
    })
  }

  const activeTaskIndex = tasks.findIndex(task => task.isActive)

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideMenu tasks={tasks} handleProjectSelect={handleProjectSelect} />
      <StartingPageModal reference={refToStartPageDialog} />
      {activeTaskIndex < 0 &&
        < ProjectDetailsForm
          handleProjectAdd={handleProjectAdd}
        />}
      {activeTaskIndex > -1 &&
        < ProjectDetailsAndTasks
          project={tasks[activeTaskIndex]}
          handleTodoDelete={handleTodoDelete}
          handleTaskAdd={handleTaskAdd}
          handleProjectDelete={handleProjectDelete}
        />}
    </main>
  );
}

export default App;
