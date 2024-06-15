import { FC } from "react";
import Image from "next/image";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";
import { Headers } from "@Basket/components/atoms/headers-component";
import { List } from "@Basket/components/atoms/list";

import styles from "./VertImageWithText.module.scss";

interface VertImageWithTextProps {
  title: string;
  image: string;
  description: Array<string>;
  imageAlt: string;
}

export const VertImageWithText: FC<VertImageWithTextProps> = ({ title, image, description, imageAlt }) => {
  return (
    <UniversalWrapper pt={32} pb={32} additionalStyles={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} objectFit="cover" fill src={image} alt={imageAlt} />
      </div>
      <Headers headerLevel="h4">{title}</Headers>
      <div>
        <List listData={description}/>
      </div>
    </UniversalWrapper>
  );
};

