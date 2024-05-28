import Link from "next/link";

import { SVGIcon } from "@Basket/components/atoms/svg-icon";
import { ROUTES } from "@Basket/utils/constants";

import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href={ROUTES.home}>
      <SVGIcon
        width="120px"
        height="58px"
        src="/logo.svg"
        className={styles.logo}
      />
    </Link>
  );
};
