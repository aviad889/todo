import React, {useContext, useState } from 'react'
import TodoContext from '../../context/todos'
import EditTask from './EditTask'
import {Accordion} from 'react-bootstrap'

const TodoItem = ({_id, title, deadlineDate, description, taskUrgency, isCompleted}) => {
const [editMode, setEditMode] = useState(false)
const [itemIsCompleted, setItemIsCompleted] = useState(isCompleted)
  const {deleteTask, editTask} = useContext(TodoContext)

  const hadleDeleteClick=(e)=>{
    deleteTask(_id)
  }
  const handleToggleEditForm = ()=>{
    setEditMode(!editMode)
  }
  const handleIsCompleted = (e)=>{
    setItemIsCompleted(e.target.checked)
    isCompleted = e.target.checked
    editTask({_id, title, deadlineDate, description, taskUrgency, isCompleted})
  }

  return (
    <Accordion.Item eventKey="_id">
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        <div>
          <h4>{deadlineDate}</h4>
          <p>{description}<br/>Urgency:{taskUrgency}</p>
          <input type='checkbox' id={`taskDone${_id}`} checked={itemIsCompleted} onChange={handleIsCompleted}/>
          <label htmlFor={`taskDone${_id}`}>Task Done</label>

          <button onClick={handleToggleEditForm}>Edit</button>
          {(editMode)?(<EditTask task={{_id, title, deadlineDate, description, taskUrgency, isCompleted}} handleToggleEditForm={handleToggleEditForm}/>):[]}
          <button onClick={hadleDeleteClick}>Delete</button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default TodoItem