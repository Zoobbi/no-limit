import { FC, ReactNode } from "react";

import styles from "./Headers.module.scss";

type HeaderLevel =  "h3" | "h4" ;

export const Headers: FC<{headerLevel: HeaderLevel, children: ReactNode}> = ({ headerLevel, children }) => {
  if (headerLevel === "h3") {
    return <h3 className={styles.headerLevel3}>{children}</h3>;
  }

  return <h4 className={styles.headerLevel4}>{children}</h4>;
};
