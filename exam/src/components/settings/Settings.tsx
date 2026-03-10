import { useState } from "react";

export type SettingsProps = {
    minCount: number;
    maxCount: number;
    setNewMaxCount: (value: number) => void
    setNewMinCount: (value: number) => void
}

export const Settings = ({minCount, maxCount, setNewMaxCount, setNewMinCount}: SettingsProps) => {
  const [error, setError] = useState(false);

  const changeMinCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const currentValueInput = Number(e.currentTarget.value)
    if (currentValueInput >= maxCount || currentValueInput < 0) {
      console.log('error!!!  min value');
      setError(true)
    }
    setNewMinCount(Number(e.currentTarget.value));
  };


  const changeMaxCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const currentValueInput = Number(e.currentTarget.value)
    if (currentValueInput <= minCount || currentValueInput < 0) {
      console.log('error!!!  max value');
      setError(true)
    }
    setNewMaxCount(Number(e.currentTarget.value));
  };



  return (
    <div>
      <input style={{ background: error ? 'red' : 'black' }}  type="number" value={minCount} onChange={changeMinCountHandler}/>
      <input style={{ background: error ? 'red' : 'black' }} type="number" value={maxCount} onChange={changeMaxCountHandler}/>
    </div>
  );
};


// Вынести инпут в отдельный компонент, он должен быть универсальным
// ошибки должны быть сои у каждого инпута