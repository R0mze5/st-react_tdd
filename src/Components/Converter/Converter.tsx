import React from "react";
import styles from "./Converter.module.css";
import { useConverter } from "./useConverter";

export const Converter: React.FC = () => {
  const { rub, updateRub, usd, updateUsd } = useConverter(11, 12);
  return (
    <form className={styles.converter}>
      <label htmlFor="rubId">
        Sum in rubbles
        <input
          type="number"
          id="rubId"
          min={0}
          step={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateRub(e.target.value)
          }
          name="rub"
          value={rub}
        />
      </label>
      <label htmlFor="usdId">
        Sum in dollars
        <input
          id="usdId"
          type="number"
          min={0}
          step={1}
          name="usd"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateUsd(e.target.value)
          }
          value={usd}
        />
      </label>
    </form>
  );
};
