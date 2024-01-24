// ライブラリ
import axios from 'axios'

import './App.css'

// react
import { useState } from 'react'

//types
import { TodoType } from './types/todo'
import { User } from './types/user'
import { ApiUsers } from './apis/types/userCard'

//componnets
import { UserProfile } from './UserProfile'
import { UserCard } from './components/UserCard'
import { Todo } from './Todo'
import { Text } from './Text'
import { UserStatus } from './types/userProfile'

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const [users, setUsers] = useState<Array<UserStatus>>([])

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

  const onClickFetchUser = () => {
    axios.get<Array<ApiUsers>>('https://jsonplaceholder.typicode.com/users')
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
        <button onClick={onClickFetchUser}>データ取得</button>
        <UserCard user={userCard}/>
      </div>
    </>
  )
}

