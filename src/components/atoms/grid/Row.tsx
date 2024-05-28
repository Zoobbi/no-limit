import { FC, ReactNode } from "react";
import classNames from "classnames";

export const Row: FC<{children: ReactNode, additionalStyles?: string}> = (
  { children, additionalStyles = "" },
) => {
  const styles = classNames("row", additionalStyles);

  return <div className={styles}>{children}</div>;
};
