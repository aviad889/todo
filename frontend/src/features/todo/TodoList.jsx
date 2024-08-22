import React, { useContext } from 'react'
import {Accordion} from 'react-bootstrap'
import TodoItem from './TodoItem'
import TodoContext from '../../context/todos'
import './todo.css'
// import {useGetTodosQuery} from './../../slices/toApiSlice'

const TodoList = () => {
  const {todoArr} = useContext(TodoContext)
  // const {data, isLoading, error} = useGetTodosQuery
  // const todoArr = data
  return ( 
    <Accordion className='w-50'>
      {todoArr?.map((item)=>{return (
        <TodoItem 
          key={item._id} 
          _id={item._id} 
          title={item.title} 
          deadlineDate = {item.deadlineDate} 
          description={item.description} 
          taskUrgency={item.taskUrgency}  
          isCompleted={item.isCompleted}
        />
      )})}
    </Accordion>
  )
}

export default TodoList