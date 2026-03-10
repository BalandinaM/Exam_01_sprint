import { useState } from "react";
import { Input } from "../input/Input";

export type SettingsProps = {
    minCount: number;
    maxCount: number;
    setNewMaxCount: (value: number) => void
    setNewMinCount: (value: number) => void
}

export const Settings = ({minCount, maxCount, setNewMaxCount, setNewMinCount}: SettingsProps) => {
  const [errorMinValue, setErrorMinValue] = useState(false);
  const [errorMaxValue, setErrorMaxValue] = useState(false);

  const changeMinCountHandler = (value: number) => {
    setErrorMinValue(false);
    if (value >= maxCount || value < 0) {
      console.log('error!!!  min value');
      setErrorMinValue(true)
    }
    setNewMinCount(value);
  };

   const changeMaxCountHandler = (value: number) => {
    setErrorMaxValue(false);
    if (value <= minCount || value < 0) {
      console.log('error!!!  max value');
      setErrorMaxValue(true)
    }
    setNewMaxCount(value);
  };


  return (
    <div>
      <Input value={minCount} setNewValue={changeMinCountHandler} error={errorMinValue}/>
      <Input value={maxCount} setNewValue={changeMaxCountHandler} error={errorMaxValue}/>
    </div>
  );
};
