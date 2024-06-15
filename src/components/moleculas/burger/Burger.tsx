"use client";

import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";

import { NavigationLink, PhoneLink, TelegramLink, WhatsAppLink } from "@Basket/components/moleculas/links";
import { PHONE, TELEGRAM_ACC } from "@Basket/data/content";
import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Headers } from "@Basket/components/atoms/headers-component";
import { Paragraph } from "@Basket/components/atoms/paragraph";

import styles from "./Burger.module.scss";

interface BurgerProps {
  data: Array<{
    link: string;
    id: string;
    text: string;
  }>
}

export const BurgerMenu: FC<BurgerProps> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [docEnv, setDocEnv] = useState(false);

  const links = data.map((link, index) => (
    <NavigationLink
      key={`${link.link}${index}`}
      link={link.link}
      text={link.text}
      onClick={() => {setOpen(false);}}
    />
  ));

  const menu = isOpen && (
    <div className={styles.portalMenu}>
      <nav className={styles.mobileNavigation}>
        {links}
      </nav>
      <UniversalWrapper mt={32}>
        <Headers headerLevel="h3">Наши контакты</Headers>
      </UniversalWrapper>
      <UniversalWrapper mt={24} additionalStyles={styles.menuContacts}>
        <PhoneLink phoneNumber={PHONE} />
        <UniversalWrapper additionalStyles={styles.socialmediaGap} isFlex alignItems="center">
          <Paragraph>
            Telegram:
          </Paragraph>
          <TelegramLink userName={TELEGRAM_ACC} isOriginColor />
        </UniversalWrapper>
        <UniversalWrapper additionalStyles={styles.socialmediaGap} isFlex alignItems="center">
          <Paragraph>
            WhatsApp:
          </Paragraph>
          <WhatsAppLink phoneNumber={PHONE} isOriginColor/>
        </UniversalWrapper>
      </UniversalWrapper>
    </div>
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      setDocEnv(true);
    }
  }, []);


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("disableScroll");
    } else {
      document.body.classList.remove("disableScroll");
    }
  }, [isOpen]);

  if (!docEnv) {
    return null;
  }

  return (
    <>
      <div className={styles.burgerMenuWrapper}>
        <div className={classNames(styles.burgerMenu, { [styles.open]: isOpen })} onClick={() => setOpen(!isOpen)}>
          <div className={classNames(styles.burgerLine, styles.topLine)}></div>
          <div className={classNames(styles.burgerLine, styles.middleLine)}></div>
          <div className={classNames(styles.burgerLine, styles.bottomLine)}></div>
        </div>
      </div>
      {createPortal(menu, document?.body)}
    </>
  );
};
