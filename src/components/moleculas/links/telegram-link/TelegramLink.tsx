import { FC } from "react";
import classNames from "classnames";

import { SVG_SIZE, SVGIcon } from "@Basket/components/atoms/svg-icon";

export const TelegramLink : FC<{userName: string, isBlack?: boolean, isOriginColor?: boolean}>= ({
  userName, isBlack = false, isOriginColor = false,
}) => {
  const link  =`https://t.me/${userName}`;
  const styles = classNames({ "blackIcon": isBlack, "tgOffIconColor": isOriginColor });

  return (
    <a href={link} target="_blank">
      <SVGIcon
        className={styles}
        width={SVG_SIZE.medium.width}
        height={SVG_SIZE.medium.height}
        src="/telegram.svg"
      />
    </a>
  );
};
