import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { PhoneLink, TelegramLink, WhatsAppLink } from "@Basket/components/moleculas/links";
import { PHONE, RIGHTS_RESERVED, TELEGRAM_ACC } from "@Basket/data/content";
import { Paragraph } from "@Basket/components/atoms/paragraph";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <UniversalWrapper pt={32} pb={32}>
        <Container>
          <Row additionalStyles="flex-center-center">
            <Col gridValues={{ lg: 8, md: 8, sm: 12 }}>
              <Paragraph>&copy; {RIGHTS_RESERVED}</Paragraph>
            </Col>
            <Col gridValues={{ lg: 4, md: 4, sm: 12 }}>
              <UniversalWrapper isFlex alignItems="center" justifyContent="flex-end" additionalStyles={styles.contacts}>
                <PhoneLink phoneNumber={PHONE} />
                <TelegramLink userName={TELEGRAM_ACC} />
                <WhatsAppLink phoneNumber={PHONE}/>
              </UniversalWrapper>
            </Col>
          </Row>
        </Container>
      </UniversalWrapper>
    </footer>
  );
};

export default Footer;
