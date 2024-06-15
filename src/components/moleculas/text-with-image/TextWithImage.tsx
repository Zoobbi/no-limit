import { FC } from "react";
import classNames from "classnames";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Col, Container, Row } from "@Basket/components/atoms/grid";

import styles from "./Text.module.scss";

export interface CommonImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface TextWithImageProps {
  text: string;
  isTextCenter?: boolean;
  isReverse?: boolean;
  image: CommonImage;
}

export const TextWithImage: FC<TextWithImageProps> = (
  { text,
    isTextCenter = false,
    image = {
      src: "",
      alt: "",
    },
    isReverse = false,
  }) => {
  const textStyles = classNames(
    styles.textComponent,
    { ["textCenter"]: isTextCenter },
  );
  const rowStyles = classNames(
    styles.gap,
    { [styles.flexSwap]: isReverse },
  );
  const { src, alt, width, height } = image;
  const imageProps = (width && height) ? { width, height } : { fill: "true" };

  return (
    <div className={textStyles}>
      <UniversalWrapper pt={48} pb={48}>
        <Container>
          <Row additionalStyles={rowStyles}>
            <Col additionalStyles={styles.colStyles} gridValues={{ lg: 6, md: 12, sm: 12 }}>
              <img
                {...imageProps}
                src={src}
                alt={alt}
                className={styles.image}
              />
            </Col>
            <Col  gridValues={{ lg: 4, md: 12, sm: 12 }}>
              <div className={styles.textWrapper}>
                {text}
              </div>
            </Col>
          </Row>
        </Container>
      </UniversalWrapper>
    </div>
  );
};
