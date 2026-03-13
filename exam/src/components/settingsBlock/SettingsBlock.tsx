import { useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

export type SettingsBlockProps = {
  minCount: number;
  maxCount: number;
  handleSaveSettings: (minCountValue: number, maxCountValue: number) => void;
};

export const SettingsBlock = ({
  minCount,
  maxCount,
  handleSaveSettings,
}: SettingsBlockProps) => {
  const [newMaxCount, setNewMaxCount] = useState(maxCount);
  const [newMinCount, setNewMinCount] = useState(minCount);

  const errorMinValue = newMinCount >= newMaxCount || newMinCount < 0;
  const errorMaxValue = newMaxCount <= newMinCount || newMaxCount < 0;

  const changeMinCountHandler = (value: number) => {
    setNewMinCount(value);
  };

   const changeMaxCountHandler = (value: number) => {
    setNewMaxCount(value);
  };


  return (
    <div>
      <div className="wrap_input">
        <Input
          value={newMinCount}
          setNewValue={changeMinCountHandler}
          error={errorMinValue}
        />
        <Input
          value={newMaxCount}
          setNewValue={changeMaxCountHandler}
          error={errorMaxValue}
        />
      </div>
      <div className="wrap_button">
        <Button
          title="set"
          callBack={() => handleSaveSettings(newMinCount, newMaxCount)}
          disabled={errorMinValue || errorMaxValue}
        />
      </div>
    </div>
  );
};
