export type InputProps = {
    value: number;
    setNewValue: (value: number) => void;
    error: boolean;
}

export const Input = ({value, setNewValue, error}: InputProps) => {
  
    //const [error, setError] = useState(false);
    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(Number(e.currentTarget.value))
    }

  return (
    
      <input style={{ background: error ? 'red' : 'black' }} type="number" value={value} onChange={changeValueHandler}/>
  );
};


// Вынести инпут в отдельный компонент, он должен быть универсальным
// ошибки должны быть сои у каждого инпута
