import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { Logo } from "@Basket/components/atoms/logo/Logo";
import { Contacts } from "@Basket/components/organisms/header/Contacts";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <UniversalWrapper
      isFlex
      justifyContent="center"
      as="header"
      additionalStyles={styles.headerWrapper}
    >
      <Container>
        <Row additionalStyles="fullHeight display-flex align-items-center">
          <Col gridValues={{ lg: 2, md: 2, sm: 2 }}>
            <Logo />
          </Col>
          <Col gridValues={{ lg: 7, md: 7, sm: 7 }}>
            text
          </Col>
          <Col gridValues={{ lg: 3, md: 3, sm: 3 }}>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </UniversalWrapper>
  );
};

export default Header;
