import { FC } from "react";

import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { ComponentPadding } from "@Basket/components/atoms/component-padding";
import { SectionHeader } from "@Basket/components/atoms/section-header/SectionHeader";
import { HOME_PAGE_SECTION_HEADERS } from "@Basket/data/content";

import { InfoCard } from "./InfoCard";
import styles from "./InfoSVGSection.module.scss";

interface InformationSVGSectionProps {
  items: Array<{icon: string, text: string}>
  id: string;
}

export const InformationSVGSection: FC<InformationSVGSectionProps> = ({ items, id }) => {
  const cards = items.map((item, index, array) => (
    <Col gridValues={{ lg: 3, md: 6, sm: 6 }} key={`${index}${item.text}`}>
      <InfoCard icon={item.icon} text={item.text} isMarginBottom={index + 1 <= array.length / 2}/>
    </Col>
  ));

  return (
    <ComponentPadding id={id} as="section" additionalStyles={styles.infoCardsWrapper}>
      <SectionHeader headerText={HOME_PAGE_SECTION_HEADERS.campTraining} isTextCenter isMarginsExist />
      <Container>
        <Row>
          {cards}
        </Row>
      </Container>
    </ComponentPadding>
  );
};

