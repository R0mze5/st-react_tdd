import React from "react";
import { useSelector } from "react-redux";
import { courseSelectors } from "../../store/features/course";
import styles from "./CurrentCourse.module.css";

export const CurrentCourse: React.FC = () => {
  const value = useSelector(courseSelectors.getCourseValue);
  return <div className={styles.value}>{value}Rub</div>;
};
