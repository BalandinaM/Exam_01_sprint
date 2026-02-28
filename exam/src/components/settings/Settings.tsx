
export type SettingsProps = {
    minCount: number;
    maxCount: number;
    setNewMaxCount: (value: number) => void
    setNewMinCount: (value: number) => void
}

export const Settings = ({minCount, maxCount, setNewMaxCount, setNewMinCount}: SettingsProps) => {

  const changeMinCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValueInput = Number(e.currentTarget.value)
    if (currentValueInput >= maxCount) {
      console.log('error!!!  min value');
      
    }
    setNewMinCount(Number(e.currentTarget.value));
  };


  const changeMaxCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValueInput = Number(e.currentTarget.value)
    if (currentValueInput <= minCount) {
      console.log('error!!!  max value');
      
    }
    setNewMaxCount(Number(e.currentTarget.value));
  };

 

  return (
    <div>
      <input type="number" value={minCount} onChange={changeMinCountHandler}/>
      <input type="number" value={maxCount} onChange={changeMaxCountHandler}/>
    </div>
  );
};
