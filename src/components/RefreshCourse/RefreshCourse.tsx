import React from "react";

import styles from "./RefreshCourse.module.css";

export const RefreshCourse: React.FC = () => {
  return (
    <button className={styles.button} type="button" onClick={console.log}>
      refresh course
    </button>
  );
};