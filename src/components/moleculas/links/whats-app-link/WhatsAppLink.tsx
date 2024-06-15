import { FC } from "react";
import classNames from "classnames";

import { SVGIcon, SVG_SIZE } from "@Basket/components/atoms/svg-icon";

import type { SocialMediaLinks } from "../types";

export const WhatsAppLink: FC<SocialMediaLinks> = ({ phoneNumber, isBlack, isOriginColor = false }) => {
  const link  =`https://wa.me/${phoneNumber.replace(/[\+\-\(\)]/g, "")}`;
  const styles = classNames({ "blackIcon": isBlack, "whatsappOffIconColor": isOriginColor });

  return (
    <a href={link} target="_blank">
      <SVGIcon
        className={styles}
        width={SVG_SIZE.medium.width}
        height={SVG_SIZE.medium.height}
        src="/whatsapp.svg"
      />
    </a>
  );
};
