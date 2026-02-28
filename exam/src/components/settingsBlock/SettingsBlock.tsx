import { useState } from "react";
import { Button } from "../button/Button";
import { Settings } from "../settings/Settings";

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

  const onClickSaveSettings = (minCountValue: number, maxCountValue: number) => {

  }

  return (
    <div>
      <Settings
        minCount={newMinCount}
        maxCount={newMaxCount}
        setNewMaxCount={setNewMaxCount}
        setNewMinCount={setNewMinCount}
      />
      <div className="wrap_button">
        <Button
          title="set"
          callBack={() => handleSaveSettings(newMinCount, newMaxCount)}
        />
      </div>
    </div>
  );
};
