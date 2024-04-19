import { JSX } from "react";

import LogoutIcon from "@assets/logout.svg";

import styles from "./Logout.module.scss";

const Logout = (): JSX.Element => {
  return <img src={LogoutIcon} alt="avatar" className={styles.logout} />;
};

export { Logout };
