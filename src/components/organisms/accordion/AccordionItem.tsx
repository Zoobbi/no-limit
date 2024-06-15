"use client";

import React, { FC, useState } from "react";
import classNames from "classnames";

import { Headers } from "@Basket/components/atoms/headers-component";
import { Paragraph } from "@Basket/components/atoms/paragraph";
import { SVG_SIZE, SVGIcon } from "@Basket/components/atoms/svg-icon";

import styles from "./Accordion.module.scss";
import { AccordionItemProps } from "./types";

export const AccordionItem: FC<AccordionItemProps> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionArrowStyles = classNames(
    { [styles.accordionArrow]: !isOpen },
    { [styles.accordionArrowActive]: isOpen },
  );

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionTitle} onClick={() => setIsOpen(!isOpen)}>
        <Headers headerLevel="h4">{title}</Headers>
        <SVGIcon
          src="/chevron-right.svg"
          width={SVG_SIZE.medium.width}
          height={SVG_SIZE.medium.height}
          className={accordionArrowStyles}
        />
      </div>
      {isOpen &&
        <div className={styles.accordionContent}>
          <Paragraph>
            {text}
          </Paragraph>
        </div>}
    </div>
  );
};
