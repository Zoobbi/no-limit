import { FC, ReactNode } from "react";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";


export const ComponentPadding: FC<{
  additionalStyles?: string,
  children: ReactNode,
  id?: string;
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements}> = (
    {
      children,
      as: Component = "div",
      additionalStyles,
      id,
    },
  ) => (
    <UniversalWrapper
      additionalStyles={additionalStyles}
      as={Component}
      id={id}
      ptLg={48}
      pbLg={48}
      ptMd={32}
      pbMd={32}
      ptSm={24}
      pbSm={24}
    >
      {children}
    </UniversalWrapper>
  );
