import {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
function increment () {
    setCounter(prev => prev + 1)
  }

  function decrement () {
    setCounter(prev => prev - 1)
  }
    return (
        <div> 
            <h1>{counter}</h1>


      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;