import styles from "./styles.module.scss";
interface HeaderMainProps {
  headerText: string;
  marginBottom?: number;
}

export const HeaderMain = ({
  headerText,
  marginBottom = 0,
}: HeaderMainProps) => {
  return (
    <h1
      className={styles.headerMain}
      style={{ marginBottom: `${marginBottom}px` }}
    >
      {headerText}
    </h1>
  );
};
