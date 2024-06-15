import classNames from "classnames";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";

import styles from "./SectionHeader.module.scss";

interface HeaderSectionProps {
  headerText: string;
  isTextCenter?: boolean;
  isMarginsExist?: boolean;
  isTextColor?: boolean;
}

export const SectionHeader = ({
  headerText,
  isTextCenter = true,
  isMarginsExist = true,
  isTextColor = true,
}: HeaderSectionProps) => {

  const headerClasses = classNames(
    styles.headerSection,
    { ["textCenter"]: isTextCenter },
    { [styles.headerSectionTextColor]: isTextColor,
      [styles.headerSectionMainColor]: !isTextColor },
  );

  const Header = (
    <h2 className={headerClasses}>
      {headerText}
    </h2>
  );

  return (
    <>
      {isMarginsExist ? (
        <UniversalWrapper mbLg={32} mbMd={24} mtSm={16}>
          {Header}
        </UniversalWrapper>
      ) : (
        Header
      )}
    </>
  );
};
