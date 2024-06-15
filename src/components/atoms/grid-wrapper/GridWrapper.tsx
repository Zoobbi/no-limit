import { ReactNode } from "react";
import classNames from "classnames";

import { Col, Row } from "@Basket/components/atoms/grid";

interface GridWrapperProps {
  children: ReactNode;
  isZeroColPadding?: boolean;
  id?: string;
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements;
  gridValues?: {
    lg: number;
    md: number;
    sm: number;
  };
  containerAdditionalStyles?: string;
  rowAdditionalStyles?: string;
  colAdditionalStyles?: string;
}

export const GridWrapper = ({
  as: Component = "div",
  id,
  children,
  isZeroColPadding = false,
  gridValues = {
    lg: 12,
    md: 12,
    sm: 12,
  },
  containerAdditionalStyles = "",
  rowAdditionalStyles = "",
  colAdditionalStyles = "",
}: GridWrapperProps) => {
  const containerStyles = classNames("container", containerAdditionalStyles);
  const colStyles = classNames(colAdditionalStyles, { zeroPadding: isZeroColPadding });

  return (
    <Component className={containerStyles} id={id}>
      <Row additionalStyles={rowAdditionalStyles}>
        <Col gridValues={gridValues} additionalStyles={colStyles}>
          {children}
        </Col>
      </Row>
    </Component>
  );
};
