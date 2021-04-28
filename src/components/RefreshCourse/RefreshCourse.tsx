import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseActions, courseSelectors } from "../../store/features/course";
import { fetchTodayCourse } from "../../store/features/course/asyncActions";

import styles from "./RefreshCourse.module.css";

export const RefreshCourse: React.FC = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(courseSelectors.getCourseLoadingStatus);

  useEffect(() => {
    if (loadingStatus === "success") {
      dispatch(courseActions.courseResetStatusAction());
    }
  }, [loadingStatus]);

  return (
    <>
      <button
        disabled={loadingStatus === "loading"}
        className={styles.button}
        type="button"
        onClick={() => dispatch(fetchTodayCourse())}
      >
        {loadingStatus === "loading" ? "refreshing..." : "refresh course"}
      </button>
      {loadingStatus === "failure" && <p>something went wrong</p>}
    </>
  );
};
