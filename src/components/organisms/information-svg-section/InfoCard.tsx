import { FC } from "react";
import classNames from "classnames";

import { SVGIcon } from "@Basket/components/atoms/svg-icon";
import { Paragraph } from "@Basket/components/atoms/paragraph";

import styles from "./InfoSVGSection.module.scss";

export const InfoCard: FC<{text: string, icon: string, isMarginBottom?: boolean}> = ({
  text, icon,isMarginBottom = false,
}) => {
  const classes = classNames(styles.infoCardWrapper, { [styles.infoCardOffset]: isMarginBottom });

  return (
    <div className={classes}>
      <div className={styles.cardWrap}>
        <SVGIcon
          src={icon}
          className={styles.cardWrap}
        />
      </div>
      <Paragraph isTextCenter>{text}</Paragraph>
    </div>
  );
};
