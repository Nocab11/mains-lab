import React, { JSX } from "react";
import LogoIcon from "@shared/assets/logo.svg";

import styles from "./HeaderContent.module.scss";

const HeaderContent = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <img src={LogoIcon} alt="Logo" />
      <span className={styles.text}>кубики</span>
    </div>
  );
};

export { HeaderContent };
