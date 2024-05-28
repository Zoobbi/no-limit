import { FC } from "react";

import { SVG_SIZE, SVGIcon } from "@Basket/components/atoms/svg-icon";

import type { SocialMediaLinks } from "../types";
export const TelegramLink : FC<{userName: string}>= ({ userName }) => {
  const link  =`https://t.me/${userName}`;

  return (
    <a href={link}>
      <SVGIcon
        width={SVG_SIZE.medium.width}
        height={SVG_SIZE.medium.height}
        src="/telegram.svg"
      />
    </a>
  );
};
