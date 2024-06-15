import React, { FC, ReactNode } from "react";

import { ComponentPadding } from "@Basket/components/atoms/component-padding";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { SectionHeader } from "@Basket/components/atoms/section-header";
import { Headers } from "@Basket/components/atoms/headers-component";
import { List } from "@Basket/components/atoms/list";
import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";

interface PriceSectionProps {
  headerText?: string;
  id?: string;
  price: string;
  includedList: Array<string>;
  buttonComponent?: ReactNode;
}

export const PriceSection: FC<PriceSectionProps> = (
  { id, headerText, price, includedList, buttonComponent  },
) => {
  return (
    <ComponentPadding id={id} additionalStyles="whiteBg">
      <Container>
        <Row>
          {headerText && (
            <Col>
              <SectionHeader headerText={headerText} isTextCenter />
            </Col>
          )}
          <Col additionalStyles="textCenter">
            <Headers headerLevel="h3">{price}</Headers>
          </Col>
          <Col additionalStyles="flex-center-center">
            <UniversalWrapper mt={32} mb={32}>
              <List listData={includedList} />
            </UniversalWrapper>
          </Col>
          {buttonComponent && (
            <Col additionalStyles="flex-center-center">{ buttonComponent}</Col>
          )}
        </Row>
      </Container>
    </ComponentPadding
    >);
};
