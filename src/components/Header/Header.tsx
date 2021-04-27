import React from "react";
import { CurrentCourse } from "../CurrentCourse";
import { RefreshCourse } from "../RefreshCourse";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      USD course: <CurrentCourse /> <RefreshCourse />
    </header>
  );
};
