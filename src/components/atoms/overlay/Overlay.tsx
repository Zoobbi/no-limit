import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Overlay.module.scss";

export const OPACITY_VALUES = {
  light: 0.3,
  medium: 0.5,
  large: 0.7,
};

export type Opacity = typeof OPACITY_VALUES[keyof typeof OPACITY_VALUES];

interface OverlayProps {
  children: ReactNode;
  opacity?: Opacity;
}

const Overlay: FC<OverlayProps> = (
  { children,
    opacity = OPACITY_VALUES.medium,
  }) => {
  const overlayClasses = classNames(styles.overlay, {
    [styles["opacity-03"]]: opacity === OPACITY_VALUES.light,
    [styles["opacity-05"]]: opacity === OPACITY_VALUES.medium,
    [styles["opacity-07"]]: opacity === OPACITY_VALUES.large,
  });

  return <div className={overlayClasses}>{children}</div>;
};

export default Overlay;
