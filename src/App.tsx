import axios from 'axios'
import './App.css'
import { useState } from 'react'
import { Todo } from './Todo'

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([])

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="App">
        <button onClick={onClickFetchData}>データ取得</button>
        {todos.map((todo) => (
        < Todo title={todo.title} userid={todo.userId} />
        ))}
      </div>
    </>
  )
}

