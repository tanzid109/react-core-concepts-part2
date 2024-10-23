
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'



function App() {



  function handleClick() {
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('btn 2 clicked')
  }
  const addFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>

      <Team></Team>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third clicked') }}>Click 3</button>
      <button onClick={() => { addFive(3) }}>Four</button>
    </>
  )
}

export default App
