import { useEffect, useState } from "react";
import { rubToUsd, usdToRub } from "../../domain/converter";

type TUseConverter = (
  initialRubValue: number,
  course: number
) => {
  rub: number;
  updateRub: (value: number | string) => void;
  usd: number;
  updateUsd: (value: number | string) => void;
};

export const useConverter: TUseConverter = (initialRubValue, course) => {
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(rubToUsd(initialRubValue, course));

  useEffect(() => {
    setRub(initialRubValue);
    setUsd(rubToUsd(initialRubValue, course));
  }, [initialRubValue, course]);

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
