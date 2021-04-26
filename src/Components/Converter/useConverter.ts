import { useState } from "react";
import { rubToUsd, usdToRub } from "../../domain/converter";

type TUseConverter = (
  initialRubValue: number,
  course: number
) => {
  rub: number;
  updateRub: (value: number) => void;
  usd: number;
  updateUsd: (value: number) => void;
};

export const useConverter: TUseConverter = (initialRubValue, course) => {
  const calculatedUsdAmount = rubToUsd(initialRubValue, course);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  const updateValue = (rubValue: number, usdValue: number): void => {
    setRub(rubValue);
    setUsd(usdValue);
  };

  const updateRub = (inputRub: number | string): void => {
    const rubValue = Number(inputRub);
    const usdValue = rubToUsd(rubValue, course);

    updateValue(rubValue, usdValue);
  };

  const updateUsd = (inputUsd: number | string): void => {
    const usdValue = Number(inputUsd);
    const rubValue = usdToRub(usdValue, course);

    updateValue(rubValue, usdValue);
  };

  return { rub, updateRub, usd, updateUsd };
};

export default useConverter;
