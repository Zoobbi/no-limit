import { FC } from "react";

import styles from "./NavLink.module.scss";

export const NavigationLink: FC<{
  link: string, text: string; onClick?: () => void;
}> = ({ link, text, onClick }) => {
  return (
    <a onClick={onClick} className={styles.navLink} href={link}>
      {text}
    </a>
  );
};
