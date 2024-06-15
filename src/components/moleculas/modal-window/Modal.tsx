"use client";
import { createPortal } from "react-dom";
import { FC, ReactNode, useRef, MouseEvent } from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: (() => void);
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === ref.current) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      onClick={handleClick}
      ref={ref}
      className={styles.modalWrapper}
    >
      <div
        className={styles.modalContent}
      >
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </button>
      </div>
    </div>,
    document.body,
  );
};

