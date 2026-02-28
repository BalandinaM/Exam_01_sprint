import { useEffect, useState } from 'react'
import './App.css'
import { CounterBlock } from './components/counterBlock/CounterBlock';
import { SettingsBlock } from './components/settingsBlock/SettingsBlock';


function App() {
  const [count, setCount] = useState(() => {
    const countAsString = localStorage.getItem("counterValue");
    if (countAsString) {
      return JSON.parse(countAsString);
    }
    return 0;
  });
  const [maxCount, setMaxCount] = useState(() => {
    const countAsString = localStorage.getItem("maxCounterValue");
    if (countAsString) {
      return JSON.parse(countAsString);
    }
    return 5;
  })
  const [minCount, setMinCount] = useState(() => {
    const countAsString = localStorage.getItem("minCounterValue");
    if (countAsString) {
      return JSON.parse(countAsString);
    }
    return 0;
  })
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  useEffect(()=>{
    localStorage.setItem("counterValue", JSON.stringify(count))
  }, [count])

  useEffect(()=>{
    localStorage.setItem("maxCounterValue", JSON.stringify(maxCount))
  }, [maxCount])

  useEffect(()=>{
    localStorage.setItem("minCounterValue", JSON.stringify(minCount))
  }, [minCount])
  
  const incCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(minCount)
  }

  const toggleSettingsClick = () => {
    setIsOpenSettings(prev => !prev)
  }

  const handleSaveSettings = (minCountValue: number, maxCountValue: number) => {
    setMinCount(minCountValue)
    setMaxCount(maxCountValue)
    setCount(minCountValue)
    setIsOpenSettings(prev => !prev)
  }

  return (
    <div className="wrap_counter">
      {!isOpenSettings ? (
        <CounterBlock
          count={count}
          minCount={minCount}
          maxCount={maxCount}
          incCount={incCount}
          resetCount={resetCount}
          toggleSettingsClick={toggleSettingsClick}
        />
      ) : (
        <SettingsBlock
          minCount={minCount}
          maxCount={maxCount}
          handleSaveSettings={handleSaveSettings}
        />
      )}
    </div>
  );
}

export default App;
