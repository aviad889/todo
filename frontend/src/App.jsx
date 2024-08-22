import { useContext, useEffect, useState } from 'react';
import TodoContext from './context/todos';
import Header from './features/layout/Header';
import TodoList from './features/todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useGetUsersQuery } from './slices/userApiSlice';

function App() {
  const {data, isLoading, error} = useGetUsersQuery()
  const {setTodoArr} = useContext(TodoContext)
  // const context = useContext(TodoContext);

  const usersArr = data

  useEffect(()=>{
    if(localStorage.getItem("todoArr"))
      setTodoArr(JSON.parse(localStorage.getItem("todoArr")))
  },[])
  return (
    <div className="App">
      <Header/>
      <div>
        {usersArr?.map(user=><h2>{user.name} || {user.email}</h2>)}
      </div>
      <main className='container'>
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
