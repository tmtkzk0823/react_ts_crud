// ライブラリ
import axios from 'axios'

import './App.css'

// react
import { useState } from 'react'

//types
import { TodoType } from './types/todo'
import { User } from './types/user'

//componnets
import { UserProfile } from './UserProfile'
import { UserCard } from './components/UserCard'
import { Todo } from './Todo'
import { Text } from './Text'

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([])

  const user : User = {
    name: 'tommy',
    //hobbies: ['バドミントン', 'キャンプ']
  }

   const userCard = {
    id: 1,
    name: 'tommy',
    email: 'example.com',
    address: 'tokyo'
   }
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
        <UserProfile user = {user}/>
        <Text color='red' fontSize='20px'/>
        <button onClick={onClickFetchData}>データ取得</button>
        {todos.map((todo) => (
        < Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
        ))}
        <UserCard user={userCard}/>
      </div>
    </>
  )
}

