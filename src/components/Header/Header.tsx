import React from "react";

import styles from "./Header.module.css";

interface IHeaderProps {
  asdf?: any;
}

export const Header: React.FC<IHeaderProps> = (props) => {
  return <header className={styles.header}>USD course:</header>;
};
