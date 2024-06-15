import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, isActive = false, onClick }) => {
  const buttonClasses = classNames(styles.button, {
    [styles.active]: isActive,
  });

  return <button onClick={onClick} type="button" className={buttonClasses}>{children}</button>;
};

export default Button;
