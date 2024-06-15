import { FC } from "react";

import { SUBSCRIBE_BUTTON_TEXT } from "@Basket/data/content";

import Button from "../../atoms/button/Button";

const SubscribeButton: FC<{channelId: string}> = ({ channelId }) =>
{
  const href = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button >
        {SUBSCRIBE_BUTTON_TEXT}
      </Button>
    </a>
  );
};


export default SubscribeButton;
