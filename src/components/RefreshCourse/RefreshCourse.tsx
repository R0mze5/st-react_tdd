import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseSelectors } from "../../store/features/course";

import styles from "./RefreshCourse.module.css";

export const RefreshCourse: React.FC = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(courseSelectors.getCourseLoadingStatus);

  useEffect(() => {
    if (loadingStatus === "success") {
      console.log("reset status");
    }
  }, [loadingStatus]);

  // console.log(loadingStatus);

  return (
    <>
      <button
        disabled={loadingStatus === "loading"}
        className={styles.button}
        type="button"
        onClick={console.log}
      >
        {loadingStatus === "loading" ? "refreshing..." : "refresh course"}
      </button>
      {loadingStatus === "failure" && <p>something went wrong</p>}
    </>
  );
};
