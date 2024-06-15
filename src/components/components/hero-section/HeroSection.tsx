import React from "react";
import classNames from "classnames";

import { OPACITY_VALUES, Overlay } from "@Basket/components/atoms/overlay";
import { GridWrapper } from "@Basket/components/atoms/grid-wrapper";

import styles from "./HeroSection.module.scss";
import { Content } from "./Content";

const HeroSection = () => {
  const heroStyles = classNames(styles.heroSection);

  return (
    <section className={heroStyles}>
      <Overlay opacity={OPACITY_VALUES.light}>
        <GridWrapper containerAdditionalStyles="flex-center-center fullHeight">
          <Content />
        </GridWrapper>
      </Overlay>
    </section>
  );
};

export default HeroSection;
