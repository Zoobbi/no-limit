import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface ParagraphProps {
  children: ReactNode;
  isTextCenter?: boolean;
  isHalfSize?: boolean;
}

export const Paragraph = ({ children, isTextCenter = false, isHalfSize = false }: ParagraphProps) => {
  const paragraphClasses = classNames(styles.paragraph, {
    ["textCenter"]: isTextCenter,
    [styles.halfSize]: isHalfSize,
  });

  return <p className={paragraphClasses}>{children}</p>;
};
