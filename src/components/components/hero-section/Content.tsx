import React from "react";
import classNames from "classnames";

import { HeaderMain } from "@Basket/components/atoms/header-main";
import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { BUTTON_ACTION_TEXT, HERO_DESCRIPTION, MAIN_HEADER, OFFER_HEADER, OFFER_TEXT } from "@Basket/data/content";
import { SectionHeader } from "@Basket/components/atoms/section-header";
import { ButtonWithModal } from "@Basket/components/organisms/button-with-modal";
import { LinksLine } from "@Basket/components/moleculas/links";
import { PHONE, TELEGRAM_ACC } from "@Basket/data/content";

import styles from "./HeroSection.module.scss";

export const Content = () => {
  const contentStyles = classNames("shadowText", styles.contentWrapper);

  const linksComponent = (<LinksLine phoneNumber={PHONE} userName={TELEGRAM_ACC} />);

  return(
    <UniversalWrapper
      isFlex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      additionalStyles={contentStyles}>
      <HeaderMain headerText={MAIN_HEADER} />
      <UniversalWrapper mtLg={32} mbLg={32} mtMd={24} mbMd={24} mtSm={24} mbSm={24}>
        <SectionHeader headerText={HERO_DESCRIPTION} isTextCenter isTextColor={false} />
      </UniversalWrapper>
      <ButtonWithModal
        buttonText={BUTTON_ACTION_TEXT}
        text={OFFER_TEXT}
        headerText={OFFER_HEADER}
        component={linksComponent}
      />
    </UniversalWrapper>
  );
};

