import React from "react";

import { PriceSection } from "@Basket/components/organisms/price-section";
import {
  BUTTON_ACTION_TEXT,
  NAVIGATION_MENU,
  OFFER_HEADER,
  OFFER_TEXT, PHONE,
  PRICE,
  PRICE_HEADER,
  PRICE_LIST, TELEGRAM_ACC,
} from "@Basket/data/content";
import { ButtonWithModal } from "@Basket/components/organisms/button-with-modal";
import { LinksLine } from "@Basket/components/moleculas/links";

export const Price = () => {
  const linksComponent = (<LinksLine phoneNumber={PHONE} userName={TELEGRAM_ACC} />);
  const button = <ButtonWithModal
    buttonText={BUTTON_ACTION_TEXT}
    text={OFFER_TEXT}
    headerText={OFFER_HEADER}
    component={linksComponent}
  />;
  return (
    <PriceSection
      id={NAVIGATION_MENU[2].id}
      headerText={PRICE_HEADER}
      price={PRICE}
      includedList={PRICE_LIST}
      buttonComponent={button}
    />
  );
};
