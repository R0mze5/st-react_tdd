import { useState } from "react";

type TUseConverter = () => {
  rub: number;
  updateRub: (value: number) => void;
  usd: number;
  updateUsd: (value: number) => void;
};

export const useConverter: TUseConverter = () => {
  const [rub, setRub] = useState(100);
  const [usd, setUsd] = useState(1);

  return { rub, updateRub: setRub, usd, updateUsd: setUsd };
};

export default useConverter;
