import classNames from "classnames";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { Logo } from "@Basket/components/atoms/logo/Logo";
import { Contacts } from "@Basket/components/organisms/header/Contacts";
import { Navigation } from "@Basket/components/organisms/header/Navigation";
import { NAVIGATION_MENU } from "@Basket/data/content";

import { BurgerMenu } from "../../moleculas/burger";

import styles from "./Header.module.scss";

const Header = () => {
  const burgerStyles = classNames("mobileView", "justify-content-flex-end", "display-flex", "align-items-center");

  return (
    <UniversalWrapper
      isFlex
      justifyContent="center"
      as="header"
      additionalStyles={styles.headerWrapper}
    >
      <Container>
        <Row additionalStyles="fullHeight display-flex align-items-center">
          <Col gridValues={{ lg: 2, md: 6, sm: 6 }}>
            <Logo />
          </Col>
          <Col additionalStyles={"displayView"} gridValues={{ lg: 7, md: 7, sm: 7 }}>
            <Navigation data={NAVIGATION_MENU} />
          </Col>
          <Col additionalStyles={"displayView"} gridValues={{ lg: 3, md: 3, sm: 3 }}>
            <Contacts />
          </Col>
          <Col gridValues={{ lg: 3, md: 6, sm: 6 }} additionalStyles={burgerStyles}>
            <BurgerMenu data={NAVIGATION_MENU} />
          </Col>
        </Row>
      </Container>
    </UniversalWrapper>
  );
};

export default Header;
