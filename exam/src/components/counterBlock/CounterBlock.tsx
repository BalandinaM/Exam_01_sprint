import { Button } from "../button/Button";
import { Counter } from "../counter/Counter";

export type CounterBlockProps = {
  count: number;
  maxCount: number;
  incCount: () => void;
  resetCount: () => void;
  handleSettingsClick: () => void;
};

export const CounterBlock = ({
  count,
  maxCount,
  incCount,
  resetCount,
  handleSettingsClick,
}: CounterBlockProps) => {
  return (
    <>
      <Counter count={count} maxCount={maxCount} />
      <div className="wrap_button">
        <Button title="inc" disabled={count === maxCount} callBack={incCount} />
        <Button title="reset" disabled={count === 0} callBack={resetCount} />
        <Button title="set" callBack={handleSettingsClick} />
      </div>
    </>
  );
};
