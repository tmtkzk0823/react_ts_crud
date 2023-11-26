import axios from 'axios'
import './App.css'

export default function App() {
  const onClickFetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <div className="App">
        <button onClick={onClickFetchData}>データ取得</button>
      </div>
    </>
  )
}

