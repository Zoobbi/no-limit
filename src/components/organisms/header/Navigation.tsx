import { FC } from "react";

import { NavigationLink } from "@Basket/components/moleculas/links";

import styles from "./Header.module.scss";

interface NavigationProps {
  data: Array<{
    link: string;
    id: string;
    text: string;
  }>
}

export const Navigation: FC<NavigationProps> = ({ data }) => {
  const links = data.map((link, index) => (
    <NavigationLink
      key={`${link.link}${index}`}
      link={link.link}
      text={link.text}
    />
  ));

  return <div className={styles.navigationWrapper}>{links}</div>;
};
