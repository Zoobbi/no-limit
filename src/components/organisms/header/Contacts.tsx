import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { PhoneLink, TelegramLink, WhatsAppLink } from "@Basket/components/moleculas/links";
import { PHONE, TELEGRAM_ACC } from "@Basket/data/content";

import styles from "./Header.module.scss";

export const Contacts = () => {
  return (
    <UniversalWrapper isFlex alignItems="center" justifyContent="flex-end" additionalStyles={styles.contacts}>
      <PhoneLink phoneNumber={PHONE} />
      <TelegramLink userName={TELEGRAM_ACC} />
      <WhatsAppLink phoneNumber={PHONE}/>
    </UniversalWrapper>
  );
};
