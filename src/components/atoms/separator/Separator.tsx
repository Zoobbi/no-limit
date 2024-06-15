import { ReactNode } from "react";

import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";


interface SeparatorProps {
  children: ReactNode
}

export const Separator = ({ children }: SeparatorProps) => {
  return (
    <UniversalWrapper pbLg={96} pbMd={48} pbSm={32}>
      {children}
    </UniversalWrapper>
  );
};
