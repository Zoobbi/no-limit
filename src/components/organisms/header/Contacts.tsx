import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { TelegramLink, WhatsAppLink } from "@Basket/components/moleculas/links";
import { PHONE } from "@Basket/data/content";

import styles from "./Header.module.scss";

export const Contacts = () => {
  return (
    <UniversalWrapper isFlex alignItems="center" justifyContent="flex-end" additionalStyles={styles.contacts}>
      <TelegramLink userName="Zoobbi"/>
      <WhatsAppLink phoneNumber={PHONE}/>
    </UniversalWrapper>
  );
};
