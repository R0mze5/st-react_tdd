import { useState } from "react";
import { rubToUsd } from "../../domain/converter";

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

  const updateRub = (rubValue: number) => {
    setRub(rubValue);

    const usdValue = rubToUsd(rubValue, course);
    setUsd(usdValue);
  };

  return { rub, updateRub, usd, updateUsd: setUsd };
};

export default useConverter;
