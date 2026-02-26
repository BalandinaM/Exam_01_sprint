import { Button } from "../button/Button"
import { Settings } from "../settings/Settings";

export type SettingsBlockProps = {
    count: number;
    maxCount: number;
    handleSettingsClick: () => void;
}

export const SettingsBlock = ({count, maxCount,handleSettingsClick}: SettingsBlockProps) => {
  return (
    <div>
      <Settings count={count} maxCount={maxCount}/>
      <div className="wrap_button">
        <Button title="set" callBack={handleSettingsClick} />
      </div>
    </div>
  );
}
