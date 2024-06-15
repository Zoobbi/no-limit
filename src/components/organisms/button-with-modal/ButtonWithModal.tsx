"use client";

import React, { FC, ReactNode, useState } from "react";

import { Button } from "@Basket/components/atoms/button";
import { Modal } from "@Basket/components/moleculas/modal-window/Modal";
import { Headers } from "@Basket/components/atoms/headers-component";
import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Paragraph } from "@Basket/components/atoms/paragraph";

import styles from "./ButtonWithModal.module.scss";

interface ButtonWithModalProps {
  buttonText: string;
  text?: string;
  headerText?: string;
  component?: ReactNode;
}

export const ButtonWithModal: FC<ButtonWithModalProps> = ({ buttonText, text, headerText, component }) => {
  const [isOpen, setIsOpen] = useState(false);


  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button onClick={onOpen}>{buttonText}</Button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <UniversalWrapper mb={12} additionalStyles={styles.headerWrapper}>
          <Headers headerLevel="h3">{headerText}</Headers>
        </UniversalWrapper>
        <UniversalWrapper mb={32}>
          <Paragraph isTextCenter>{text}</Paragraph>
        </UniversalWrapper>
        {component}
      </Modal>
    </>
  );
};
