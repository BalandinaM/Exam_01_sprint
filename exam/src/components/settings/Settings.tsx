export type SettingsProps = {
    count: number;
    maxCount: number;
}

export const Settings = ({count, maxCount}: SettingsProps) => {
  return (
    <div>
      <input type="number" value={count}/>
      <input type="number" value={maxCount}/>
    </div>
  );
};
