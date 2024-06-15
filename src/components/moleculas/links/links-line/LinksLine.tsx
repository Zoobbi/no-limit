import { FC } from "react";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { PhoneLink, TelegramLink, WhatsAppLink } from "@Basket/components/moleculas/links";

interface LinksLineProps {
  userName: string;
  phoneNumber: string;
}

export const LinksLine: FC<LinksLineProps> = ({ userName,phoneNumber }) => {
  return (
    <UniversalWrapper isFlex justifyContent="space-between" alignItems="center" >
      <TelegramLink userName={userName} isOriginColor/>
      <PhoneLink phoneNumber={phoneNumber} />
      <WhatsAppLink phoneNumber={phoneNumber} isOriginColor/>
    </UniversalWrapper>
  );
};
