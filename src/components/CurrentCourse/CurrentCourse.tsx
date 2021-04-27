import React from "react";
import { useSelector } from "react-redux";
import { selectorCourse } from "../../store/features/course/slice";
import styles from "./CurrentCourse.module.css";

export const CurrentCourse: React.FC = () => {
  const value = useSelector(selectorCourse);
  return <div className={styles.value}>${value}Rub</div>;
};
