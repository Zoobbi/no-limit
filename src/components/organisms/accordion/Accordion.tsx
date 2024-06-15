import React, { FC } from "react";
import classNames from "classnames";

import { GridWrapper } from "@Basket/components/atoms/grid-wrapper";
import { SectionHeader } from "@Basket/components/atoms/section-header";
import { ComponentPadding } from "@Basket/components/atoms/component-padding";

import { AccordionItem } from "./AccordionItem";
import { AccordionItemProps } from "./types";
import styles from "./Accordion.module.scss";

interface AccordionListProps {
  items: Array<AccordionItemProps>;
  headerText?: string
  id?: string
}

export const Accordion: FC<AccordionListProps> = ({ id, items, headerText }) => {
  const accordionItems = items.map((item, index) => (
    <AccordionItem key={index} title={item.title} text={item.text} />
  ));

  const accordionStyles = classNames(styles.accordionWrapper, "whiteBg");


  return (
    <ComponentPadding id={id} as="section" additionalStyles={accordionStyles}>
      <GridWrapper>
        {headerText && <SectionHeader headerText={headerText} isTextCenter />}
        {accordionItems}
      </GridWrapper>
    </ComponentPadding>
  );
};
