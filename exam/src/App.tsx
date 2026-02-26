import { useState } from 'react'
import './App.css'
import { Counter } from './components/counter/Counter';
import { Button } from './components/button/Button';

const maxCount = 5;

function App() {
  const [count, setCount] = useState(0);
  
  const incCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="wrap_counter">
      <Counter count={count} maxCount={maxCount}/>
      <div className="wrap_button">
        <Button title="inc" disabled={count === maxCount} callBack={incCount}/>
        <Button title="reset" disabled={count === 0} callBack={resetCount}/>
      </div>
    </div>
  );
}

export default App;
