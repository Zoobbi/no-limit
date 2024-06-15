import React, { FC } from "react";
import classNames from "classnames";

import { VertImageWithText } from "@Basket/components/moleculas/vertical-image-with-text-card";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { ComponentPadding } from "@Basket/components/atoms/component-padding";
import { SectionHeader } from "@Basket/components/atoms/section-header";

import styles from "./PersonalInfo.module.scss";

interface PersonalInfo {
  name: string;
  photo: string;
  review: Array<string>;
  alt: string;
}

interface PersonalInfoSectionProps {
  personals: Array<PersonalInfo>;
  sectionHeader: string;
}


export const PersonalInfoSection: FC<PersonalInfoSectionProps> = ({ personals, sectionHeader }) => {
  const cards = personals.map((person, index) => {
    const { name, photo, review, alt } = person;

    const colStyles = classNames("flex-g-center", styles.colStyles );

    return (
      <Col
        key={`${name}${index}`}
        gridValues={{
          lg: 4,
          md: 6,
          sm: 12,
        }}
        additionalStyles={colStyles}
      >
        <VertImageWithText title={name} image={photo} description={review} imageAlt={alt} />
      </Col>
    );
  });

  return (
    <ComponentPadding additionalStyles="whiteBg">
      <Container>
        <Row>
          <Col>
            <SectionHeader headerText={sectionHeader} isTextColor />
          </Col>
          {cards}
        </Row>
      </Container>
    </ComponentPadding>
  );
};
