import { FC } from "react";

import { Paragraph } from "@Basket/components/atoms/paragraph";

import styles from "./List.module.scss";

export const List: FC<{listData: Array<string>}> = ({ listData }) => {
  const listItems = listData
    .map((listItem, index) =>
      (
        <li key={`${index}${listItem}`}>
          <div style={{ backgroundImage: "url(ball-of-basketball.svg)" }} className={styles.listIcon} />
          <Paragraph>{listItem}</Paragraph>
        </li>));

  return <ul className={styles.list}>{listItems}</ul>;
};
