import React, { useState } from "react";
import styles from "./Converter.module.css";

export const Converter: React.FC = () => {
  const [rub, setRub] = useState(100);
  const [usd, setUsd] = useState(1);
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
            setRub(+e.target.value)
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
            setUsd(+e.target.value)
          }
          value={usd}
        />
      </label>
    </form>
  );
};
