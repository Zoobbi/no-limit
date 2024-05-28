import { FC } from "react";

import { SVGIcon, SVG_SIZE } from "@Basket/components/atoms/svg-icon";

import type { SocialMediaLinks } from "../types";

export const WhatsAppLink: FC<SocialMediaLinks> = ({ phoneNumber }) => {
  const link  =`https://wa.me/${phoneNumber.replace(/[\+\-\(\)]/g, "")}`;

  return (
    <a href={link}>
      <SVGIcon
        width={SVG_SIZE.medium.width}
        height={SVG_SIZE.medium.height}
        src="/whatsapp.svg"
      />
    </a>
  );
};
