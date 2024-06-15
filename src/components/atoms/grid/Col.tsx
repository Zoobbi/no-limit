import { FC, ReactNode } from "react";
import classNames from "classnames";

import { getColClasses } from "@Basket/utils/utils";

interface ColProps {
  gridValues?: {
    lg: number;
    md: number;
    sm: number;
  },
  children: ReactNode,
  additionalStyles?: string;
}

export const Col: FC<ColProps> = (
  { children,
    gridValues = {
      lg: 12,
      md: 12,
      sm: 12,
    },
    additionalStyles = "",
  },
) => {
  const colClasses = getColClasses(gridValues);
  const classes = classNames(additionalStyles, colClasses);

  return <div className={classes}>{children}</div>;
};
