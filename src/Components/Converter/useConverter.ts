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

  return { rub, updateRub: setRub, usd, updateUsd: setUsd };
};

export default useConverter;
