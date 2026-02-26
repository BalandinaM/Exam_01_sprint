import { useState } from 'react'
import './App.css'
import { CounterBlock } from './components/counterBlock/CounterBlock';
import { SettingsBlock } from './components/settingsBlock/SettingsBlock';

const maxCount = 5;

function App() {
  const [count, setCount] = useState(0);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  
  const incCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const handleSettingsClick = () => {
    setIsOpenSettings(prev => !prev)
  }

  return (
    <div className="wrap_counter">
      {!isOpenSettings ?
      (
        <CounterBlock count={count} maxCount={maxCount} incCount={incCount} resetCount={resetCount} handleSettingsClick={handleSettingsClick}/>
      ) : (
        <SettingsBlock handleSettingsClick={handleSettingsClick} count={count} maxCount={maxCount} />
      )
    }
    </div>
  );
}

export default App;
