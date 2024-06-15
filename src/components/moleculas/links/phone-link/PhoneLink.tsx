import { FC } from "react";

import { Paragraph } from "@Basket/components/atoms/paragraph";

export const PhoneLink: FC<{phoneNumber: string}> = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} target="_blank">
      <Paragraph>{phoneNumber}</Paragraph>
    </a>
  );
};
