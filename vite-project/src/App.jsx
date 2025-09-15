import {useState} from 'react'
import Counter from './components/Counter/Counter'
import './App.css'
import ClassCounter from './components/Counter/ClassCounter'
import PostItem from './components/PostItem/PostItem'

function App() {
  const [value, setValue] = useState('Текст в  инпуте')
  return (
    <div className="App">
      <PostItem post={{id: 1, title: " JavaScript", body: "description"}}/>
      <PostItem post={{id: 2, title: " TypeScript", body: "description"}}/>
      <PostItem post={{id: 3, title: " Redux", body: "description"}}/>
      <PostItem post={{id: 4, title: " React", body: "description"}}/>
     </div>
  )
}

export default App
