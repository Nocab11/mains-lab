import { JSX } from "react";

import AvatarIcon from "@assets/avatar.svg";

import styles from "./Avatar.module.scss";

const Avatar = (): JSX.Element => {
  return <img src={AvatarIcon} alt="avatar" className={styles.avatar} />;
};

export { Avatar };
