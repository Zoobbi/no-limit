import React, { FC } from "react";

import { ComponentPadding } from "@Basket/components/atoms/component-padding";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { SectionHeader } from "@Basket/components/atoms/section-header";
import type { CommonImage } from "@Basket/components/moleculas/text-with-image";
import { TextWithImage } from "@Basket/components/moleculas/text-with-image";

interface PicturesWithTextProps {
  headerText?: string;
  id?: string;
  data: Array<{
    image: CommonImage,
    text: string;
  }>
}

export const PicturesWithText: FC<PicturesWithTextProps> = ({ headerText, data, id }) => {
  const pictures = data.map((item, index) => (
    <Col key={item.text}>
      <TextWithImage isReverse={(index + 1) % 2 === 0} image={item.image} text={item.text} />
    </Col>
  ));

  return (
    <ComponentPadding id={id} as="section">
      <Container>
        <Row>
          {headerText && (
            <Col>
              <SectionHeader headerText={headerText} isTextCenter />
            </Col>
          )}
          {pictures}
        </Row>
      </Container>
    </ComponentPadding>
  );
};
