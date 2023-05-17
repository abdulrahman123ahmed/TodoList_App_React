import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoForm() {
    const [todoList , setTodoList] = useState([])
    const [value, setValue] = useState("")
    const AddTask = (e) => {
        e.preventDefault();
        const task = {
            id: todoList.length + 1,
            taskName: value,
            completed: false
        }
        setTodoList([...todoList, task])
        console.log(task)
        setValue("")
    }
    const deleteTask = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id))
    }
    const completedTask = (id) => {
        setTodoList(
            todoList.map(task => {
                if (task.id === id) {
                    return {...task, completed: true}
                } else {
                    return task
                }
            })
        )
    }
    return (
        <div className='todo-form'>
            <form className='flex justify-center my-10'>
                <input className='w-2/4 p-4 border-0 outline-0 rounded-xl mx-3' 
                    value={value}
                    type="text" 
                    placeholder='What Is The Task Today ?' 
                    onChange={(e) => setValue(e.target.value)} />
                <button 
                    type='submit' 
                    className=' bg-cyan-600 p-6 text-xl text-white rounded-xl'
                    onClick={AddTask}>Add Task</button>
            </form>
            <div className='list'>
                {
                    todoList.map((task, i) => {
                        return (
                            <div 
                                key={i} className='todo mb-6 text-2xl max-w-4xl p-4 rounded-xl mx-auto flex justify-between bg-cyan-600 text-white'>
                                <h1 style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.taskName}</h1>
                                <div className='icons cursor-pointer'>
                                    <FontAwesomeIcon className='mr-6' onClick={() => completedTask(task.id)} icon={faCircleCheck} />
                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoForm