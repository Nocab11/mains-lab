import { JSX } from "react";

import BellIcon from "@shared/assets/bell.svg";

import styles from "./Notification.module.scss";

const Notification = (): JSX.Element => {
  return (
    <div className={styles.notification}>
      <img src={BellIcon} alt="avatar" />
      <span className={styles.notificationValue}>11</span>
    </div>
  );
};

export { Notification };
