import React from "react";
import classNames from "classnames";

import { HeaderMain } from "@Basket/components/atoms/header-main";
import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Button } from "@Basket/components/atoms/button";
import { BUTTON_ACTION_TEXT, HERO_DESCRIPTION, MAIN_HEADER } from "@Basket/data/content";
import { Paragraph } from "@Basket/components/atoms/paragraph";

import styles from "./HeroSection.module.scss";

export const Content = () => {
  const contentStyles = classNames("shadowText", styles.contentWrapper);

  return(
    <UniversalWrapper
      isFlex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      additionalStyles={contentStyles}>
      <HeaderMain headerText={MAIN_HEADER} />
      <UniversalWrapper mtLg={32} mbLg={32} mtMd={24} mbMd={24} mtSm={24} mbSm={24}>
        <Paragraph isTextCenter>{HERO_DESCRIPTION}</Paragraph>
      </UniversalWrapper>
      <Button>{BUTTON_ACTION_TEXT}</Button>
    </UniversalWrapper>
  );
};

